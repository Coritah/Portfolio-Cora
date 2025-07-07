import { Component } from '@angular/core';
import { AcademyEntry } from '../../interfaces/portfolio.interface';
import  portfolio  from '../../data/porfolio.data.json';
@Component({
  selector: 'academy',
  imports: [],
  templateUrl: './academy.component.html',
  styleUrl: './academy.component.css'
})
export class AcademyComponent {
  academy: AcademyEntry[] = [];

  async ngOnInit() {
    this.academy = portfolio.academy;
  }
}
