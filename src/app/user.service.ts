import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  baseUrl:string='';
  users:string[];
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  userDetailsActive: boolean;

   
  
  constructor(private http: HttpClient) { 
   this.baseUrl="http://localhost:8080/";
  
  }

  

  getFiles():Observable<any>{
    return this.http.get(`http://localhost:8080/api/getAllFiles`);
}
  deleteUser(id):Observable<any>{
    return this.http.put(`${this.baseUrl}/delete/${id}`,id);
  }


  addUserUser(data):Observable<any>{
    return this.http.post(`${this.baseUrl}/addUser`,data,this.options);
  }

  updateUser(data: any): any {
    return this.http.post(`${this.baseUrl}/updateUser`,data,this.options);
  }

  getUserById(id):Observable<any>{
    return this.http.get(`${this.baseUrl}/getUserById/${id}`);
  }


  uploadImage(data: any): any {
    return this.http.post(`${this.baseUrl}/uploadImg`,data,this.options);
  }

  postFile(fileToUpload: File,sourceName): any {
    const endpoint = `${this.baseUrl}api/file/upload?fileSource=`+sourceName;
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post(endpoint,formData);
}
  
}
