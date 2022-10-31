import { Component, OnInit, ɵinitServicesIfNeeded } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
//import { HireService } from 'src/app/service/buyer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.scss']
})
export class BuyerComponent implements OnInit {
  // FormData! : FormGroup;
  // Service: any = ['Web and Mobile Development', 'Business Apps Development', 'Prepackaged and Enterprise Software Development', 'Software Development Outsourcing, Staffing and Recruitment', 'Digital Product Designs and Implementation', 'Web3 and Blockchain Development']
  // Client: any = ['Individual', 'Company', 'Government Entity', 'Non-Profit Organization', 'Organization', 'Other']
  // constructor(private builder: FormBuilder, private router: Router, ) { }
    //private
    //hire: HireService


  ngOnInit(): void {
    // this.FormData = new FormGroup({
    // Fullname: new FormControl('', [Validators.required]),
    // Email: new FormControl('', [Validators.required, Validators.email]),
    // Serviceneeded: new FormControl('', [Validators.required]),
    // clientType: new FormControl('', [Validators.required]),
    // Message: new FormControl('', [Validators.required])
    // });
  }


    // onSubmit(FormData: any) {
    //   console.log(FormData)
    //   this.buyer.PostMessage(FormData)
    //     .subscribe( response => {
    //       this.router.navigate(['/hireresponse']),
    //     console.log(response)
    //   }, error => {
    //     console.warn(error.responseText)
    //     console.log({error})
    //   })
  }
