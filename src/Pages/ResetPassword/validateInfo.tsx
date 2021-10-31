export default function validateInfo(values: { password: string ; confirmPassword: string; }){
    let errors:any = {};

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