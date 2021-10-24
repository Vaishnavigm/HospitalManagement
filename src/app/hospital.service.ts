import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { Hospital } from './hospital';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class HospitalService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getAppointments(): Observable<Hospital[]> {
    return this.http.get<Hospital[]>(`${this.apiServerUrl}/hospital/all`); 
  }

  public bookAppointment(hospital: Hospital): Observable<Hospital> {
    return this.http.post<Hospital>(`${this.apiServerUrl}/hospital/add`, hospital);
  }

  public updateAppointment(hospital: Hospital): Observable<Hospital> {
    return this.http.put<Hospital>(`${this.apiServerUrl}/hospital/update`, hospital);
  }

  public deleteAppointment(appointmentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/hospital/delete/${appointmentId}`);
  }

  // get name(){                               
  //   return this.getAppointments.get('name');
  // }

  // get StudentEmail(){
  //   return this.updateAppointment.get('patient_email');
  // }
  // get StudentBranch(){
  //   return this.updateAppointment.get('student_branch');
  // }
  // get StudentId(){
  //   return this.updateAppointment.get('student_id');
  // }
  
}
