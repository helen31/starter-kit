import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const routes = {
  quote: (c: RandomJokeContext) => `/jokes/search?query=${c.query}`
};

export interface RandomJokeContext {
  query: string;
}

export interface JokeResponse<T = []> {
  total: number;
  result: T;
}
@Injectable()
export class JokeService {
  constructor(private httpClient: HttpClient) {}

  getJoke(context: RandomJokeContext): Observable<string[]> {
    return this.httpClient.get<JokeResponse>(routes.quote(context)).pipe(map((body: any) => body.result));
  }
}
