import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informe-producto',
  templateUrl: './informe-producto.page.html',
  styleUrls: ['./informe-producto.page.scss'],
})
export class InformeProductoPage implements OnInit {
  searchTerm: string;
  productos = [
    {
          "nombre": "Margarina",
          "codigo": "1",
          "precio": "4000",
          "grupo": "Grupo A",
          "stock": "5",
          "sucursal": "Wallmart La Florida",
          "epoca" : "Verano",
          "tipo_user" : "Joven",
          "venta_web" : "Si"
    },
    {
      "nombre": "Manzana",
      "codigo": "15",
      "precio": "4500",
      "grupo": "Grupo B",
      "stock": "50",
      "sucursal": "Wallmart La Cisterna",
      "epoca" : "Verano",
      "tipo_user" : "Adulto",
      "venta_web" : "No"
    },
    {
      "nombre": "Leche",
      "codigo": "3",
      "precio": "7500",
      "grupo": "Grupo A",
      "stock": "5",
      "sucursal": "Wallmart Alameda",
      "epoca" : "Verano",
      "tipo_user" : "Anciano",
      "venta_web" : "Si"
    },
    {
      "nombre": "Desodorante",
      "codigo": "23",
      "precio": "3000",
      "grupo": "Grupo C",
      "stock": "2",
      "sucursal": "Wallmart La Florida",
      "epoca" : "Verano",
      "tipo_user" : "Joven",
      "venta_web" : "No"
    },
    {
      "nombre": "Escobillon Wallmart",
      "codigo": "32",
      "precio": "17500",
      "grupo": "Grupo D",
      "stock": "7",
      "sucursal": "Wallmart Cerrillos",
      "epoca" : "Verano",
      "tipo_user" : "Anciano",
      "venta_web" : "Si"
    },
    {
      "nombre": "Leche Descremada",
      "codigo": "54",
      "precio": "29850",
      "grupo": "Grupo A",
      "stock": "15",
      "sucursal": "Wallmart La Florida",
      "epoca" : "Verano",
      "tipo_user" : "Adulto",
      "venta_web" : "No"
    },
    {
      "nombre": "Manjar",
      "codigo": "67",
      "precio": "4500",
      "grupo": "Grupo A",
      "stock": "3",
      "sucursal": "Wallmart La Florida",
      "epoca" : "Verano",
      "tipo_user" : "Adulto",
      "venta_web" : "Si"
    },
    {
      "nombre": "Arroz",
      "codigo": "791",
      "precio": "6500",
      "grupo": "Grupo C",
      "stock": "5",
      "sucursal": "Wallmart La Florida",
      "epoca" : "Verano",
      "tipo_user" : "Adulto",
      "venta_web" : "No"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
