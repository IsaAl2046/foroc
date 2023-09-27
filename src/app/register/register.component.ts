import { Component } from '@angular/core';
import { ApiRestService } from '../api-rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = "";
  pass = ""
  showError = false
  showSpinner = false

  constructor(private api: ApiRestService,
    private router: Router) { }

  registro() {
    this.showSpinner = true
    this.api.register(this.email, this.pass).subscribe({
      next: bien => {
        this.router.navigate(['/login'])
      },
      error: mal => {
        this.showError = true
        this.showSpinner = false
      }
    })
  }
}
