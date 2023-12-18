import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) {}
  
  onlogin(){
    this.router.navigate(['login']);
  }
  onContribute(){
    const link=document.createElement('a');
    link.href="https://github.com/Sebastiansrcb/ProyectoAngular";
    link.click();
  }
}
