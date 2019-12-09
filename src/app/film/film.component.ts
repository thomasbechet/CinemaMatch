import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  @Input() poster: string;
  @Input() title : string;
  @Input() runtime: string;
  @Input() genre: string;

  constructor() { }

  ngOnInit() {
  }

}
