import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

var jquery: any;
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

user:string
password:string
result:any   
seleccion
valor
verSeleccion
constructor(private service: AuthService,  private router: Router) { 
  }

  ngOnInit(): void {

  }
  AlertPass(){
    alert("Recuperar contraseña")
  }

  capturar() {
    this.valor = (<HTMLInputElement>document.getElementById('seleccion')).value

    if (this.valor != null) {
      this.verSeleccion = this.valor;
      console.log(this.verSeleccion)
    }
  } 
 
 modal(){

   if((this.seleccion === "" || this.seleccion == undefined) && (this.user === "" || this.user == undefined) && (this.password === "" || this.password == undefined )){
    $('#editar2').modal();

   }else{
    if((this.seleccion === "" || this.seleccion == undefined)){
      $('#editar2').modal();
  
     }else{
       if((this.user === "" || this.user == undefined)){
      $('#editar').modal();
    }  
  else{
      if((this.password === "" || this.password == undefined)){
        $('#editar1').modal();
      }else{
        this.result={
        username: this.user,
        password: this.password,
        type: this.seleccion
        
      }
      this.service.postLogin(this.result).subscribe(
        data => {console.log(data)
  
          this.router.navigateByUrl('/timeline');
      },error=> alert("Credenciales incorrectas")
      )
        }

     }
   }
  } 
 }
}