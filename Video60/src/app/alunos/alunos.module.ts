import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosRoutingModule } from './alunos.routing.module';

@NgModule({    
    exports: [],
    imports: [
      CommonModule,
      AlunosRoutingModule
    ],
    declarations: [AlunosComponent, AlunoFormComponent],
    providers: []
})

export class AlunosModule {


}