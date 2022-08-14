import { Component, OnInit } from '@angular/core';
import { HomePage } from "../../pages/home/home.page";
import { LoadingController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private loadCtrl:LoadingController,private navCtrl:NavController) { }

  ngOnInit() {

  }

    registrar(){
      this.navCtrl.navigateRoot('registrar');
    }

 

  }
  

