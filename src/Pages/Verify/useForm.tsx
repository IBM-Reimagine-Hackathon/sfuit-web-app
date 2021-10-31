import { useState, useEffect, SetStateAction } from "react";
import { AxiosInstance } from "../../AxiosInstance";

const useForm = (callback: () => void, value: String) => {
    const [values, setValues] = useState({
        deviceid: ''
    })

    const [errors, setErrors] = useState<any>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState<boolean | null>(null);
    const [confirm, setConfirm] = useState<boolean | null>(null);

    const handleChange = (e: { target: { name: any; value: any; }; }) =>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e: { preventDefault: () => void; }) =>{
        e.preventDefault();
        
        AxiosInstance
        .get("/verify", {
            params:{
                deviceId: value
            }
        })
        .then((resp) => {
            if (resp.status === 200) {
            localStorage.setItem("deviceId", JSON.stringify(value));
            setSuccess(true);
            } else {
            setErrors({ message: resp.data.message });
            }
            setIsSubmitting(true);
        })
        .catch((e) => setErrors({ message: "Some thing went wrong" }));

        AxiosInstance
        .get("/authentication", {
            params:{
                deviceId: value
            }
        })
        .then((resp) => {
            if (resp.status === 200) {
            setConfirm(true);
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

    return {handleChange, values, handleSubmit, errors, success, confirm};
};

export default useForm;