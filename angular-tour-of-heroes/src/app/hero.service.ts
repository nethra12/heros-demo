import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessagesService } from './messages.service';

@Injectable()
export class HeroService {

  constructor(private messageService : MessagesService) { }

  getHeroes() : Observable<Hero[]> {
    this.messageService.add("HeroService: fetched heroes");
    return of(Heroes);
  }

  getHero(id : number) : Observable<Hero>{
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(Heroes.find(hero => hero.id === id));
  }
}
