import { Component, inject } from '@angular/core';
import { Project } from '../../../../interfaces/portfolio.interface';
import { PortfolioService } from '../../services/porfolio.service';

@Component({
  selector: 'projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [];
  private portfolioService = inject(PortfolioService);

  async ngOnInit() {
    try {
      const portfolio = await this.portfolioService.getLastPortfolio();
      this.projects = portfolio.projects;
    } catch (error) {
      console.error('Error al cargar los proyectos:', error);
    }
  }
}

