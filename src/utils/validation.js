export const LoginValidate = (email,password) =>{
    const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,15}$/

    if(!email.match(emailPattern)) return "Invalid email" ;
    if(!password.match(passwordPattern)) return "Invalid Password";

    return null;
}

