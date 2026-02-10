import { Colors } from "../util/Colors";
import { Book } from "./Book";

export class PhysicalBook extends Book {
    private _quantity: number;


    constructor(
        id: number, 
        title: string, 
        price: number, 
        type: number,
        quantity: number
    ) {
        super(id, title, price, type);
        this._quantity= quantity;
    }
    
	public get quantity(): number {
		return this._quantity;
	}

	public set quantity(value: number) {
		this._quantity = value;
	}
    

    // Método visualizar sobrescrito (Polimorfismo)
    public view(): void {
        super.view()
        console.log(Colors.bg.black, Colors.fg.white,`Quantidade: ${this._quantity} uni`,Colors.reset)
    }
}