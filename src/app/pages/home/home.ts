import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/components/banner/banner';
import { EmCartazComponent } from '../../shared/components/em-cartaz/em-cartaz';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, EmCartazComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

}
