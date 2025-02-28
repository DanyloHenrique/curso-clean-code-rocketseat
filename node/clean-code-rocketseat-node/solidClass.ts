// principio
// 1-SRP: cada classe faz apenas uma função
// 2-OCP: classe CalculateOrderDiscount não aumenta com o numero de metodos de pagamentos
// 3-LSP: é possível passar diferntes valores para o parametro PaymentMethod da classe CalculateOrderDiscount e ela continua funcionando
// 4-ISP: PaymentMethod é uma interface que não força as classes a terem métodos desnecessários
// 5-DIP: CalculateOrderDiscount não precisa importar os métodos de pagamentos, está recebendo como parametro


//------------------RESOLVENDO O PROBLEMA DO PRINCIPIO 2-OCP----------------------
//a classe CalculateOrderDiscount recebe o metodo de pagamento que é do tipo PaymentMethod
//São criadas classes para cada método de pagamento implementando a interface PaymentMethod usando a função getDiscountAmout
// e passando seus próprios valores como parâmetros

// O que acontece na instancia das classe:
//Quando a classe CalculateOrderDiscount é instanciada,
//é passado o valor (amount) como parâmetro para o método execute(),
//e o método execute() recebe o tipo de pagamento (PaymentMethod) como parâmetro para calcular o desconto

//------------------VENDO ISP MAIS DETALHADAMENTE----------------------
//Se fosse necessário obter o número do cartão
//seria um erro colocar na interface PaymentMethod pois metodos como Bilit não utilizam esse atributo
/*
    ERRADO:
    interface PaymentMethod {
        numberCard: number;

        getDiscountAmout: (amount: number) => number;
    }
*/
//Seria preciso criar uma outra interface e implementar ela para as classes certas
/*
    CERTO:
    interface Card {
        number: number;
    }
    
    class Debit implements PaymentMethod, Card{}
    class Credit implements PaymentMethod, Card{}

*/

//---------------CLASSE PRINCIPAL PARA CALCULAR DESCONTO-------------------------------

export class CalculateOrderDiscount{
    public execute(amount: number, paymentMethod: PaymentMethod) {
      return paymentMethod.getDiscountAmout(amount);
    }
  }

//---------------TIPOS DE PAGAMENTOS (paymentMethod)-------------------------------
//bilet, credit, debit


export interface PaymentMethod {
  getDiscountAmout: (amount: number) => number;
}

export class Billet implements PaymentMethod {
  getDiscountAmout(amount: number): number {
    return amount * 0.1;
  }
}

export class Credit implements PaymentMethod {
  private installMents: number;

  constructor(installMents: number) {
    this.installMents = installMents;
  }

  getDiscountAmout(amount: number): number {
    if (this.installMents === 1) {
      return amount * 0.05;
    }

    if (this.installMents <= 6) {
      return amount * 0.02;
    }

    return 0;
  }
}

export class Debit implements PaymentMethod {
  getDiscountAmout(amount: number): number {
    return amount * 0.05;
  }
}

//--------------EXECUTANDO O CASO DE USO-------------------
const calculateOrderDiscount = new CalculateOrderDiscount()

const discountOrderDebit = calculateOrderDiscount.execute(
    2000,
    new Debit()
)

const discountOrderCredit2 = calculateOrderDiscount.execute(
    500,
    new Credit(6)
)
 
console.log("Debit: ", discountOrderDebit) // "Debit: ",  100 
console.log("Credit em 6 vezes: ", discountOrderCredit2) // "Credit em 6 vezes: ",  10


//---------------CRIANDO MAIS UM METODO DE PAGAMENTO (PIX)------------------------
// Nova classe respeitando OCP
//(O método de pagamento novo foi criado, sem a necessidade de alteração em nenhuma outra classe)
class Pix implements PaymentMethod{
    getDiscountAmout(amount: number): number{
        return amount * 0.20
    }
}
//usando o metodo pix
const discountOrderPix = calculateOrderDiscount.execute(
    500,
    new Pix()
)
console.log("Pix: ", discountOrderPix) //"Pix: ",  100 

