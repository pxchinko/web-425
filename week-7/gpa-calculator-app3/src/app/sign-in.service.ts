/**
 * Title: sign-in.service.ts
 * Author: Sarah Massie
 * Date: 13 February 2021
 * Description: Sign-in service for the application
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  // validates the studentId by the numbers in the array
  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
  }
}
