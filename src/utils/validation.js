export const LoginValidate = (email,password) =>{
    const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,15}$/

    if(!email.match(emailPattern)) return "Invalid email" ;
    if(!password.match(passwordPattern)) return "Invalid Password";

    return null;
}

export const SignupValidate = (name,email,password) => {
    const namePattern = /^[a-zA-Z]+(\s[a-zA-Z]+){0,2}$/ ;
    const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/ ;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).{8,15}$/;

    if(!name.match(namePattern)) return "Invalid Name";
    if(!email.match(emailPattern)) return "Invalid Email";
    if(!password.match(passwordPattern)) return "Invalid Password";

    return null;

}