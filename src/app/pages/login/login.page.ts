import { Component, OnInit } from '@angular/core';
import { NavController} from 'ionic-angular';
import { HomePage } from "../../pages/home/home.page";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  irHome(){
    this.navCtrl.push(HomePage, {}, {animate: true} );    
  }
  
}
