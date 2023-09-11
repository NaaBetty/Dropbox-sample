import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title = 'Choose a Language';

  constructor(private dialogRef : MatDialog){}
    openModal(){
      document.getElementById('staticBackdrop')
      this.dialogRef.open(ModalComponent,{
        width:'500px',
      })

    }
  

}
