import {Component, input} from '@angular/core';
import { Movie } from '../model/movie.model';
import {MillionDollarPipe} from '../pipes/million-dollar.pipe';
import {MinToDurationPipe} from '../pipes/min-to-duration.pipe';

@Component({
  selector: 'app-movie-item',
  template: `
    <div class="movie-item">
      <div>
        <h4> <span class="icon-star"></span> {{ movie().title }}</h4>
        <small class="subtitle">
          <span>Release date: {{ movie().release_date }}</span>
          <span>Budget:  {{ movie().budget | millionDollar }} </span>
          <span>Duration: {{ movie().duration | minToDuration }}</span>
        </small>
      </div>

      <button>Details</button>
    </div>
  `,
  standalone: true,
  imports: [
    MillionDollarPipe,
    MinToDurationPipe
  ],
  styleUrls: ['movie-item.component.scss']
})
export class MovieItemComponent {
  movie  = input.required<Movie>();
}

