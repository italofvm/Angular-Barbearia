import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', 'contact.component.responsive.css'],
})
export class ContactComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.minLength(11)]],
      mensagem: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }
}
