import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AlertaService } from '../resources/alerta.service';
import { TabuadaService } from '../services/tabuada.service';
import { ListaMultiplicacaoResponse } from '../model/response/lista-Multiplicacao-response';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.scss']
})
export class TabuadaComponent implements OnInit {

  constructor(public readonly appComponent: AppComponent,
    private readonly alertaService: AlertaService,
    private readonly tabuadaService: TabuadaService) { }

  ngOnInit(): void {
  }

  listaNumeros = new Array<number>();
  valor?: string;
  msg: string;
  tabuadas: string[];

  inserirLista(num?: string) {
    if (!num) return;

    let converte = Number.parseInt(num);
    if (isNaN(converte)) {
      this.valor = undefined;
      return;
    }
    if (this.listaNumeros.includes(converte)) {
      this.alertaService.erro("Esse valor já foi inserido na lista!");
      this.valor = undefined;
      return;
    }

    this.listaNumeros.push(converte);

    this.valor = undefined;
  }

  async enviar() {
    if (this.listaNumeros.length <= 0) {
      this.alertaService.erro("É necessário inserir números na lista para realizar a multiplicação!");
      return;
    }

    await lastValueFrom(this.tabuadaService.multiplicarLista(this.listaNumeros)).then((r) =>{
      if(r.sucesso){
        this.alertaService.info(r.mensagem, "");
        return;
      }
      this.tabuadas = r.lista;
    }).catch((e)=>{
      this.alertaService.erro(JSON.stringify(e));
    });
  }
}
