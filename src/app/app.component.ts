import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Toma Tio';

  playAudio() {
    let audio = new Audio();
    const audioNumber = Math.floor((Math.random() * 9) + 1);
    let folder = '../assets/TomaTios/test-' + audioNumber + '.wav';
    audio.src = folder;
    console.log(audioNumber);
    audio.load();
    let button = document.getElementById('btn');
    button.setAttribute("disabled", "disabled");
    audio.play();

    audio.addEventListener('ended', () => {
      button.removeAttribute("disabled");
  }, false);
  }

  ngOnInit() {
    const button = document.getElementById('btn');

    button.addEventListener('click', async (e:MouseEvent) => {
      let overlay;

      let left = e.clientX - button.getBoundingClientRect().left;
      let top = e.clientY - button.getBoundingClientRect().y;
      overlay = document.createElement('span');
      overlay.style.cssText = `
      height: 450px;
      width: 450px;
      position: absolute;
      top: ${top}px;
      left: ${left}px;
      transform: translate(-50%, -50%) scale(0);
      background-color: aqua;
      border-radius: 50%;
      z-index: -1;
      animation: button_animation 1s ease;
      animation-iteration-count: 1;
      `;
      overlay.addEventListener('animationend', (e) => {
        e.target.remove();
      });
      button.appendChild(overlay);
    });
  }
}
