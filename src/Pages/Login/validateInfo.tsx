export default function validateInfo(values: { email: string; password: string; }){
    let errors:any = {};

    if(!values.email){
        errors.email = "Email required"
    }
    else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)){
        errors.email = "Email address is invalid";
    }

    if(!values.password){
        errors.password = "Password is required"
    }
    else if(values.password.length < 6){
        errors.password = "Password needs to be 6 characters or more"
    }

    return errors;
}