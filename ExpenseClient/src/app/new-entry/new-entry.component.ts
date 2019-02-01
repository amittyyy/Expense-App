import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Type } from '../Interfaces/Type';
import { EntryService } from '../entry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent  {

  types: Type[] = [
    { value: true, display: 'Expense'},
    { value: false, display: 'Income'},
  ]

  constructor( private service: EntryService,
               private route: Router) { }

  entryForm = new FormGroup({
    description: new FormControl('', Validators.required),
    isExpense: new FormControl('', Validators.required),
    value: new FormControl('', [Validators.required, Validators.pattern('\\d+\\.?\\d*')])
  })

  onSubmit(){
    console.log(this.entryForm.value);
    this.service.PostData(this.entryForm.value).subscribe((data) => {
      console.log('data -', data);
      this.route.navigate(['/entries']);
    });
    
  }

  

}
