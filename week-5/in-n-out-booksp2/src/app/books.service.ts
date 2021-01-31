/**
 * Title: books.service.ts
 * Author: Sarah Massie
 * Date: 30 January 2020
 * Description: Service class for book objects
 */

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '0340822775',
        title: 'Cloud Atlas',
        description: ' Published in 2004, the fantastical speculative fiction book consists of six interconnected nested stories that take the reader from the remote South Pacific in the nineteenth century to the island of Hawaii in a distant post-apocalyptic future. The author has said that the book is about reincarnation and the universality of human nature, and the title references a changing landscape (\'cloud\') over manifestations of fixed human nature (the \'atlas\).',
        numOfPages: 544,
        authors: ['David Mitchell']
      },
      {
        isbn: '0340739746',
        title: 'Ghostwritten',
        description: 'The story takes place mainly around East Asia, but also moves through Russia, Britain, the USA and Ireland. It is written episodically; each chapter details a different story and central character, although they are all interlinked through seemingly coincidental events.',
        numOfPages: 423,
        authors: ['David Mitchell']
      },
      {
        isbn: '0340921609',
        title: 'The Bone Clocks',
        description: "The novel is divided into six sections with five first-person point-of-view narrators. They are loosely connected by the character of Holly Sykes, a young woman from Gravesend who is gifted with an \"invisible eye\" and semi-psychic abilities, and a war between two immortal factions, the Anchorites, who derive their immortality from murdering others, and the Horologists, who are naturally able to reincarnate.",
        numOfPages: 609,
        authors: ['David Mitchell']
      },
      {
        isbn: '0340739762',
        title: 'number9dream',
        description: "Set in Japan, the 2001 novel narrates 19-year-old Eiji Miyake's search for his father, whom he has never met. Told in the first person by Eiji, it is a coming of age and perception story that breaks convention by juxtaposing Eiji Miyake's actual journey toward identity and understanding with his imaginative journey.",
        numOfPages: 418,
        authors: ['David Mitchell']
      },
      {
        isbn: '0340921560',
        title: 'The Thousand Autumns of Jacob de Zoet',
        description: "It is a historical novel set during the Dutch trading concession with Japan in the late 18th century, during the period of Japanese history known as Sakoku. The novel begins in the summer of 1799 at the Dutch East India Company trading post Dejima in the harbor of Nagasaki. It tells the story of a Dutch trader's love for a Japanese midwife who is spirited away into a sinister mountain temple cult.",
        numOfPages: 480,
        authors: ['David Mitchell']
      }
    ]
  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
  }
}
