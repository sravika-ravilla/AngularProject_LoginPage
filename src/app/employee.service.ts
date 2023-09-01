import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient){}
  getEmpDetails():Observable<any>{
  return this.http.get('http://localhost:3000/customers');

}
}