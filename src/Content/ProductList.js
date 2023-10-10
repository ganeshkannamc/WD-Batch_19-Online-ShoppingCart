import './content.css'
import DisplayProduct from './DisplayProduct'

const ProductList = () => {

    let products = [
        {id:1,brand:'Samsung',name:'Flip',price:3000, description:"test message",cartCount:0,isAdded:false},
        {id:2,brand:'Moto',name:'Razr',price:8000, description:"test message",cartCount:0,isAdded:false},
        {id:3,brand:'Apple',name:'iPhone12',price:7000, description:"test message",cartCount:1,isAdded:false},
]

  return (
    <div className='products'>
        {products.map((itm,index) => <DisplayProduct key={index} item={itm} />)}
    </div>
  )
}

export default ProductList