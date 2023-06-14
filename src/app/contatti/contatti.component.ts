import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/shared/model';
import { DataService } from '../services/data/data.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit{
contactList: Contact[] = []



mailForm = new FormGroup({
  name: new FormControl(''),
  surname: new FormControl(''),
  mail: new FormControl(''),
  messaje: new FormControl('')
})


constructor(private dataService: DataService){}


onSubmit() {
 
  console.warn(this.mailForm.value);
}


ngOnInit(): void {
  this.contactList = this.dataService.getContact()
  console.log(this.contactList)
}
}
