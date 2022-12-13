import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private characterService: CharactersService) {}

  ngOnInit(): void {
  }

  submit(event: any): void {
    console.log(event.characterName);
    // this.characterService.getByName(event.characterName)
  }

}
