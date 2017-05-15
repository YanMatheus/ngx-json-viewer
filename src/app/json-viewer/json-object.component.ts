import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-json-object',
    templateUrl: './json-object.component.html',
    styleUrls: ['./json-object.component.scss']
})
export class JsonObjectComponent implements OnInit {
    @Input() object: any;
    public items: any[] = [];

    constructor() {
    }

    ngOnInit() {
        console.log(this.object);
        for (const item of Object.keys(this.object)) {
            if (this.object.hasOwnProperty(item)) {
                this.items.push(item);
            }
        }
    }

    public isObject(item: any): boolean {
        return (typeof item === 'object' && !Array.isArray(item) && item !== null);
    }

    public isArray(item: any): boolean {
        return Array.isArray(item);
    }

}
