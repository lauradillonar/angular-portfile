import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfileService } from 'src/app/services/portfile.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  isEmail = /\S+@\S+\.\S+/;

  constructor(private data: PortfileService, private fb: FormBuilder) { 
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1024)]]
    });
  } 

  myPortfile:any;
  lang: any;

  ngOnInit(): void {
    this.data.getData().subscribe(data =>{
      this.myPortfile=data;
      this.lang=this.myPortfile.en;
    });

    // this.initForm();
    
  }

  onSave(): void {
    if (this.contactForm.valid){
      console.log(this.contactForm.value);
    } else {
      console.log('Not valid');
    }
  }

  isValidField(field: string):string{
    const validatedField = this.contactForm.get(field);
    return (!validatedField?.valid && validatedField?.touched) ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }


  private initForm():void{
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1024)]]
    });
  }
}
