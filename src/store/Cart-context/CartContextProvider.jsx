import React from "react";
import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCart = {
  items: [],
};

const cartReducer = (state, action) => {
  if (action.type === "Add") {
    const itemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[itemIndex];
    let updatedItems;

    if (existingItem) {
      alert("Item is already in the cart");
      return state;
    } else {
      updatedItems = state.items.concat(action.item);
      return {
        items: updatedItems,
      };
    }
  }

  if (action.type === "Remove") {
    let updatedItems = state.items.filter((item) => item.id !== action.id);
    return {
      items: updatedItems,
    };
  }

  return defaultCart;
};

const CartContextProvider = (props) => {
  const [cartState, dipatchCartAction] = useReducer(cartReducer, defaultCart);

  const addItemHandler = (item) => {
    dipatchCartAction({ type: "Add", item: item });
  };
  const deleteItemHandler = (id) => {
    dipatchCartAction({ type: "Remove", id: id });
  };

  const cart = {
    items: cartState.items,
    addItem: addItemHandler,
    deleteItem: deleteItemHandler,
  };

  return (
    <CartContext.Provider value={cart}>{props.children}</CartContext.Provider>
  );
};

export default CartContextProvider;
