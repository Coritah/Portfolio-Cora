import { Component } from '@angular/core';
import { Project } from '../../interfaces/portfolio.interface';
import  portfolio  from '../../data/porfolio.data.json';

@Component({
  selector: 'projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [];

  async ngOnInit() {
      this.projects = portfolio.projects;
  }
}

