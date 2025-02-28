import {Order} from "../domain/purchases/order"

export interface OrdersRepository {
    create(Order: Order): Promise<void>
}