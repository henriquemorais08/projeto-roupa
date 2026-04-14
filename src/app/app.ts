import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bannerpromo } from './bannerpromo/bannerpromo';
import { Banner } from './banner/banner';
import { Card01 } from './card01/card01';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Bannerpromo,Banner,Card01],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto_roupa');
}
