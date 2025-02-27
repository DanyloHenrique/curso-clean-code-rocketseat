// Código em inglês 
import { useState } from "react"

interface Product {
  title: string;
  price: string;
}

const productList = [
  {
    title: 'Macarrão',
    price: 'R$ 25,00'
  },
  {
    title: 'Hamburger',
    price: 'R$ 30,00'
  }
]

// export function ListProduto() {
export function ListProduct() {
  // const [filteredProdutos, setFilteredProdutos] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  // function searchProduto(search: string) {
  function searchProduct(search: string) {
    // const filtrado = productList.filter(product => product.title.includes(search))
    const productFound = productList.filter(product => product.title.includes(search))

    setFilteredProducts(productFound)
  }

  return (
    <div>
      {/* <input type="text" onChange={(e) => searchProduto(e.target.value)} /> */}
      <input type="text" onChange={(e) => searchProduct(e.target.value)} />

      {/* {filteredProdutos.map(produto => ( */}
      {filteredProducts.map(product => (
        <div>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}
