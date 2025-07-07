import { Component, } from '@angular/core';
import { Tool } from '../../interfaces/portfolio.interface';
import  portfolio  from '../../data/porfolio.data.json';

@Component({
  selector: 'tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css'],
})
export class ToolsComponent {
  
 
  tools: Tool[] = [];
  selectedTool: Tool | null = null;

  async ngOnInit() {
 
      this.tools = portfolio.tools;
   
  }
  openModal(tool: Tool): void {
    this.selectedTool = tool;
  }
  
  closeModal(): void {
    this.selectedTool = null;
  }
}
