import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alarms',
  imports: [CommonModule],
  templateUrl: './alarms.component.html',
  styleUrl: './alarms.component.css'
})
export class AlarmsComponent {
  alarms = [
    { time: '07:00 AM', name: 'Tomar agua' },
    { time: '08:00 AM', name: 'Ejercicio' },
  ];

  addAlarm() {
    const newAlarm = { time: '09:00 AM', name: 'Nueva alarma' };
    this.alarms.push(newAlarm);
  }

  deleteAlarm(alarm: any) {
    this.alarms = this.alarms.filter(a => a !== alarm);
  }



}
