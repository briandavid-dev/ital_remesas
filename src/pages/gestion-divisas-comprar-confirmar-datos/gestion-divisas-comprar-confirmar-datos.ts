import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-gestion-divisas-comprar-confirmar-datos',
    templateUrl: 'gestion-divisas-comprar-confirmar-datos.html'
})

export class PageGestionDivisasComprarConfirmarDatos {

    public textDivisa: any;
     
    constructor(public navCtrl: NavController, public navParams: NavParams) {

        let param1 = navParams.get('param1');
        let param2 = navParams.get('param2');


        this.textDivisa = param1;

        console.log(param1+" "+param2)
        
    }

    

}