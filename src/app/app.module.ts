import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {SuperTabsModule} from 'ionic2-super-tabs';

import {MyApp} from './app.component';
import {TabsPage} from '../pages/tabs/tabs';
import {HomePage} from '../pages/home/home';
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';

@NgModule({
    declarations: [
        MyApp,
        TabsPage, HomePage, AboutPage, ContactPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        SuperTabsModule.forRoot()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        TabsPage, HomePage, AboutPage, ContactPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
