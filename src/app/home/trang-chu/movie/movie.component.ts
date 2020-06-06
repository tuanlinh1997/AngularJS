import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/core/models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() phim: Movie;
  constructor() {}

  ngOnInit(): void {}
}
