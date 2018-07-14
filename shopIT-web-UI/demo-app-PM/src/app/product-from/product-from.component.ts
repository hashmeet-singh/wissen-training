import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-from',
  templateUrl: './product-from.component.html',
  styleUrls: ['./product-from.component.css']
})
export class ProductFromComponent implements OnInit {

  productForm: FormGroup;
  errors: any = {};
  isEditing: boolean = false;
  originalProduct: any;

  constructor(private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      makeDate: [''],
      description: ['', Validators.minLength(5)]
    });

    this.route.params
      .subscribe(e => {
        if (e.productId) {
          this.productService.loadProduct(e.productId)
            .subscribe(product => {
              console.log(product);
              this.originalProduct = product;
              this.productForm.patchValue(product);
              this.isEditing=true;
            })
        }
      })
  }



  submitProduct(e) {
    e.preventDefault();
    if(this.isEditing){
      let formData = this.productForm.value;
      let product = Object.assign({},this.originalProduct,formData);
      this.productService.update(product)
      .subscribe(product=>{
        this.isEditing=false;
        this.router.navigate(['products']);
      })
      return;
    }
    this.productService.addProduct(this.productForm.value)
      .subscribe(product => {
        this.router.navigate(['products']);
      })
  }


}
