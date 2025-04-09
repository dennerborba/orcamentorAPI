import { HttpClient } from '@angular/common/http';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-servico',
  standalone: true,
  imports: [],
  templateUrl: './servico.component.html',
  styleUrl: './servico.component.css'
})
export class ServicoComponent {
  dados: any
  servicosApi: any
  
  @Input() id: number = 0
  @Input() descricao: string = ''
  @Input() valor: number = 0
  @Input() equipe: string = ''
  @Input() responsavel: string = ''

  constructor(private http: HttpClient)  {}

  ngOnInit(): void {
    this.obterServicos()
  }
  
  obterServicos() {
    let url = "http://localhost:5048/api/servicos"
    this.http.get<ServicoComponent[]>(url).subscribe({
      next: (response) => {
        this.servicosApi = response
        
        console.log(this.servicosApi)
      },
      error: (erro) => {
        alert('Ocorreu um erro ao buscar os contatos na api -> /api/servicos')
        console.log(`Ocorreu um erro ao realizar a requisição: ${erro}`)
      },
    });
  }
  
}
