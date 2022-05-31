import React, { HtmlHTMLAttributes } from "react";

type ProductProps={
    names:{
            name: string;
            icon: string;
            price: number;
            editable:boolean;
    }[],
    handleClick:(event:React.MouseEvent<HTMLElement>,name:string)=>void
}

const Product=(props:ProductProps)=>{
    return(
        <div className="Parent">
            {props.names.map(item=>(
            <div className="Child">
                
            <span role="img" title="title">{item.icon}</span>
                <p>Product name: {item.name}</p>
                <div>

                        <p>
                            Price: {item.editable?<input aria-label="Search" type="number" value={item.price}/>
                            :<a href="#" onClick={(event)=>props.handleClick(event, item.name)}> {item.price}</a>}
                        </p>
                </div>
            </div>
            ))}
        </div>
    );
}

export default Product;