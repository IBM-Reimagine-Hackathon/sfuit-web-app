export default function validateInfo(values: { email: string; name: string; dob: string; phone: string; password: string; confirmPassword: string; }){
    let errors: any = {};

    if(!values.email){
        errors.email = "Email required"
    }
    else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)){
        errors.email = "Email address is invalid";
    }

    if(!values.name.trim()){
        errors.name = "Name required"
    }

    if(!values.dob){
        errors.dob = "Date Of Birth is required"
    }

    if(!values.phone){
        errors.phone = "Phone Number is required"
    }

    if(!values.password){
        errors.password = "Password is required"
    }
    else if(values.password.length < 6){
        errors.password = "Password needs to be 6 characters or more"
    }

    if(!values.confirmPassword){
        errors.confirmPassword = "Password is required"
    }
    else if(values.confirmPassword !== values.password){
        errors.confirmPassword = "Passwords do not match"
    }

    return errors;
}