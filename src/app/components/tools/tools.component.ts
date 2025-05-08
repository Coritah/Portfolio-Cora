import { Component, inject, } from '@angular/core';
import { Tool } from '../../../../interfaces/portfolio.interface';
import { PortfolioService } from '../../services/porfolio.service';

@Component({
  selector: 'tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css'],
})
export class ToolsComponent {
  
  private portfolioService = inject(PortfolioService);
  tools: Tool[] = [];
  selectedTool: Tool | null = null;

  async ngOnInit() {
    try {
      const portfolio = await this.portfolioService.getLastPortfolio();
      this.tools = portfolio.tools;
    } catch (error) {}
  }
  openModal(tool: Tool): void {
    this.selectedTool = tool;
  }
  
  closeModal(): void {
    this.selectedTool = null;
  }
}
