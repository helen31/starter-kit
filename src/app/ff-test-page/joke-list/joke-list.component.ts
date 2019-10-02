import { Component, Input } from '@angular/core';
import { Joke } from '@app/ff-test-page/joke.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent {
  @Input() public jokeList: Joke[];
}
