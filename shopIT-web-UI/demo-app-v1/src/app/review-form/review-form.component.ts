import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {
  error: any = {};
  formOpen = false;
  reviewForm: FormGroup;
  @Output() onNewReview = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.reviewForm = this.fb.group({
      stars: ['5', Validators.required],
      author: ['', [Validators.required, Validators.email]],
      review: ['', [Validators.required, Validators.minLength(5)]]
    });
    let authorControl = this.reviewForm.get('author');
    authorControl.statusChanges.subscribe(e => {
      if (e === 'INVALID') {
        if (authorControl.errors.required)
          this.error['email'] = "Author cannot be blank";
        else if (authorControl.errors.email)
          this.error['email'] = 'Please Enter a valid E-mail Id';
      }
      else this.error['email'] = '';
    })

  }

  

  toggleForm() {
    this.formOpen = !this.formOpen;
  }

  handleFormSubmit(e) {
    e.preventDefault();
    if (this.reviewForm.valid) {
      let review = this.reviewForm.value;
      this.onNewReview.emit({ value: review });
      this.toggleForm();
    }
  }

}
