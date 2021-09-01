class Valid2 extends Valid {
    constructor(email, password){
        super(email, password);
        this.emailError = '';
        this.passwordError = '';
    }

    validate(){
        if(this.email == '' && this.password.length < 6){
           this.isValid;
           this.emailError = 'email empty';
           this.passwordError = 'min length 6';
       }else if(this.email == ''){
           this.isValid;
           this.emailError = 'email empty';
       }else if(this.password.length < 6){
           this.isValid;
           this.passwordError = 'min length 6';
       } else {
           this.isValid = true;
       }
   }
}