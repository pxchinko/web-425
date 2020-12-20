/*=======================================
; Title: person.class.ts
; Author: Sarah Massie
; Date: 19 December 2020
; Description: Simple Angular application creating a Person constructor object
=======================================*/

import { IPerson } from "./person.interface"

class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName
    }
}

let myName = new Person('Sarah', 'Massie')
console.log('My name is ' + myName.firstName + ' ' + myName.lastName + '.')