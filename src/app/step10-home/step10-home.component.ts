import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step10-home',
  templateUrl: './step10-home.component.html',
  styleUrls: ['./step10-home.component.scss'],
  animations: []
})
export class Step10HomeComponent implements OnInit {

  public innerHeight: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.innerHeight = window.innerHeight - 90;
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event) {
    this.innerHeight = window.innerHeight;
  }
  public startProcess() {
    this.router.navigate(['/take-photo']);
  }
  public footerActionHome() {
    this.router.navigate(['']);
  }
}
