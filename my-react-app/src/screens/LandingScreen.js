import "./LandingScreen.css";
import React, { useReducer } from "react";
import products from "../data";
import ProductCard from "../components/ProductCard";
import CartCard from "../components/CartCard";

function reducer(state, action) {
  switch (action.type) {
    case "increase": {
      const data = [...state.products];
      data[action.payLoad - 1].quatitySelected += 1;
      return {
        ...state,
        products: data,
      };
    }
    case "decrease": {
      const data = [...state.products];
      if (data[action.payLoad - 1].quatitySelected > 0) {
        data[action.payLoad - 1].quatitySelected -= 1;
      }
      return {
        ...state,
        products: data,
      };
    }
    default:
      return {
        ...state,
      };
  }
}

const LandingScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    products: products,
  });

  console.log(products);

  return (
    <div className="container">
      <div className="product_container">
        <h2>Products</h2>
        {state.products.map((elem) => {
          return (
            <ProductCard
              key={elem.id}
              name={elem.name}
              price={elem.price}
              id={elem.id}
              quatitySelected={elem.quatitySelected}
              dispatch={dispatch}
            />
          );
        })}
      </div>
      <div className="cart_container">
        <div className="card_container">
         <h2>Cart</h2>
          {state.products
            .filter((elem) => {
              if (elem.quatitySelected > 0) {
                return true;
              }
              return false;
            })
            .map((elem) => {
              return <CartCard key={elem.id} name = {elem.name} price = {elem.price} quatitySelected = {elem.quatitySelected} />;
            })}
        </div>
        <div className="total_card">
          <p>Total : </p>
          <p>
            {
                state.products.reduce((accu, curr)=>{
                    return accu + (curr.quatitySelected * curr.price)
                },0)
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;