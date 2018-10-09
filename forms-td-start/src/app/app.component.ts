import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signForm: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female', 'unknown'];
  defaultGender = 'unknown';

  suggestUserName() {
    const suggestedName = 'Superuser';

    this.signForm.form.patchValue({username: suggestedName});
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signForm);
  }

}
