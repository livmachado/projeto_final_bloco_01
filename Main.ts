import { DigitalBook } from "./src/model/DigitalBook";
import { PhysicalBook } from "./src/model/PhysicalBook";
import { Colors } from "./src/util/Colors";
import { Input } from "./src/util/Input";

export function main() {

    let option: number

    console.log("\nTestes - Classe Conta Corrente");

    const bd1 = new DigitalBook(1, "Alice no País das Maravilhas", 1, 60.00, "PDF");
    const bp1 = new PhysicalBook(2, "Alice no País das Maravilhas", 2, 60.00, 30);

    bd1.view();
    bp1.view();


    while(true){
        console.log(Colors.bg.black, Colors.fg.white, "*****************************************************");
        console.log("                                                       ");
        console.log("                      CAFÉ COM LETRAS                  ");
        console.log("                                                       ");
        console.log("  *****************************************************");
        console.log("                                                       ");
        console.log("              1 - Criar Livro                          ");
        console.log("              2 - Listar todos os Livros               ");
        console.log("              3 - Buscar Livro por código              ");
        console.log("              4 - Atualizar Livro                      ");
        console.log("              5 - Apagar Livro                         ");
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

                break;
            case 2:
                console.log(Colors.fg.whitestrong,"\nListar todos os Livros\n", Colors.reset)

            break;
            case 3:
                console.log(Colors.fg.whitestrong,"\nBuscar Livro por código\n", Colors.reset)

            break;
            case 4:
                console.log(Colors.fg.whitestrong,"\nAtualizar Livro\n", Colors.reset)

            break;
            case 5:
                console.log(Colors.fg.whitestrong,"\nDeletar Livro\n", Colors.reset)

            break;
            default:
                console.log(Colors.fg.redstrong,"\nOpção Inválida\n", Colors.reset)

            break;

        }
    }
}

function about(): void {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por: ");
  console.log("Lívia Machado Campos - liviamcampos98@gmail.com");
  console.log("github.com/livmachado");
  console.log("*****************************************************");
}

main()