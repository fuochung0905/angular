import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogorder',
  templateUrl: './dialogorder.component.html',
  styleUrls: ['./dialogorder.component.css']
})
export class DialogorderComponent {
  constructor(public dialogRef: MatDialogRef<DialogorderComponent>) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
