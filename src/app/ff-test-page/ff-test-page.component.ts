import { Component } from '@angular/core';
import { Joke, JokeService } from './joke.service';

@Component({
  selector: 'app-ff-test-page',
  templateUrl: './ff-test-page.component.html',
  styleUrls: ['./ff-test-page.component.scss']
})
export class FfTestPageComponent {
  public jokes: Joke[];
  public errorMessage: string;

  constructor(private jokeService: JokeService) {}

  public findJokes(value: string): void {
    if (!value) {
      return;
    }

    this.errorMessage = null;

    this.jokeService.getJoke({ query: value }).subscribe(
      jokes => (this.jokes = jokes),
      () => {
        this.jokes = null;
        this.errorMessage = 'Something went wrong ...';
      }
    );
  }
}
