import { Component, OnInit } from '@angular/core';
import { HomePage } from "../../pages/home/home.page";
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
email:'michelbass23@gmail.com';
senha:'@ext1234';

  constructor(private loadCtrl:LoadingController,
    private navCtrl:NavController,
    private toastCtrl:ToastController,
    private alertCtrl:AlertController
    ) { }

  ngOnInit() {

  }

    registrar(){
      this.navCtrl.navigateRoot('registrar');
    }

     async login(){
      if(this.email=='michelbass23@gmail.com'&&this.senha=='@ext1234'){
        const loading = await this.loadCtrl.create({
        message:"Aguarde",
        duration:2000,
      });
      this.presentAlert();
      this.navCtrl.navigateForward('/home');  
     
    }else{
      this.presentToast();
    }


    }
 
      async presentToast() {
        const toast = await this.toastCtrl.create({
          message: 'Login ou Senha inválidos!',
          duration: 2000
        });
        toast.present();
      }


      async presentAlert() {
        const alert = await this.alertCtrl.create({
          header: 'Bem vindo',
          buttons: ['OK'],
          
        });
    
        await alert.present();
      }
    }

    
    

