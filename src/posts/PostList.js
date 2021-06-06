import React, { useState } from 'react'
import PostData from '../data/posts.json'
import Stocks from './Stocks';

const { label, row } = PostData;



const PostList = () => {
    const [checked, setChecked] = useState(false);
    return (
        <div>

            <input onChange={e=>setChecked(e.target.checked)} value={checked} type='checkbox'/> 

            <h1>
                {
                    label
                }
            </h1>

            {
                row.map(object => <div>
                    <h3>level:{object.level}</h3>
                    {
                        object.locations.map(location => <div>



                            <h4>location name: {location.name} </h4>

                            <Stocks stock = {location.stock} visibile = {checked} />

                            

                        </div>)
                    }


                </div>)


            }
        </div>
    )
}


export default PostList