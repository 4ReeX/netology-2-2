import React, { useState } from 'react';
import IconSwitch from "./buttons/IconSwitch";
import CardsView from "./CardView";
import ListView from "./ListView";
import {Product} from "../models/types";
const initialProducts = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
    name: "Nike Metcon 2",
    price: "1300",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
    name: "Nike Metcon 3",
    price: "1500",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

const Store: React.FC = () => {
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [viewType, setViewType] = useState<'list' | 'cards'>('cards');

    const toggleView = () => {
        setViewType(prevViewType => (prevViewType === 'cards' ? 'list' : 'cards'));
    };

    const addProduct = (newProduct: Product) => {
        setProducts(prevProducts => [...prevProducts, newProduct]);
    };

    // Пример добавления товара
    const handleAddProduct = () => {
        const newProduct: Product = {
            name: 'Product-Name',
            price: 0,
            color: 'default',
            img: 'src/assets/img/noImage.png',
        };
        // setProducts(prevProducts => [...prevProducts, newProduct]);
        addProduct(newProduct);
    };

    return (
        <div className="flex column flex-start">
            <IconSwitch icon={viewType === 'cards' ? 'view_list' : 'view_module'} onSwitch={toggleView} />
            <button onClick={handleAddProduct}>Add Product</button>
            <div className="row">
                {viewType === 'cards' ? <CardsView cards={products} /> : <ListView items={products} />}
            </div>
        </div>
    );
};

export default Store;
