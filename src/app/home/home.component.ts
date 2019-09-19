import {Component, OnInit} from '@angular/core';
import {CouchDB} from 'nativescript-couchdb';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    title = 'nativescript-playground';
    db: CouchDB;
    docs = {};

    constructor() {
        this.db = new CouchDB('http://10.0.2.2:5984/products', {
            'Authorization': 'Basic YWRtaW46YWRtaW4='
        });
    }


    ngOnInit(): void {
        this.db.query('all_products/all', {reduce: false})
            .then(res => {
                this.docs = res;
            });
    }
}
