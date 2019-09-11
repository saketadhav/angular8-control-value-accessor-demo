import { Component } from '@angular/core';
import {ChildTextboxComponent} from './child-textbox/child-textbox.component'
import {Form, FormControl, FormBuilder, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public myform: FormGroup;

  title = 'My parent component';

  constructor(public formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.myform = this.formBuilder.group({
      nameFC: new FormControl(),
      addressFC: new FormControl()
    });
  }

  onSave(): void{
    console.log(this.myform.controls);
  }


}
