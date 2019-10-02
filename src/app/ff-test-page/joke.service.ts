import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const routes = {
  quote: (c: RandomJokeContext) => `/jokes/search?query=${c.query}`
};

export interface RandomJokeContext {
  query: string;
}

export interface JokeBaseResponse<T = []> {
  total: number;
  result: T;
}

interface JokeResponse extends JokeBaseResponse<Joke[]> {}

export interface Joke {
  value: string;
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
}

@Injectable()
export class JokeService {
  constructor(private httpClient: HttpClient) {}

  getJoke(context: RandomJokeContext): Observable<Joke[]> {
    return this.httpClient.get<JokeResponse>(routes.quote(context)).pipe(map((body: any) => body.result));
  }
}
