import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name: string ='Victor';

  handleInputChange(event: any) {
    console.log(event)
    this.name = event
  }
}
