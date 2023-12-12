import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  onContribute(){
    const link=document.createElement('a');
    link.href="https://github.com/Sebastiansrcb/ProyectoAngular";
    link.click();
  }
}
