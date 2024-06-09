import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-not-phone-number',
  templateUrl: './not-phone-number.component.html',
  styleUrls: ['./not-phone-number.component.css']
})
export class NotPhoneNumberComponent {
  constructor(public dialogRef: MatDialogRef<NotPhoneNumberComponent>) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
