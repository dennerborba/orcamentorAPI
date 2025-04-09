import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContatoComponent } from '../contato/contato.component';
import { ServicoComponent } from '../servico/servico.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [ContatoComponent, ServicoComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  dados:any;
  contatosApi: any

  constructor(private http: HttpClient)  {}

  ngOnInit():void {
    // this.obterPrevisoes();
    this.obterContatos()

  }
  obterContatos() {
    let url = "http://localhost:5048/api/contatos"
    this.http.get(url).subscribe({
      next: (response) => {
        this.contatosApi = response
        
        for (let contato of this.contatosApi) {
          this.contatos.push({
            nome: contato.nome,
            email: contato.email,
            telefone: contato.numero
          })
        }
        console.log(this.contatosApi)
      },
      error: (erro) => {
        alert('Ocorreu um erro ao buscar os contatos na api -> /api/contatos')
        console.log(`Ocorreu um erro ao realizar a requisição: ${erro}`)
      },
    });
  }

  


  obterPrevisoes():void {
    let url = "http://localhost:5048/WeatherForecast";
    this.http.get(url).subscribe({
      // Funcionou a requisição
      next: (response) => {
        console.log(response);
      },
      // Deu ruim!
      error: (erro) => {
        alert("Deu ruim!");
        console.log(`Erro ao obter as previsões: ${erro}`)
      }
    });
  }

  // obterDados():void {
  //   let endpoint = "https://localhost:7299/WeatherForecast";
  //   this.http.get(endpoint).subscribe({
  //     next: (response) =>{
  //       this.dados = response;
  //       console.log(this.dados);
  //     },
  //     error: (erro) => {
  //       console.log('Erro ao obter dados: ' + erro)
  //     }
  //   });
  // }

  removeItem(index: number) {
    this.contatos.splice(index, 1);
  }

  addItem() {
    this.contatos.push({ nome: "Novo contato", email: " ", telefone: " " })
  }

  @Input() titulo: string = 'Contatos';
  @Input() descricao: string = 'Contatos para realização de orçamento';
  @Input() notaRodape: string = 'Nota de rodapé importante!';

  contatos: Array<ContatoComponent> = []
  servicos: Array<ServicoComponent> = []
}

interface Servico {
  id: Number,
  descricao: string,
  valor: Number,
  equipe: string,
  responsavel: string
}