import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Type } from '../Interfaces/Type';
import { EntryService } from '../entry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-entry',
  templateUrl: './update-entry.component.html',
  styleUrls: ['./update-entry.component.css']
})
export class UpdateEntryComponent implements OnInit {

  form:FormGroup;
  id:number;
  constructor( private fb: FormBuilder,
               private dialogRef: MatDialogRef<UpdateEntryComponent>,
               @Inject(MAT_DIALOG_DATA){Description, Isexpense, Value, Id},
               private service: EntryService,
               private route: Router) { 
                 
                 this.id = Id;
                 this.form = fb.group({
                   description: [Description, Validators.required],
                   isExpense: [Isexpense, Validators.required],
                   value: [Value, Validators.required]
                 });
  }

  types: Type[] = [
    {value:true, display:'Expense'},
    {value:false, display: 'Income'}
  ]

  
  ngOnInit() {
  }

  close(){
   this.dialogRef.close();
  }

  save(){
    this.form.value.id = this.id;
    //console.log("Save clicked");
    this.service.updateEntry(this.id, this.form.value).subscribe((data)=>{
      console.log("data: -", data);
      
    })
    
    this.dialogRef.close();    
    

  }

}
