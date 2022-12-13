import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule ,Routes } from '@angular/router';
import { ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CharactersComponent } from './pages/characters/components/characters/characters.component';
import { CharacterItemComponent } from './pages/characters/components/character-item/character-item.component';
import { CharacterDetailsComponent } from './pages/characters/components/character-details/character-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { FindCharacterFormComponent } from './pages/characters/components/find-character-form/find-character-form.component';

const appRoute: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  { path: 'characters', component: CharactersComponent },
  { path: 'character/:id', component: CharacterDetailsComponent }
  // {path: 'home', component: CharactersComponent}
  // {path: 'home', component: CharactersComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharactersComponent,
    CharacterItemComponent,
    CharacterDetailsComponent,
    FooterComponent,
    FindCharacterFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatInputModule,
    MatListModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
