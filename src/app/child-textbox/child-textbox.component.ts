import { Component, Input, forwardRef, Optional, Host, SkipSelf } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, ControlContainer, AbstractControl } from '@angular/forms';

@Component({
  selector: 'child-textbox',
  templateUrl: './child-textbox.component.html',
  styleUrls: ['./child-textbox.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChildTextboxComponent),
      multi: true
    }
  ]
})

export class ChildTextboxComponent implements ControlValueAccessor {

  onChange: () => void;
  onTouched: () => void;
  private control: AbstractControl;
  @Input() formControlName: string;
  @Input() inputParameter:string;

  constructor( @Optional() @Host() @SkipSelf() private controlContainer: ControlContainer ) { 

  }

  writeValue(): void {
    // this.control.setValue("This is my initial value");
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
