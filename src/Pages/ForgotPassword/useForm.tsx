import { useState, useEffect, SetStateAction } from "react";
import { AxiosInstance } from "../../AxiosInstance";

const useForm = (callback: () => void, validateInfo: (values: { email: string; }) => SetStateAction<{}>) => {
    const [values, setValues] = useState({
        email: ''
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
        setErrors(validateInfo(values));

        AxiosInstance
            .post("/forgotpassword", {
                email: values.email,
            })
            .then((resp) => {
                if (resp.status === 200) {
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