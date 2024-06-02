import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-not-quantity',
  templateUrl: './dialog-not-quantity.component.html',
  styleUrls: ['./dialog-not-quantity.component.css']
})
export class DialogNotQuantityComponent {
  constructor(public dialogRef: MatDialogRef<DialogNotQuantityComponent>) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
