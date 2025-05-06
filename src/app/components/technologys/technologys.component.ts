import { Component, inject } from '@angular/core';
import { Technologies } from '../../../../interfaces/portfolio.interface';
import { PortfolioService } from '../../services/porfolio.service';

@Component({
  selector: 'technologys',
  templateUrl: './technologys.component.html',
  styleUrls: ['./technologys.component.css'],
  standalone: true,
})
export class TechnologysComponent {
  technologies!: Technologies;
  private portfolioService = inject(PortfolioService);

  constructor() {
    this.loadTechnologies();
  }

  private async loadTechnologies() {
    try {
      const portfolio = await this.portfolioService.getLastPortfolio();
      this.technologies = portfolio.technologies;
    } catch (error) {
      console.error('Error al cargar:', error);
    }
  }
}
