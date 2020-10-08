import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { AlertController } from '@ionic/angular';
import { Button } from 'protractor';
import { FilmsProvider } from 'src/app/providers/film.provider';

@Component({
    selector: 'app-rechercher',
    templateUrl: './rechercher.component.html',
    styleUrls: ['./rechercher.component.scss'],
})
export class RechercherComponent implements OnInit {
    public binding: string = 'Bonjour CDA';
    public year: number;
    public title: string = '';
    public type: string = '';
    public films = [];

    constructor(private alertCtrl: AlertController,
        private rechercherFilm: FilmsProvider) {

    }


    ngOnInit() { }


    clicBouton() {
        this.binding = 'Clic !!!'
    }

    public error: string = '';
    public async rechercher() {
        this.error = '';
        if (!this.title || this.title.length <= 3) {
            // this.error = "Veuillez saisir un titre d'au moins 3 caracteres";
            const alert = await this.alertCtrl.create({
                header: "Informations manquantes",
                message: "Veuillez saisir un titre d'au moins 3 caracteres",
                buttons: ["OK"]
            });
            alert.present();
            return;
        }
        if (!this.year || (this.year < 1900 || this.year > 2050)) {
            this.error = "Veuillez saisir une année entre 1900 et 2050";
            return;
        }
        if (this.type === undefined) {
            this.error = "Veuillez choisir un type de média";
            return;
        }
        this.lancerRecherche();
    }

    private lancerRecherche() {
        this.rechercherFilm.search(this.title, this.year, this.type)
        .then((resultat) => {
            this.films = resultat;
         })
        .catch(async(err) =>{
            const alert = await this.alertCtrl.create({
                header:"Erreur appel Service",
                message:'Impossible de recupérer les films',
                buttons:['OK']
            });
            alert.present();
        });

    }

}