import { Book } from "../model/Book";


export interface BookRepository {
    searchById(id: number):void;
    listAll(): void;
    create(book: Book): void;
    update(book: Book): void;
    delete(id: number):void;
    
}