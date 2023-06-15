import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/autentication/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  errorUserLogin: boolean = false;
  enableCadastroUsuario: boolean = false;
  loginForm!: FormGroup;
  loginNewUserForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private route: ActivatedRoute) {

    this.loginForm = this.fb.group({
      email: ['', Validators.compose(
        [Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      password: ['', Validators.compose(
        [Validators.required, Validators.minLength(2), Validators.maxLength(40)])]
    });

    this.loginNewUserForm = this.fb.group({
      firstName: ['', Validators.compose(
        [Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      lastName: ['', Validators.compose(
        [Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      email: ['', Validators.compose(
        [Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
      password: ['', Validators.compose(
        [Validators.required, Validators.minLength(2), Validators.maxLength(40)])]
    });
  }

  ngOnInit(): void {
  }

  signup(): void {
    this.authService.signup(this.loginNewUserForm.value).pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['/playlist']);
        },
        error: error => {
          this.errorUserLogin = true;
        }
      });
  }

  signin(): void {
    this.authService.signin(this.loginForm.value).pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['/playlist']);
        },
        error: error => {
          this.errorUserLogin = true;
        }
      });
  }

  cadastraAgora(): void {
    this.enableCadastroUsuario = true;
  }


}
