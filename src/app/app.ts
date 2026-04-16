import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bannerpromo } from './bannerpromo/bannerpromo';
import { Banner } from './banner/banner';
import { Card01 } from './card01/card01';
import { Card02 } from './card02/card02';
import { Card03 } from './card03/card03';
import { Card04 } from './card04/card04';
import { Final } from './final/final';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Bannerpromo,Banner,Card01,Card02,Card03,Card04,Final],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto_roupa');
}
