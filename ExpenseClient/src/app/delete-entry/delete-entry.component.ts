import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-delete-entry',
  templateUrl: './delete-entry.component.html',
  styleUrls: ['./delete-entry.component.css']
})
export class DeleteEntryComponent implements OnInit {

  id;
  entry = {
    description:'',
    value:0,
    isExpense:false
  }
  constructor(private route: ActivatedRoute,
              private service: EntryService,
              private router: Router) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id') //id comes from defnition of routes
    this.service.getEntry(this.id).subscribe((data: any) => {
      console.log(data);
      this.entry.description = data.Description;
      this.entry.isExpense   = data.IsExpense;
      this.entry.value       = data.Value;
    })
  }

  cancel(){
    this.router.navigate(['/']);
   // console.log('Cancel clicked');
  }

  confirm(){
    this.service.deleteEntry(this.id).subscribe((data) =>{
      console.log(data);
    })    
   // console.log('Confrim clicked');
  }

}
