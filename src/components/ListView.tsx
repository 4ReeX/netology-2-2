import React from 'react';
import {ListViewProps} from "../models/types";

const ListView: React.FC<ListViewProps> = ({ items }) => {
    return (
        <div className="list-view">
            {items.map(product => (
               <div className="shop-item-row">
                   <div className="shop-item-img-block"><img src={product.img} alt=""/></div>
                   <div className="shop-item-name">{product.name}</div>
                   <div>{product.color}</div>
                   <div className="shop-item-price">{product.price}₽</div>
               </div>
            ))}
        </div>
    );
};

export default ListView;
