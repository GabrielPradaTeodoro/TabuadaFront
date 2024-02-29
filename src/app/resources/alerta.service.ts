import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertOptions } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor() { }

  public sucesso(mensagem: string, titulo: string): void {
    this.showAlert(titulo, mensagem, "success");
  }

  public info(mensagem: string, titulo: string): void {
    this.showAlert(titulo, mensagem, "info");
  }

  public erro(mensagem: string): void {
    this.showAlert("", mensagem, "error");
  }

  private showAlert(titulo: string, mensagem: string, icon: SweetAlertIcon): void {
    Swal.fire(titulo, mensagem, icon);
  }
}
