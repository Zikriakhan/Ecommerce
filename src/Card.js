import React from "react";
import { CartProvider, useCart } from "react-use-cart";

function Card() {
  const {
    items,
    isEmpty,
    cartTotal,
    totalUniqueItems,
    totalItems,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1 className="text-center">Your Cart in Empty</h1>;
  return (
    <section className="py-4 container ">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>
            Cart ({totalUniqueItems} total items:({totalItems}))
            <table className="table table-light table-hover m-0">
              <tbody>
                {items.map((items, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img src={items.img} style={{ height: "6rem" }} />
                      </td>
                      <td>{items.title}</td>
                      <td> ${items.price}</td>
                      <td>Quantity {items.quantity}</td>
                      <td>
                        <button
                          className="btn btn-info ms-2"
                          onClick={() => {
                            updateItemQuantity(items.id, items.quantity - 1);
                          }}
                        >
                          -
                        </button>
                        <button
                          className="btn btn-info ms-2"
                          onClick={() => {
                            updateItemQuantity(items.id, items.quantity + 1);
                          }}
                        >
                          +
                        </button>
                        <button
                          className="btn btn-danger ms-2"
                          onClick={() => {
                            removeItem(items.id);
                          }}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </h5>
        </div>
        <div className="col-auto ms-auto">
          <h2> Total Price is : {cartTotal} </h2>
        </div>
        <div className="col-auto">
          <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
            Clear Card
          </button>
          <button className="btn btn-primary m-2">Buy Now</button>
        </div>
      </div>
    </section>
  );
}

export default Card;
