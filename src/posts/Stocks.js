import React, { useState } from 'react'
import PostData from '../data/posts.json'

const { label, row } = PostData;



const Stocks = ({stock,visibile}) => {

if(!visibile || stock.length == 0)
    return null;

    return (
        <>

            <table>
                <tr>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Replenishnt</th>
                </tr>

                {stock.map(({ product, qty, replenishment }) =>
                    <tr>
                        <td>{product}</td>
                        <td>{qty}</td>
                        <td>{replenishment}</td>
                    </tr>
                )}
            </table>

        </>)
}




export default Stocks