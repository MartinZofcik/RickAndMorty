import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';
import { Character } from '../../characters.model';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  id: number;
  sub: any;
  character: any;

  constructor(private route: ActivatedRoute, private characterService: CharactersService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>{
      this.id = +params['id'];
    })

    this.characterService.getCharacterById(this.id).subscribe((character) => {
      this.character = character;      
    })    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
