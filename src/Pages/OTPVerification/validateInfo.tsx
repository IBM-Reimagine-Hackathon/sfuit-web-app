export default function validateInfo(values: { otp: string; }){
    let errors: any = {};

    if(values.otp === null){
        errors.name = "OTP required"
    }
    else if(!/^\d+$/.test(values.otp)){
        errors.otp = "OTP should only contain numbers"
    }

    return errors;
}