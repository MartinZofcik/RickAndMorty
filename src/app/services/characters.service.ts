import { CharacterApiResponse } from '../pages/characters/characters.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private baseUrl = 'https://rickandmortyapi.com/api/character'
  private name: string;
  private subject = new Subject<any>()


  constructor(private http: HttpClient) {}
    
  getCharacters(page: number): Observable<CharacterApiResponse> {
    const url = this.baseUrl + '?page=' + page;
    return this.http.get<CharacterApiResponse>(url)
  }

  getCharacterById(id: number): Observable<any> {
    const url = this.baseUrl + '/' + id;
    return this.http.get<any>(url)
  }

  // getCharacterByName(name?: string): Observable<any> {
  //   const url = this.baseUrl + '/?name=' + name;
  //   this.subject.next(this.http.get<any>(url))
  // }

  getByName(name: string): void{
    const url = this.baseUrl + '/?name=' + name;
    const results = this.http.get<any>(url)
    this.subject.next(results)
  }

  changeName(nameForm: any): void{
    this.name = nameForm;
    this.subject.next(this.name)
  }

  getName(): Observable<string>{
    return this.subject.asObservable()
  }
   
}
