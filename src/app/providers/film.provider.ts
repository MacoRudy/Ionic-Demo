import { Injectable } from '@angular/core';
import { Film } from '../models/film';

@Injectable()
export class FilmsProvider{

    public search(title:string, year:number, type:string):
    Promise<Array<Film>>{
        return new Promise((resolve,reject)=>{
            resolve([
                {
                    Title: 'Film1',
                    Poster: "assets/icon/favicon.png",
                    Year: 2012,
                },
                {
                    Title: 'Film2',
                    Poster: "assets/icon/favicon.png",
                    Year: 2015,
                },
                {
                    Title: 'Film3',
                    Poster: "assets/icon/favicon.png",
                    Year: 2017,
                }
            ]);
        });
    }

}