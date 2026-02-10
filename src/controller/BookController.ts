import { Book } from "../model/Book";
import { BookRepository } from "../repository/BookRepository";
import { Colors } from "../util/Colors";

export class BookController implements BookRepository{

    private bookList = new Array<Book>();
    public id: number = 0

    searchById(id: number): void {
        const findBook= this.findInArray(id)

        if(findBook !== null){
            findBook.view()
        } else {
            console.log(Colors.fg.redstrong, "\nLivro não Encontrado", Colors.reset);
        }
    }

    listAll(): void {
        for(let book of this.bookList){
            book.view()
        }
    }

    create(book: Book): void {
        this.bookList.push(book)
        console.log(Colors.fg.green, `\nO Livro ${book.title} foi cadastrado com sucesso!`, Colors.reset)
    }

    update(book: Book): void {
        
        const findBook = this.findInArray(book.id);

        if(findBook !== null ){
            this.bookList[this.bookList.indexOf(findBook)] = book;
            console.log(Colors.fg.greenstrong,`\nO Livro ${book.title} foi atualizado com Sucesso!`, Colors.reset)
        } else {
            console.log(Colors.fg.redstrong ,"\nLivro não Encontrado", Colors.reset)
        }
    }

    delete(id: number): void {
        const findBook = this.findInArray(id);

        if(findBook !== null ){
            this.bookList.splice(this.bookList.indexOf(findBook), 1)
            console.log(Colors.fg.greenstrong,`\nO Livro foi Deletado com Sucesso!`, Colors.reset)
        } else {
            console.log("\nLivro não Encontrado")
        }
    }

    //Métodos Auxiliares
    public generateId() : number {
        return ++ this.id;
    }

    public findInArray(id: number): Book |  null{

        for(let book of this.bookList){
            if(book.id === id)
                return book
        }

        return null;
    }
}