import { Component, inject } from '@angular/core';
import { Technologies } from '../../interfaces/portfolio.interface';
import  portfolio  from '../../data/porfolio.data.json';

@Component({
  selector: 'technologys',
  templateUrl: './technologys.component.html',
  styleUrls: ['./technologys.component.css'],
})
export class TechnologysComponent {
  technologies!: Technologies;

  async ngOnInit() {

      this.technologies = portfolio.technologies;
   
  }
  }
