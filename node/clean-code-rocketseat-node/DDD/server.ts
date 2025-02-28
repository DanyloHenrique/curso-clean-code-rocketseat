import { SubmitOrder } from "./use-cases/submit-order"
import { PostgressOrdersRepository } from "./repositories/postgress/postgress-order-repository"

const submitOrder = new SubmitOrder(
    new PostgressOrdersRepository(),
)

console.log(submitOrder)