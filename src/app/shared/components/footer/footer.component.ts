import { Component } from '@angular/core';
import { links } from '../../assets/assets';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {


  public socials = links;

}
