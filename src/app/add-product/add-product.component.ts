import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from '../app.service';
import { ShopCartComponent } from '../shop-cart/shop-cart.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  displayedColumns: string[] = ['productName', 'cateogary', 'date', 'quality', 'price', 'description', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog : MatDialog, private service: AppService) {}
  ngOnInit(): void {
    this.getProd()
  }

  

  openDialog() {
    this.dialog.open(ShopCartComponent, {
      width: '30%'
    }).afterClosed().subscribe(val=>{
      if (val==='save') {
        this.getProd()
      }
    })
  }

  getProd() {
    this.service.getProduct()
    .subscribe({
      next:(res) => {
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort
      },
      error:()=>{
        alert('error while fetching')
      }
    })
  }

  editProduct(row: any) {
    this.dialog.open(ShopCartComponent,{
      width: '30%',
      data: row
    }).afterClosed().subscribe(val=>{
      if (val === 'update') {
        this.getProd()
      }
    })
  }

  deleteProduct(id: number) {
    this.service.deleteProduct(id)
    .subscribe({
      next:(res) => {
        alert('product deleted successfully');
        this.getProd()
      },
      error:() => {
        alert('error while deleting product')
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
