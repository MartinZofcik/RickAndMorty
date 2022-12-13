import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FindService {
  private name: string;
  private subject = new Subject<any>()

  constructor() { }

  changeName(nameForm: any): void{
    this.name = nameForm;
    this.subject.next(this.name)
  }

  getName(): Observable<string>{
    return this.subject.asObservable()
  }
}
