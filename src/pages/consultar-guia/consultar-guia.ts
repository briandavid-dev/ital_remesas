import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-consultar-guia',
    templateUrl: 'consultar-guia.html'
})

export class PageConsultarGuia {
    
    public contenidoGuia: any;

    constructor(public navCtrl: NavController) {

    }


    goToBuscarGuia() { 
        // go to the MyPage component
        
        
        this.contenidoGuia = true;



    }

}