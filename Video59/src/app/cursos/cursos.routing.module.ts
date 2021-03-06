import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const cursosRoutes: Routes = [  
    { path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'naoEncontrado', component: CursoNaoEncontradoComponent }
    
];

@NgModule({
    // Como esse módulo é de funcionalidade, não utilizamos o forRoot; utilizamos o forChild
    imports: [RouterModule.forChild(cursosRoutes)], 
    exports: [RouterModule]
})
export class CursosRoutingModule{
}