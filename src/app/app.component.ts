import { Component } from '@angular/core';
import { data } from './json-viewer/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public json = data;

}
