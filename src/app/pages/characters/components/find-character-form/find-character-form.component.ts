import { CharactersService } from './../../../../services/characters.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-find-character-form',
  templateUrl: './find-character-form.component.html',
  styleUrls: ['./find-character-form.component.css']
})


export class FindCharacterFormComponent implements OnInit {
  // @Output() onFindByName: EventEmitter<any> = new EventEmitter();
  // nameForm = new FormGroup({})
  nameForm = this.formBuilder.group({
    characterName: ['']
  })


  constructor(private formBuilder: FormBuilder, private characterService: CharactersService) { }

  getName(): any{
    return this.nameForm.value.characterName
  }

  ngOnInit(): void {
  }

  submit(): void{
    console.log(this.nameForm.value.characterName);
    // this.onFindByName.emit(this.nameForm.value)
    this.characterService.getByName(this.getName())
  }

}
