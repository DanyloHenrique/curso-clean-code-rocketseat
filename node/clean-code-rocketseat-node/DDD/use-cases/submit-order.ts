import { Order } from "../domain/purchases/order";
import { OrdersRepository } from "../repositories/orders-repository";

interface SubmitOrderRequest {
  customerDocument: string;
  total: number;
}

export class SubmitOrder {
  constructor(private ordersRepository: OrdersRepository) {}

  async execute({ customerDocument, total }: SubmitOrderRequest) {
    // pode ser feitas regras, exemplo: cliente só pode fazer pedido depois de cadastrar o endereço

    const order = new Order(total, customerDocument);

    //persistir no banco de dados
    await this.ordersRepository.create(order);
  }
}
