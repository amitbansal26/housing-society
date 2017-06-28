import { Component, OnInit } from '@angular/core';
import { AlertService, AuthenticationService } from '../services/index';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;
  
  constructor(private route: ActivatedRoute, private router: Router,
     private authenticationService: AuthenticationService, private alertService: AlertService) { }

  ngOnInit() {
    this.authenticationService.login(this.model.username, this.model.password)
    .subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
        
      }
    );
  }

}
