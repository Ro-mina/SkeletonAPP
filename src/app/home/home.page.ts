import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule,MatDatepickerModule,MatInputModule,MatNativeDateModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
  
})
export class HomePage {
  usuario = 'Juan'; // Puedes pasar esto desde el login usando un servicio
  nombre = '';
  apellido = '';
  nivelEducacion = '';
  fechaNacimiento: string | null = null;

  constructor(private alertController: AlertController, private route: ActivatedRoute) {
    const user = this.route.snapshot.queryParamMap.get('usuario');
    if (user) {
      this.usuario = user; 
    }
  }
  animarInputs = false;

  limpiarCampos() {
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacion = '';
    this.fechaNacimiento = null;
    this.animarInputs = false;
    setTimeout(() => this.animarInputs = true, 10);
  }

  async mostrarDatos() {
    console.log(this.fechaNacimiento);
    const alert = await this.alertController.create({
      header: 'Usuario',
      message: `Su nombre es ${this.nombre} ${this.apellido}`,
      buttons: ['Yes']
    });
    await alert.present();
  }
}

