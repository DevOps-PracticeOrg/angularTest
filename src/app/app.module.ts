import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//パーツ
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

//ページ
import { TopComponent } from './top/top.component';
import { AtelierComponent } from './atelier/atelier.component';
import { UserComponent } from './user/user.component';

@NgModule({

  declarations: [
    AppComponent,
    AtelierComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    TopComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: TopComponent },
      { path: 'user/:user_id', component: UserComponent },
      { path: 'atelier/:atelier_id', component: AtelierComponent },
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
