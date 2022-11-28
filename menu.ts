export class Menu {
    private _name!: string;
    private _price!: number;
    private _type!: string;
    private _describe!: string;
    private _amount!: number;

    constructor(name: string, price: number, type: string, describe: string, amount: number) {
        this._name = name;
        this._price = price;
        this._type = type;
        this._describe = describe;
        this._amount = amount;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get describe(): string {
        return this._describe;
    }

    set describe(value: string) {
        this._describe = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }
}