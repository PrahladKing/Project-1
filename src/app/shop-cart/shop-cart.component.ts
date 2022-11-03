import {Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'shop-cart',
    templateUrl: './shop-cart.component.html',
    styleUrls: ['./shop-cart.component.css']
})

export class ShopCartComponent implements OnInit {
    cateogaries = ['Apple','Samsung','Nokia','Xiaomi','Realme']
    quality = ['New model','Used once','Refurbished']
    actionBtn = 'Save'
    productForm !: FormGroup
    constructor(private formbuilder: FormBuilder, 
    @Inject(MAT_DIALOG_DATA) public editData: any,    
    private service: AppService, private dialog: MatDialogRef<ShopCartComponent>) {}
    ngOnInit(): void {
        this.productForm = this.formbuilder.group({
            productName : ['',Validators.required],
            cateogary : ['',Validators.required],
            date : ['',Validators.required],
            price : ['',Validators.required],
            quality : ['',Validators.required],
            description : ['',Validators.required],
        })

        if (this.editData) {
            this.actionBtn = 'Update'
            this.productForm.controls['productName'].setValue(this.editData.productName);
            this.productForm.controls['cateogary'].setValue(this.editData.cateogary);
            this.productForm.controls['date'].setValue(this.editData.date);
            this.productForm.controls['quality'].setValue(this.editData.quality);
            this.productForm.controls['price'].setValue(this.editData.price);
            this.productForm.controls['description'].setValue(this.editData.description);
        }
    }


    addProduct() {
       if (!this.editData) {
            if(this.productForm.valid) {
                this.service.postProduct(this.productForm.value)
                .subscribe({
                    next:(res) => {
                        alert('Submit success');
                        this.productForm.reset();
                        this.dialog.close('save')
                    },
                    error:()=>{
                        alert("submit failed check error")
                    }
                })
            }
        }else {
            this.updateProduct()
        }
    }
    updateProduct() {
        this.service.putProduct(this.productForm.value,this.editData.id)
        .subscribe({
            next:(res)=>{
                alert('updated succesfully');
                this.productForm.reset();
                this.dialog.close('update')
            },
            error:(err) =>{
                console.log(err)
            },
        })
    }
}

