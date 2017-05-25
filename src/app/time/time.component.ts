import { Component } from '@angular/core';

@Component({
    selector: 'time-module',
    templateUrl: './time.component.html'
})

export class TimeComponent {

    private dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    private timeOptions = { hour: 'numeric', minute: 'numeric' };
    private now: Date = new Date();

    currentDate: string = this.now.toLocaleDateString('ru-ru', this.dateOptions);
    currentTime: string = this.now.toLocaleTimeString('ru-ru', this.timeOptions);

    phrase: string = this.getPhrase(this.now.getHours());

    private getPhrase(hour: number): string {
        const morning: string = "С утра будет завтрак";
        const afternoon: string = "Не пропустите обед";
        const evening: string = "Время близится к ужину";

        if ((hour >= 21 || hour < 9)) {
            return morning;
        } else if (hour >= 9 && hour < 14) {
            return afternoon;
        } else if (hour >= 14 && hour < 21) {
            return evening;
        }
    }
}