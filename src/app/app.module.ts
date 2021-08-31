import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './componente/core/menu/menu.component';
import { SidebarComponent } from './componente/core/sidebar/sidebar.component';
import { FooterComponent } from './componente/core/footer/footer.component';

import { AutenticacaoComponent } from './componente/sso/autenticacao/autenticacao.component';
import { RegistroComponent } from './componente/sso/registro/registro.component';
import { ResetarComponent } from './componente/sso/resetar/resetar.component';

import { UsuarioComponent } from './componente/home/usuario/usuario.component';

import { CategoriaComponent } from './componente/home/categoria/categoria.component';
import { ProdutoComponent } from './componente/home/produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    AutenticacaoComponent,
    RegistroComponent,
    ResetarComponent,
    UsuarioComponent,
    CategoriaComponent,
    ProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
