import { Component } from '@angular/core';
import { DialogorderComponent } from '../dialogorder/dialogorder.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-not-order',
  templateUrl: './dialog-not-order.component.html',
  styleUrls: ['./dialog-not-order.component.css']
})
export class DialogNotOrderComponent {
  constructor(public dialogRef: MatDialogRef<DialogNotOrderComponent>) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
