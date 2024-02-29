import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AlertaService } from '../resources/alerta.service';
import { ListaMultiplicacaoResponse } from '../model/response/lista-Multiplicacao-response';

@Injectable({
  providedIn: 'root'
})
export class TabuadaService {

  constructor(private http:HttpClient,
    private readonly alertaService: AlertaService) { }

  private apiUrl = environment.API_URL;

  public multiplicarLista(lista:Array<number>){
    return this.http.post<ListaMultiplicacaoResponse>(this.apiUrl + "Multiplicacao/multiplicar", lista);
    // return await lastValueFrom(
    //   this.http.post<ListaMultiplicacaoResponse>(this.apiUrl + "Multiplicacao/multiplicar", lista)).then((r)=>{
    //   if(!r.sucesso){
    //     this.alertaService.erro(r.mensagem);
    //     return;
    //   }
    //   return r;
    // });    
  }
}
