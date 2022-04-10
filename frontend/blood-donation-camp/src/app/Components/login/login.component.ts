import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User
  errMsg:string=''
    constructor(private router:Router) {
      this.user=new User();
     }

    ngOnInit(): void {
    }
    Validate()
    {
      let uname=this.user.userName;
      let pwd=this.user.password;

      if(uname=="dheeraj" && pwd=="123")
      {


          //redirect to admin component
          this.router.navigateByUrl('homepage')

      }
      else
      {
        this.errMsg='Pls Enter Username and Password'
      }
    }

  }
