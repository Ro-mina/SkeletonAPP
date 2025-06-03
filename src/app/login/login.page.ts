import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
  imports: [IonicModule, FormsModule, RouterModule],
})
export class LoginPage {
  constructor(private router: Router) {}

  login(form: any) {
    if (form.valid) {
      const username = form.value.username;
      const password = form.value.password;

      this.router.navigate(['/home'], {
        queryParams: {
          usuario: username,
          clave: password,
        },
      });
    }
  }
}
