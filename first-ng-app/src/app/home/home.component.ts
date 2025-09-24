import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  keyUpHandler(event: KeyboardEvent) {
    console.log(`Key Up event triggered, key ${event.key}`);
  };

  homeMessage = signal('Welcome to the Home Page!');
}
