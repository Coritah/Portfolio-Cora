import { Component, inject, ViewEncapsulation } from '@angular/core';
import { BannerSvgComponent } from "../../components/banner-svg/banner-svg.component";
import { ProjectsComponent } from "../../components/projects/projects.component";
import { ToolsComponent } from "../../components/tools/tools.component";
import { TechnologysComponent } from "../../components/technologys/technologys.component";
import { Contact, Portfolio } from '../../../../interfaces/portfolio.interface';
import { PortfolioService } from '../../services/porfolio.service';
import { AcademyComponent } from "../../components/academy/academy.component";

@Component({
  selector: 'app-singlepage',
  imports: [BannerSvgComponent, ProjectsComponent, ToolsComponent, TechnologysComponent, AcademyComponent],
  templateUrl: './singlepage.component.html',
  styleUrl: './singlepage.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SinglepageComponent {
  contact!: Contact;
  private portfolioService = inject(PortfolioService);

  async ngOnInit(): Promise<void> {

    const portfolio: Portfolio = await this.portfolioService.getLastPortfolio();
    this.contact = portfolio.contact;

    document.querySelectorAll('.button').forEach(button => {
      const icon = button.querySelector('i');
      const textSpan = button.querySelector('.text');
  
      if (!textSpan) return;
  
      const originalText = textSpan.textContent!.trim();
      const div = document.createElement('div');
      div.classList.add('content');

      originalText.split('').forEach((letter, index, array) => {
        const span = document.createElement('span');
        const part = index >= array.length / 2 ? -1 : 1;
        const position = index >= array.length / 2
          ? array.length / 2 - index + (array.length / 2 - 1)
          : index;
        const move = position / (array.length / 2);
        const rotate = 1 - move;
      
        span.innerHTML = letter === ' ' ? '&nbsp;' : letter;
        span.style.setProperty('--move', move.toString());
        span.style.setProperty('--rotate', rotate.toString());
        span.style.setProperty('--part', part.toString());
      
        span.style.animationDelay = `${index * 0.05}s`;
      
        div.appendChild(span);
      });

      button.innerHTML = '';
      if (icon) button.appendChild(icon);
      button.appendChild(div);
      button.addEventListener('mouseenter', () => {
        console.log('Mouse enter');
        button.classList.add('in');
        div.classList.add('animate');
      });
      button.addEventListener('mouseleave', () => {
        console.log('Mouse leave');
        button.classList.remove('in');
        div.classList.remove('animate');
      });
    });
  }
  // Scroll 
  scrollToSection(sectionId: string): void {
    const pyts = document.getElementById(sectionId);
    if (pyts) {
      pyts.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
