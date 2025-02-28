export class Recipient {
    public street: string
    public numberhouse: number
    public zipcode: string

    constructor(street: string, numberhouse: number, zipcode: string){
        this.street = street
        this.numberhouse = numberhouse
        this.zipcode = zipcode
    }
}