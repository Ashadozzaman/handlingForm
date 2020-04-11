import { Component, ViewChild, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male','female'];
  sginupfrom : FormGroup; 
  forbiddenusernames = ['shvou' ,  'fahim'];

  ngOnInit(){
    this.sginupfrom = new FormGroup({
      'userData' : new FormGroup({       
      'username' : new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
      'email' : new FormControl(null,[Validators.required, Validators.email]),
      }),
      'gender' : new FormControl('female'),
      'hobbies': new FormArray([])

    });
  }

  onAddHobby(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.sginupfrom.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl) : {[s: string] : boolean}{
    if(this.forbiddenusernames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true};
    }
    return null;
  }

  onSubmit(){
    console.log(this.sginupfrom);
  }

  // start tempalate drivel part one
  // @ViewChild('f') submitform: NgForm;
  // defaultQuestion = 'pet';
  // answer='';
  // genders = ['male','female'];
  // user ={
  //   username: '',
  //   email: '',
  //   secret: '',
  //   gender: '',
  //   questionAnswer:''
  // };
  // submitted = false;
  // suggestUserName() {
  //   const suggestedName = 'Superuser';
  //   // this.submitform.setValue({
  //   //   userData: {
  //   //     username: suggestedName,
  //   //     email: 'shovoua@gmail.com'
  //   //   },
  //   //   secret:'pet',
  //   //   gender: 'male',
  //   //   questionAnswer:''
  //   // });


  //   this.submitform.form.patchValue({
  //     userData:{
  //       username: 'Shvou',
  //     }
  //   });
  // }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }
  // onSubmit(){
  //   this.submitted = true;
  //   this.user.username = this.submitform.value.userData.username,
  //   this.user.email = this.submitform.value.userData.email,
  //   this.user.secret = this.submitform.value.secret,
  //   this.user.gender = this.submitform.value.gender,
  //   this.user.questionAnswer = this.submitform.value.questionAnswer,


  //   this.submitform.reset();
  // }

  //end 1st part of templating
}
