import {Component, ViewChild } from '@angular/core';
import { NavParams, NavController,Nav} from 'ionic-angular';

export interface PageInterface {
   
    title: string;
    pageName:string;
    tabComponent?: any;
    index?: number;
    icon: string; 

}


@Component({
    selector : 'page-Menu',
    templateUrl : 'Menu.html',
})

export class PageMenu{

    rootPage='TabsPage';

    @ViewChild(Nav) nav: Nav ;
 
    ///TODO: voir les page vraiment nécessaire à mettre en place.
    page:PageInterface[]= [

        {title: 'tab1', pageName:'Tabspage', tabComponent:'Tab1Page', index: 0 , icon:'home' },
        {title: 'tab2', pageName:'Tabspage', tabComponent:'Tab2Page', index: 1 , icon:'home' },
        {title: 'tab3', pageName:'Tabspage', tabComponent:'Tab3Page', index: 0 , icon:'home' },

    ]
    
    
    constructor(public navCtrl: NavController, public NavParams: NavParams )
    {

    }
}