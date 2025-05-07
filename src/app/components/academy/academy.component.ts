import { Component, inject } from '@angular/core';
import { AcademyEntry } from '../../../../interfaces/portfolio.interface';
import { PortfolioService } from '../../services/porfolio.service';

@Component({
  selector: 'academy',
  imports: [],
  templateUrl: './academy.component.html',
  styleUrl: './academy.component.css'
})
export class AcademyComponent {
  academy: AcademyEntry[] = [];
  private portfolioService = inject(PortfolioService);

  async ngOnInit() {
    try {
      const portfolio = await this.portfolioService.getLastPortfolio();
      this.academy = portfolio.academy;
    } catch (error) {
      console.error('Error al cargar la academia:', error);
    }
  }
}
