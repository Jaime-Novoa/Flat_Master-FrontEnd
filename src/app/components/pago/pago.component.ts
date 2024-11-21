import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PagoService } from 'src/app/services/pago.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css'],
})
export class PagoComponent implements OnInit {
  pagos: any[] = []; // Lista de pagos

  constructor(private pagoService: PagoService) {}

  ngOnInit(): void {
    this.obtenerPagos();
  }

  obtenerPagos(): void {
    this.pagoService.getPagos().subscribe(
      (data : any) => (this.pagos = data),
      (error : any) => console.error('Error al obtener usuarios:', error)
    );
  }
}