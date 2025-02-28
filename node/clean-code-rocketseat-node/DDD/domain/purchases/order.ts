export class Order {
    public total:  number
    public createAt: Date
    public customerDocument: string


    constructor(total: number, customerDocument: string){
        this.total = total
        this.createAt = new Date()
        this.customerDocument = customerDocument
    }
}