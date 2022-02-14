import { useContext } from "react";
import Navbar from "./Navbar";
import ShoppingCart from "./ShoppingCart";
import { CartContext } from "./CartContext";

function App() {
  const mainData = useContext(CartContext);
  const { state } = mainData;


  return (
    <>
      {state.isLoading ? <section> <h1 className="title">loading...</h1> <div className="loading"></div></section> : <><Navbar products={state.products} productQuantity={state.productQuantity} />
        <ShoppingCart products={state.products} totalAmount={state.totalAmount} /></>}

    </>
  );
}

export default App;
