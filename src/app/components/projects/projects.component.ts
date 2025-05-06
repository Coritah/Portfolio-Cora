import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1.',
      image: 'https://imgs.search.brave.com/41TuJAnnBZYw4nur7qeBgCrcgIXF5cYTIBGA2F21jCg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmNsb3VkaW1nLmlv/L2h0dHBzOi8vYmxv/Zy5zY2FsZWZsZXgu/Y29tL2NvbnRlbnQv/aW1hZ2VzL3NpemUv/dzEzNzgvMjAyMy8w/OS9Ub3AtMTAtSW1h/Z2UtQ0ROcy1Jbi0y/MDIzLTEud2VicA'
    },
    {
      title: 'Project 2',
      description: 'Description of project 2.',
      image: 'https://imgs.search.brave.com/41TuJAnnBZYw4nur7qeBgCrcgIXF5cYTIBGA2F21jCg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmNsb3VkaW1nLmlv/L2h0dHBzOi8vYmxv/Zy5zY2FsZWZsZXgu/Y29tL2NvbnRlbnQv/aW1hZ2VzL3NpemUv/dzEzNzgvMjAyMy8w/OS9Ub3AtMTAtSW1h/Z2UtQ0ROcy1Jbi0y/MDIzLTEud2VicA'
    },
    {
      title: 'Project 3',
      description: 'Description of project 3.',
      image: 'https://imgs.search.brave.com/41TuJAnnBZYw4nur7qeBgCrcgIXF5cYTIBGA2F21jCg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmNsb3VkaW1nLmlv/L2h0dHBzOi8vYmxv/Zy5zY2FsZWZsZXgu/Y29tL2NvbnRlbnQv/aW1hZ2VzL3NpemUv/dzEzNzgvMjAyMy8w/OS9Ub3AtMTAtSW1h/Z2UtQ0ROcy1Jbi0y/MDIzLTEud2VicA'
    }
  ];
}

