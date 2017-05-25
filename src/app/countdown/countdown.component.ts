import { Component } from '@angular/core';

@Component({
    selector: 'countdown-module',
    template: '{{daysToSummer}}'
})

export class CountdownComponent {

    daysToSummer: string = this.getDaysToSummer();

    private getDaysToSummer(): string {
        const oneDayInMilliseconds: number = 24 * 60 * 60 * 1000;

        let now: Date = new Date();
        let summerDate: Date = new Date();
        summerDate.setMonth(5);
        summerDate.setDate(1);

        if (now.getMonth() > 7) {
            summerDate.setFullYear(summerDate.getFullYear() + 1);
        }

        let diff: number = Math.floor((summerDate.getTime() - now.getTime()) / oneDayInMilliseconds);

        return diff <= 0 ? "Лето наспутило" : "До лета осталось " + diff + " дней";
    };
}