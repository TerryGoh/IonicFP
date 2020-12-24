import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
public userinfo:any;authtoken:any;studentid:any;
constructor(private nativeHttp:HTTP,private storage:Storage) {}

GenerateLoginInfo(){
  this.storage.get('authlogin').then((val) => {
    //console.log(val.authentication_Token)
    this.authtoken=val.authentication_Token;
    this.studentid=val.student_Id;
    this.setselectedtoken(this.authtoken)
    this.setselectedStudentId(this.studentid)
    console.log(this.getselectedtoken())
    console.log(this.getselectedStudentId())
    });
} 
public setselectedtoken(authtoken){
  this.authtoken=authtoken
}
public getselectedtoken(){
  return this.authtoken;
 }
public setselectedStudentId(studentid){
  this.studentid=studentid
}
public getselectedStudentId(){
  return this.studentid;
 }

}
