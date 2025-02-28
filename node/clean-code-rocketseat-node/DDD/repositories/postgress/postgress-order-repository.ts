import { Order } from "../../domain/purchases/order";
import { OrdersRepository } from "../orders-repository";

export class PostgressOrdersRepository implements OrdersRepository {
  async create(Order: Order): Promise<void> {
    //salva o order no banco de dados
  }
}
