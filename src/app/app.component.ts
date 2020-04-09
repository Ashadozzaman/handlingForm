import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') submitform: NgForm;
  defaultQuestion = 'pet';
  answer='';
  genders = ['male','female'];
  user ={
    username: '',
    email: '',
    secret: '',
    gender: '',
    questionAnswer:''
  };
  submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.submitform.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: 'shovoua@gmail.com'
    //   },
    //   secret:'pet',
    //   gender: 'male',
    //   questionAnswer:''
    // });


    this.submitform.form.patchValue({
      userData:{
        username: 'Shvou',
      }
    });
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }
  onSubmit(){
    this.submitted = true;
    this.user.username = this.submitform.value.userData.username,
    this.user.email = this.submitform.value.userData.email,
    this.user.secret = this.submitform.value.secret,
    this.user.gender = this.submitform.value.gender,
    this.user.questionAnswer = this.submitform.value.questionAnswer,


    this.submitform.reset();
  }
}
