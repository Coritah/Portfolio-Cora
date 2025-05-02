import { Component } from '@angular/core';
import { BannerSvgComponent } from "../../components/banner-svg/banner-svg.component";
import { NameComponent } from "../../components/name/name.component";

@Component({
  selector: 'app-singlepage',
  imports: [BannerSvgComponent, NameComponent],
  templateUrl: './singlepage.component.html',
  styleUrl: './singlepage.component.css'
})
export class SinglepageComponent {

}
