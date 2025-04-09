import { Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { ServicoComponent } from './components/servico/servico.component';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'contatos', component: ContainerComponent
    },
    {
        path: 'servicos', component: ServicoComponent
    },
    {
        path: 'home/:id', component: HomeComponent
    },

];
