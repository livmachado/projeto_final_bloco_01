import { Colors } from "../util/Colors";
import { Book } from "./Book";

export class DigitalBook extends Book {
    private _fileFormat: number;


	constructor(
        id: number, 
        title: string, 
        price: number, 
        type: number,
        fileFormat: number
    ) {
        super(id, title, type, price);
        this._fileFormat= fileFormat;
	}
    
    
    public get fileFormat(): number {
        return this._fileFormat;
    }


    public set fileFormat(value: number) {
        this._fileFormat = value;
    }

        // Método visualizar sobrescrito (Polimorfismo)
    public view(): void {
        let fileFormat: string;

        switch(this._fileFormat){
            case 1:
                fileFormat = "PDF"
            break;
            case 2:
                fileFormat = "EPUB";
            break;
            case 3:
                fileFormat = "MOBI";
            break;
            default:
                fileFormat = "Tipo Inválido";
        }
        super.view()
        console.log(Colors.bg.black, Colors.fg.white,`Formato do Arquivo: ${fileFormat}`,Colors.reset)
    }

    

}