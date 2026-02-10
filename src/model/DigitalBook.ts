import { Colors } from "../util/Colors";
import { Book } from "./Book";

export class DigitalBook extends Book {
    private _fileFormat: 'PDF' | 'EPUB' | 'MOBI';


	constructor(
        id: number, 
        title: string, 
        price: number, 
        type: number,
        fileFormat: 'PDF' | 'EPUB' | 'MOBI'
    ) {
        super(id, title, type, price);
        this._fileFormat= fileFormat;
	}
    
    
    public get fileFormat(): string {
        return this._fileFormat;
    }


    public set fragrance(value: "PDF" | "EPUB" | "MOBI") {
        this._fileFormat = value;
    }

        // Método visualizar sobrescrito (Polimorfismo)
    public view(): void {
        super.view()
        console.log(Colors.bg.black, Colors.fg.white,`Formato do Arquivo: ${this._fileFormat}`,Colors.reset)
    }

    

}