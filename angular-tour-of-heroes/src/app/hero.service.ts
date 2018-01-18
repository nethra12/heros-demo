import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessagesService } from './messages.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeroService {

  constructor(private messageService : MessagesService, private http : HttpClient) { }
  heroesUrl = 'api/heroes';
  getHeroes() : Observable<Hero[]> {
    this.messageService.add("HeroService: fetched heroes");
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id : number) : Observable<Hero>{
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    let url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url);
  }

  updateHeroes(hero : Hero) : Observable<any>{
    return this.http.put<Hero>(this.heroesUrl,hero);
  }

  addHero(hero : Hero) : Observable<any>{
    return this.http.post<Hero>(this.heroesUrl, hero);
  }

  deleteHero(hero : Hero) : Observable<any>{
    let id = typeof hero === 'number' ? hero : hero.id;
    let url = `${this.heroesUrl}/${id}`;
    return this.http.delete<Hero>(url);
  }
}
