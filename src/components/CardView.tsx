import React from 'react';
import {Product} from "../models/types";

interface CardsViewProps {
    cards: Product[];
}

const CardsView: React.FC<CardsViewProps> = ({ cards }) => {
    return (
        <div className="cards-view">
            {cards.map(product => (
                <div className="shop-item-card">
                    <img src={product.img} alt="" className="shop-item-img"/>
                    <h3 className="shop-item-name"> {product.name}</h3>
                    <div className="shop-item-color">{product.color}</div>
                    <div className="shop-item-price">{product.price}₽</div>
                </div>
            ))}
        </div>
    );
};

export default CardsView;
