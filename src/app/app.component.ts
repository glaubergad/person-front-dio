import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
ambiente = environment.production;
title = 'Person Front-end';

constructor(
  public router: Router,
) {
}

  ngOnInit(): void {
  }

  lista(): void {
    this.router.navigate(['/lista']);
  }

  novaPessoa(): void {
  this.router.navigate(['/nova-pessoa']);
  }
}
