import { Component, ViewChild, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidator } from './custome-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male','female'];
  sginupfrom : FormGroup; 
  forbiddenusernames = ['shvou' ,  'fahim'];

  ProjectForm : FormGroup;

  ngOnInit(){
    this.sginupfrom = new FormGroup({
      'userData' : new FormGroup({       
      'username' : new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
      'email' : new FormControl(null,[Validators.required, Validators.email],this.forbiddenEmail),
      }),
      'gender' : new FormControl('female'),
      'hobbies': new FormArray([])

    });

    this.sginupfrom.valueChanges.subscribe(
      (value) => console.log(value)

    );
    this.sginupfrom.statusChanges.subscribe(
      (value) => console.log(value)

    );
    this.sginupfrom.setValue({
      'userData':{
        'username' : 'Max',
        'email' : 'test@gmail.com'
      },
      'gender' : 'male',
      'hobbies': []
    });



    //assignment type sctript code
    this.ProjectForm = new FormGroup({
        'projectName' : new FormControl(
          null,
          [Validators.required, CustomValidator.inValidProjectname], 
          CustomValidator.asyncInvalidProjectName),
        'email' : new FormControl(null, [Validators.required, Validators.email]),
        'status' : new FormControl('critical'),


    });
  }
  ////assignment
  onSaveProject(){
    console.log(this.ProjectForm.value);
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

  forbiddenEmail(control : FormControl): Promise<any> | Observable<any>{
    const promise =  new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test@test.com'){
          resolve({'emailIsForbidden':true});
        }else{
          resolve(null);
        }
      },1500);
    });
    return promise;
  }
  

  onSubmit(){
    console.log(this.sginupfrom);
    this.sginupfrom.reset();
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
