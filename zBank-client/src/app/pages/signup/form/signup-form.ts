import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class SignUpForm {
  private formBuilder: FormBuilder;
  private form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
    this.form = this.createFrom();
  }

  private createFrom(): FormGroup {
    return this.formBuilder.group({
      firstname: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      lastname: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        Validators.minLength(5)
      ])),
      phonenumber: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('/^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/'),
        Validators.minLength(10)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/')
      ])),
      confirmpassword: new FormControl('', Validators.required)
    },
      { validator: this.passwordMatchValidator })
  }

  private passwordMatchValidator(form: FormGroup) {
    return form.controls['password'].value === form.controls['confirmpassword'].value ? null : { 'mismatch': true };
  }

  validationUserMessage = {
    firstname: [
      { type: "required", message: "Please enter your First Name." }
    ],
    lastname: [
      { type: "required", message: "Please enter your Last Name." }
    ],
    email: [
      { type: "required", message: "Please enter your Email." },
      { type: "pattern", message: "The email entered is incorrect." }
    ],
    phoneNumber: [
      { type: "required", message: "Please enter your Phone Number." },
      { type: "pattern", message: "The phone number entered is not a valid phone number." },
      { type: "minlength", message: "The Phone Number must be at least 10 characters or more." }
    ],
    password: [
      { type: "required", message: "Please enter your Password" },
      { type: "pattern", message: "Password does not meet requirements." }
    ],
    confirmPassword: [
      { type: "required", message: "Please re-enter your Password" },
      { type: "mismatch", message: "Passwords do not match." }
    ]
  }
}
