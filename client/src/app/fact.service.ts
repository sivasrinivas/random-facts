import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs/index";
import {Fact} from "./fact";
import {FACTS} from "./mock-facts";

@Injectable({
  providedIn: 'root'
})
export class FactService {

  constructor() { }

  getFacts(): Observable<Fact[]> {
    return of(FACTS);
  }

  getFact(id: number): Observable<Fact> {
    return of(FACTS.find( fact => fact.id === id));
  }
}
