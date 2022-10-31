import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from 'src/app/service/contact.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  FormData!: FormGroup;

  constructor(private builder: FormBuilder, private router: Router, private contact: ContactService) {}

  ngOnInit() {
    this.FormData = new FormGroup({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Message: new FormControl('', [Validators.required])
    });
  }

  onSubmit(FormData: any) {
    console.log(FormData)
      this.contact.PostMessage(FormData)
        .subscribe( response => {
        this.router.navigate(['/contactresponse']),
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({error})
      })
  }
}
