 import React  from 'react'
import { useParams } from 'react-router-dom';

function CartDetails() {
    const { id } = useParams()

    const products = [
        { id: 1, name: 'Product A' },
        { id: 2, name: 'Product B' },
        { id: 3, name: 'Product C' }
      ];
 


  return (
    <div>
      {products[id].name}
    </div>
  )
}

export default CartDetails
