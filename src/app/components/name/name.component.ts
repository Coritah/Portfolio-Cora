import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NameComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    document.querySelectorAll('.button').forEach(button => {
      const icon = button.querySelector('i');
      const textNode = button.childNodes[button.childNodes.length - 1];
      if (!textNode || textNode.nodeType !== Node.TEXT_NODE) return;
  
      const originalText = textNode.textContent?.trim() || '';
      const div = document.createElement('div');
      const letters = originalText.split('');
  
      letters.forEach((letter, index, array) => {
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
        div.appendChild(span);
      });
  
      div.classList.add('content');
      button.innerHTML = ''; 
      if (icon) button.appendChild(icon); 
      button.appendChild(div); 
      button.addEventListener('mouseenter', () => {
        button.classList.add('in');
        div.classList.add('animate');
      });
  
      button.addEventListener('mouseleave', () => {
        button.classList.remove('in');
        div.classList.remove('animate');
      });
    });
  }
  
}
