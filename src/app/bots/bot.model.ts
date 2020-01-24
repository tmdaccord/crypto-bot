import {Exchange} from "./exchange.model";


export class Bot {
    public name: string;
    public exchange: Exchange;

    constructor(name: string, exchange) {
        this.name = name;
        this.exchange = exchange;
    }
}
