// principio 1-SRP: cada classe faz apenas uma função


//TIPOS DE PAGAMENTOS (paymentMethod)
//bilet, credit, debit

//---------------FERINDO O PRINCÍPIO DE 2-OCP----------------------
//Quanto mais métodos de pagamento seriam necessarios mais ifs dentro do metodo
//Classe recebe quantidade de parcelas (installMents) para calculo de desconto caso o metodo e pagamento seja credito
//mas quando o pagamento for por débito a classe continua recebendo um valor para installMents de forma desnecessária

//classe responsável por calcular o desconto do pedido
//Tradução: amount = quantia
class CalculateOrderDiscountNotOCP{
    public execute(amount: number, installMents: number, paymentMethod: string) {
      if (paymentMethod === "bilet") {
        return amount * 0.05;
      }
  
      if (paymentMethod === "credit") {
        if (installMents === 1) {
          return amount * 0.05;
        }
  
        if (installMents <= 6) {
          return amount * 0.02;
        }
  
        return 0;
      }
  
      if (paymentMethod === "debit") {
        return amount * 0.05;
      }
  
      return 0;
    }
}


//---------------------Outras classes-----------------------------------
//classe responsável por enviar nota fiscal
class SubmitOrderInvoice {
    public execute() {
      //emissao de nota
    }
  }
  
  //caso de uso de criar pedidos que utiliza as outras duas classes
  class CreateOrder {
    public execute() {
      //calculateOrderDiscount
      //SubmitOrderInvoice
    }
  }
  