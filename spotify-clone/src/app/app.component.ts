import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {fontAwesomeIcons} from "./shared/font-awesome-icons";
import { NavigationComponent } from "./layout/navigation/navigation.component";
import { LibraryComponent } from "./layout/library/library.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, NavigationComponent, LibraryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'spotify-clone';
  private faIconLibrary: FaIconLibrary = inject(FaIconLibrary);

  ngOnInit() {
    this.initFontAwesomeIcons();
  }

  private initFontAwesomeIcons() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);

  }
}
