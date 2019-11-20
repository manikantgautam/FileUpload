import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-file-add',
  templateUrl: './file-add.component.html',
  styleUrls: ['./file-add.component.css']
})
export class FileAddComponent implements OnInit {
  
  fileToUpload: File = null;
  fileSource: any;
  loading: boolean;
  constructor(private userService:UserService,private router: Router) {
    this.loading=false;
    this.fileSource = 'SALES';
   }

  ngOnInit() {
  }


  handleFileInput(files: FileList) {
    this.loading=true;
    this.fileToUpload = files.item(0);
    this.uploadFileToActivity();
}
selectOption(source){
  this.fileSource=source;
}
uploadFileToActivity() {
  this.userService.postFile(this.fileToUpload,this.fileSource).subscribe(res=>{
        console.log(res['data']);
        if(res['message']=="SUCCESSFUL"){
          this.loading=false;
          this.router.navigateByUrl('/');
        }
   })
}
}
