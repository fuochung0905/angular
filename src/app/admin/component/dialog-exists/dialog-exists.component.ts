import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-exists',
  templateUrl: './dialog-exists.component.html',
  styleUrls: ['./dialog-exists.component.css']
})
export class DialogExistsComponent {
  constructor(public dialogRef: MatDialogRef<DialogExistsComponent>) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
