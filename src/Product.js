import React, { Component } from 'react';
import Prod from './Products';
import json from './products.json';

export class Product extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={prodData: Prod}
    //     console.log(this.state.prodData);
    // }
    render() {
    const prodD = Prod;
       
      
         {/* {this.prodData.map((curElem) => {
          const { id, pname, price, quantity, image } = curElem; */}

          return (
            <>
            {json.products.map(products=>
        
              <div className="card" style="width: 18rem;" key={products.id}>
                {/* <img className="card-img-top" src={this.prodData.image} alt="Card image cap"/> */}
                <div className="card-body">
                    <h5 className="card-title">{products.pname}</h5>
                    <p className="card-text">{products.price}</p>
                    <p className="card-text">{products.quantity}</p>
                    <p className="card-text"></p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        
          
        )}
    
        </>
        )
    }
}

export default Product
