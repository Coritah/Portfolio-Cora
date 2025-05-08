import { Component, inject } from '@angular/core';
import { Technologies } from '../../../../interfaces/portfolio.interface';
import { PortfolioService } from '../../services/porfolio.service';

@Component({
  selector: 'technologys',
  templateUrl: './technologys.component.html',
  styleUrls: ['./technologys.component.css'],
})
export class TechnologysComponent {
  private portfolioService = inject(PortfolioService);
  technologies!: Technologies;

  async ngOnInit() {
    try {
      const portfolio = await this.portfolioService.getLastPortfolio();
      this.technologies = portfolio.technologies;
    } catch (error) {( error);
    }
  }
  }
