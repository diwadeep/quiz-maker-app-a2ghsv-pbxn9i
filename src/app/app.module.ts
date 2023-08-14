import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'ngx-md';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { HeaderComponent } from './tutorial/header.component';
// import { FooterComponent } from './tutorial/footer.component';

// import { UserComponent } from './example/user.component';
//      // Add an import to the component pointing to the place where it was created

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    MarkdownModule.forRoot(),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
