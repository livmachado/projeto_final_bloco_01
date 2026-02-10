import { BookController } from "./src/controller/BookController";
import { DigitalBook } from "./src/model/DigitalBook";
import { PhysicalBook } from "./src/model/PhysicalBook";
import { Colors } from "./src/util/Colors";
import { formatCurrency } from "./src/util/Currency";
import { Input } from "./src/util/Input";

const books= new BookController();

const typeBook= ["Digital", "Físico"]
const formatType= ["PDF", "EPUB", "MOBI"]

export function main() {

    let option: number;

    createTestBooks()


    while(true){
        console.clear()
        console.log(Colors.bg.black, Colors.fg.white, "*****************************************************");
        console.log("                                                       ");
        console.log("                      CAFÉ COM LETRAS                  ");
        console.log("                                                       ");
        console.log("  *****************************************************");
        console.log("                                                       ");
        console.log("              1 - Adicionar Novo Livro                 ");
        console.log("              2 - Listar todos os Livros               ");
        console.log("              3 - Buscar Livro por código              ");
        console.log("              4 - Atualizar Livro                      ");
        console.log("              5 - Apagar Livro                         ");
        console.log("              6 - Buscar por titulo do Livro           ");
        console.log("              0 - Sair                                 ");
        console.log("                                                       ");
        console.log("  *****************************************************", Colors.reset);
        
        console.log(" Entre com a opção desejada: ")
        option = Input.questionInt(" ")

        if (option === 0){
            console.log(Colors.fg.whitestrong, "\nOnde o café encontra boas histórias", Colors.reset)
            about()
            process.exit(0)
        }

        switch(option){
            case 1:
                console.log(Colors.fg.whitestrong,"\nAdicionar Livro\n", Colors.reset)
                addNewBook()
                keyPress()                
                break;
            case 2:
                console.log(Colors.fg.whitestrong,"\nListar todos os Livros\n", Colors.reset)
                listAllBooks()
                keyPress()
            break;
            case 3:
                console.log(Colors.fg.whitestrong,"\nBuscar Livro por código\n", Colors.reset)
                searchBookById()
                keyPress()

            break;
            case 4:
                console.log(Colors.fg.whitestrong,"\nAtualizar Livro\n", Colors.reset)
                updateBook()
                keyPress()

            break;
            case 5:
                console.log(Colors.fg.whitestrong,"\nDeletar Livro\n", Colors.reset)
                deleteBookById()
                keyPress()
            break;
            case 6:
                console.log(Colors.fg.whitestrong,"\nProcurar Conta por Titulo do Livro\n", Colors.reset)
                findByTitle()
                keyPress()
            break;
            default:
                console.log(Colors.fg.redstrong,"\nOpção Inválida\n", Colors.reset)
                keyPress()
            break;

        }
    }
}

function findByTitle(): void {
    console.log("Digite o titulo do livro: ")
    const title = Input.question("");
    books.findByTitle(title)
}

// Opção 1: Adicionar novo livro

function addNewBook(){

    console.log("Digite o Título do Livro: ")
    const title = Input.question("");

    console.log("\nDigite o preço do Livro: ")
    const price = Input.questionFloat("");

    console.log("\nSelecione o tipo de Livro: ")
    const type = Input.keyInSelect(typeBook, "", { cancel: false}) + 1

    switch(type){
        case 1: 
            console.log("\nSelecione o tipo do arquivo: ");
            const fileFormat = Input.keyInSelect(formatType, "", { cancel: false}) + 1;
            books.create(new DigitalBook(
                books.generateId(), title, price, type, fileFormat ));
        break;

        case 2: 
            console.log("Digite a quantidade: ");
            const quantity = Input.questionInt("");
            books.create(new PhysicalBook(books.generateId(), title, price, type, quantity) )
        break;

    }

}

//Opção 2: Listar todos os livros

function listAllBooks(): void{
    books.listAll()
}

//Opção 3 : Procurar um Livro pelo id

function searchBookById(): void {
    console.log("Digite o código do Livro: ");
    const id = Input.questionInt("");
    books.searchById(id)
}

function updateBook(): void {
    console.log("Digite o código do Livro: ");
    const id = Input.questionInt("");


    const book = books.findInArray(id);

    if(book !== null){
        let title: string = book.title;
        let price: number = book.price;
        const type: number = book.type;

        // Atualização do Titulo do livro
        console.log(`\nTitulo atual: ${title}`);
        console.log("Digite o novo nome do titulo: ");
        console.log("(Pressione ENTER para manter o valor atual)");
        title = Input.question("", { defaultInput: title });

        // Atualização do Preço
        console.log(`\nPreço atual: ${formatCurrency(price)}`);
        console.log("Digite o novo preço: ");
        console.log("(Pressione ENTER para manter o valor atual)");
        price = Input.questionFloat("", { defaultInput: price });

        //Atualização correspondente de cada titulo

        switch(type){
            case 1: 
                let fileFormat: number = (book as DigitalBook).fileFormat;

                // Atualização do formarto de arquivo
                console.log(`\nFormato atual: ${fileFormat}`);
                console.log("Digite o novo formato: ");
                console.log("(Pressione ENTER para manter o valor atual)");
                fileFormat = Input.keyInSelect(formatType, "", { cancel: false}) + 1;

                books.update(new DigitalBook(id, title, price, type, fileFormat));
            break;

            case 2: 
                let quantity: number = (book as PhysicalBook).quantity;

                // Atualização do formarto de arquivo
                console.log(`\nQuantidade Atual: ${quantity}`);
                console.log("Digite a nova quantidade: ");
                console.log("(Pressione ENTER para manter o valor atual)");
                quantity = Input.questionInt("", { defaultInput: quantity });

                books.update(new DigitalBook(id, title, price, type, quantity));
            break;
        }
    } else {
        console.log(Colors.fg.red, `O Livro com o código ${id} não foi encontrado!`, Colors.reset);
    }
}

function deleteBookById(): void{

    console.log("Digite o código do Livro: ");
    const id = Input.questionInt("");
    

    const book = books.findInArray(id);

    // Se a conta existir...
    if(book !== null){
        
        // Exibe a mensagem de confirmação da exclusão (Yes ou No)
        console.log(Colors.fg.whitestrong, `\nTem certeza que deseja deletar o Livro ${book.title} [y/n]?`, Colors.reset);
        const confirm = Input.keyInYNStrict("");

        // Se cofirmar (y), deleta a conta
        if (confirm)
            books.delete(id);
        else
            console.log(Colors.fg.red,"\nOperação cancelada!", Colors.reset);
    

    }else{
        console.log(Colors.fg.red, `O Livro não foi encontrado!`, Colors.reset);
    }

}




function createTestBooks(): void{

    //Livro digital

    books.create(new DigitalBook(books.generateId(), "Alice no País das Maravilhas", 1, 60.00, 2))
    books.create(new DigitalBook(books.generateId(), "O Pequeno Príncipe", 1, 13.20, 1))

    //Livro Fisico
    books.create(new PhysicalBook(books.generateId(), "Código Limpo", 2, 65.00, 20))
    books.create(new PhysicalBook(books.generateId(), "Harry Potter e a Câmara Secreta", 2, 29.90, 12))

}

function about(): void {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por: ");
  console.log("Lívia Machado Campos - liviamcampos98@gmail.com");
  console.log("github.com/livmachado");
  console.log("*****************************************************");
}

/* Função de pausa entre as opções do menu */
function keyPress(): void {
  console.log(Colors.reset, "\nPressione enter para continuar...");
  Input.prompt();
  console.clear()
}

main()