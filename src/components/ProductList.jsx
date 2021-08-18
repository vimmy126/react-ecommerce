import React, { Component } from 'react'
import { Title } from './Title';
import  Product  from "./Product";
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
    render() {
        return (
            
           <>
          
           <div className="py-5">
               <div className="container">
                   <Title name="our" title="products"></Title>
                   <div className="row">
                    <ProductConsumer>
                        {
                        (value)=>{
                          return value.products.map((product)=><Product key={product.id} product={product} />)
                        }
                        }
                    </ProductConsumer>
                   </div>
               </div>
           </div>
           </>
        )
    }
}
