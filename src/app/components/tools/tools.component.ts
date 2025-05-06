import { Component, inject, OnInit } from '@angular/core';
import { Tool } from '../../../../interfaces/portfolio.interface';
import { PortfolioService } from '../../services/porfolio.service';

@Component({
  selector: 'tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css'],
  standalone: true,
})
export class ToolsComponent {

  tools: Tool[] = [];
  private portfolioService = inject(PortfolioService);

  async ngOnInit() {
    try {
      const portfolio = await this.portfolioService.getLastPortfolio();
      this.tools = portfolio.tools;
    } catch (error) {
      console.error('Error cargando portfolio:', error);
    }
  }
}
