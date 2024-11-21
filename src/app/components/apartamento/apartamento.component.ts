import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApartamentoService } from 'src/app/services/apartamento.service';

@Component({
  selector: 'app-apartamento',
  templateUrl: './apartamento.component.html',
  styleUrls: ['./apartamento.component.css'],
})
export class ApartamentoComponent implements OnInit {
  apartamentos: any[] = []; // Lista de usuarios

  constructor(private apartamentoService: ApartamentoService) {}

  ngOnInit(): void {
    this.obtenerApartamentos();
  }

  obtenerApartamentos(): void {
    this.apartamentoService.getApartamentos().subscribe(
      (data : any) => (this.apartamentos = data),
      (error : any) => console.error('Error al obtener apartamentos:', error)
    );
  }
}
