import {Component, OnInit} from '@angular/core';
import {Couchbase} from 'nativescript-couchbase-plugin';

@Component({
    selector: 'app-couchbase-demo',
    templateUrl: './couchbase-demo.component.html',
    styleUrls: ['./couchbase-demo.component.scss']
})
export class CouchbaseDemoComponent implements OnInit {
    private beers: any[];

    constructor() {
    }

    ngOnInit() {
        const database = new Couchbase('production');

        const push = database.createPushReplication(
            'ws://10.0.2.2:4984/db'
        );


        push.setUserNameAndPassword('sync_gateway', 'sync_gateway');
        push.setContinuous(true);
        push.start();

        const pull = database.createPullReplication(
            'ws://10.0.2.2:4984/db'
        );

        pull.setSessionId('SomeId');
        pull.setSessionIdAndCookieName('SomeId', 'SomeCookieName');

        pull.setContinuous(true);
        pull.start();

        const documentId = database.createDocument({
            'firstname': 'Test',
            'lastname': 'Fortune',
            'address': {
                'country': 'Trinidad and Tobago'
            },
            'twitter': 'https://www.twitter.com/triniwiz'
        });


        this.beers = database.query({
            select: [],
            from: null,
            where: [{property: 'state', comparison: 'equalTo', value: 'California'}],
            limit: 10
        });


    }

}
