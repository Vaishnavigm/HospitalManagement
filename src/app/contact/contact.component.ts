import { Component, OnInit } from '@angular/core';
import { Hospital } from '../hospital';
import { HospitalService } from '../hospital.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  Hospital: Hospital = new Hospital();
  constructor(private HospitalService: HospitalService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveHospital(){
    this.HospitalService.bookAppointment(this.Hospital).subscribe( data =>{
      console.log(data);
      this.goToHospitalList();
    },
    error => console.log(error));
  }

  goToHospitalList(){
    this.router.navigate(['/Hospital']);
  }
  
  onSubmit(){
    console.log(this.Hospital);
    this.saveHospital();
  }
}
