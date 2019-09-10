import React from "react";

const Home = () => <h3>Home</h3>;
const Films = () => <h3>Films</h3>;
const Drama = () => <h3>Drama</h3>;
const Comedy = () => <h3>Comedy</h3>;

const Bus = () => <h3>Bus</h3>;
const Cart = () => <h3>Cart</h3>;
const Sandwiches = () => <h2>Sandwiches</h2>;
const Tacos = () => <h2>Tacos</h2>;

export const routes = [
    {
        path: '/sandwiches',
        component: Sandwiches
    },
    {
        path: '/tacos',
        component: Tacos,
        routes: [
            {
                path: '/tacos/bus',
                component: Bus
            },
            {
                path: '/tacos/cart',
                component: Cart
            }
        ]
    }
];