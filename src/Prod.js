import React, { Component } from 'react'
import json from './products.json';

export class Prod extends Component {
    render() {
        return (
            <div class="card-columns">
                {json.products.map(data=>
                    <div className="card bg-light">
                        <div className="card-body">
                            <img src={data.image} alt="" />
                            <p className="card-title">{data.pname}</p>
                            <p className="card-title">{data.quantity}</p>
                            <p className="card-title">{data.price}</p>
                        </div>
                    </div>
                    )}
                </div>
        )
    }
}

export default Prod;
