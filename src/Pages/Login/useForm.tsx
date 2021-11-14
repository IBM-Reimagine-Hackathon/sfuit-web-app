import { useState, useEffect, SetStateAction } from "react";
import { AxiosInstance } from "../../AxiosInstance";

const useForm = (callback: () => void, validateInfo: (arg0: { email: string; password: string; }) => SetStateAction<{}>) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setErrors(validateInfo(values));
    AxiosInstance.post("/login", {
      email: values.email,
      password: values.password,
    })
      .then((resp) => {
        if (resp.status === 200) {
          localStorage.setItem("name", JSON.stringify(resp.data.name));
          localStorage.setItem("dob", JSON.stringify(resp.data.dob));
          localStorage.setItem("sfuit", JSON.stringify({token:resp.data.token}));
          setSuccess(true);
        } else {
          setErrors({ message: resp.data.message });
        }
        setIsSubmitting(true);
      })
      .catch((e) => setErrors({ message: "Some thing went wrong" }));
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors, success };
};

export default useForm;
