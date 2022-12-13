import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CharactersService } from 'src/app/services/characters.service';
import { FindService } from 'src/app/services/find.service';
import { Character } from '../../characters.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  numOfCharacters: number;
  numOfPages: number;
  page: number = 1;

  subscription: Subscription;
  name: string;

  constructor(private characterService: CharactersService, private findService: FindService){
  }

  ngOnInit(): void {
    // this.findService.getName().subscribe(value => this.name = value)

    // this.characterService.getCharacters(this.page).subscribe((characters) => {
    //   this.characters = characters.results;  
    //   this.numOfCharacters = characters.info.count    
    //   this.numOfPages = characters.info.pages;    
    // })
    this.characterService.getName().subscribe((characters: any) => {
      this.characters = characters.results;  
      this.numOfCharacters = characters.info.count    
      this.numOfPages = characters.info.pages;    
    })
  }

  changePage(event: PageEvent){
    this.page = event.pageIndex + 1;
    this.characterService.getCharacters(this.page).subscribe((characters) => {
      this.characters = characters.results;  
    })
    console.log(this.name);    
  }


  findById(){
    // this.characterService.getCharacterByName(this.name).subscribe((characters) => {
    //   this.characters = characters.results;  
    // })
    console.log(this.name);    
  }

}
