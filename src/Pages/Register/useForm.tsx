import { useState, useEffect, SetStateAction } from "react";
import { AxiosInstance } from "../../AxiosInstance";

const useForm = (callback: () => void, validateInfo: (arg0: { email: string; name: string; dob: string; phone: string; password: string; confirmPassword: string; device_id: string }) => SetStateAction<{}>) => {
    const [values, setValues] = useState({
        email: '',
        name: '',
        dob: '',
        phone: '',
        password: '',
        confirmPassword: '',
        device_id: '',
    })

    const [errors, setErrors] = useState<any>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState<boolean | null>(null);

    const handleChange = (e: { target: { name: any; value: any; }; }) =>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e: { preventDefault: () => void; }) =>{
        e.preventDefault();

        setErrors(validateInfo(values));

        AxiosInstance.post("/register", {
                name: values.name,
                email: values.email, 
                dob: values.dob,
                phone: values.phone,
                password: values.password,
                device_id: localStorage.getItem("deviceId"),
            })
            .then((resp) => {
                if (resp.status === 200) {
                    localStorage.setItem("token", resp.data.token);
                    localStorage.setItem("email", values.email);
                setSuccess(true);
                } else {
                setErrors({ message: resp.data.message });
                }
                setIsSubmitting(true);
            })
            .catch((e) => setErrors({ message: "Some thing went wrong" }));
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback();
        }
    }, [errors]
    );

    return {handleChange, values, handleSubmit, errors, success};
};

export default useForm;