import { Colors } from "../util/Colors";
import { formatCurrency } from "../util/Currency";

export abstract class Book {
    private _id: number;
    private _title: string;
    private _price: number;
    private _type: number;


	constructor(id: number, title: string, price: number, type: number) {
		this._id = id;
		this._title = title;
		this._price = price;
		this._type = type;
	}


	public get id(): number {
		return this._id;
	}

	public get title(): string {
		return this._title;
	}

	public get price(): number {
		return this._price;
	}

	public get type(): number {
		return this._type;
	}

	public set id(value: number) {
		this._id = value;
	}


	public set title(value: string) {
		this._title = value;
	}


	public set price(value: number) {
		this._price = value;
	}

	public set type(value: number) {
		this._type = value;
	}

    
    public view(): void{
        let type: string;

        switch(this._type){
            case 1:
                type = "Digital"
            break;
            case 2:
                type = "Físico";
            break;
            default:
                type = "Tipo Inválido";
        }

        console.log(Colors.bg.black, Colors.fg.white,
				"\n  *******************************************");
        console.log("                DADOS DO Livro               ");
        console.log("  *******************************************");
        console.log(`  Código do Livro: ${this._id}`);
        console.log(`  Nome do Livro: ${this._title}`);
        console.log(`  Tipo: ${type}`);
        console.log(`  Preço: ${formatCurrency(this._price)}`, Colors.reset);
    }


}