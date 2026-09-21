import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import App from "./App.jsx";
import CartContextProvider from "./Context/CartContext/CartContext.jsx";
import TokenContextProvider from "./Context/TokenContext/TokenContext.jsx";
import { Provider } from "react-redux";
import { store } from "./Redux/store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <CartContextProvider>
      <TokenContextProvider>
        <App />
      </TokenContextProvider>
    </CartContextProvider>
    </Provider>
  </StrictMode>
);
