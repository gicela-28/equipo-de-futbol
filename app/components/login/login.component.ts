import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { catchError } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginFrm: FormGroup = this.fb.nonNullable.group({ usuario: ['gicela'], password: [''] });

  constructor(private apiService: ApiService, private fb: FormBuilder) { }

  login() {
    this.apiService.login(this.loginFrm.getRawValue()).pipe(catchError(err => {
      alert('error');
      throw err;
    })).subscribe(() => {
      alert('iniciar');
    });
  }


}
