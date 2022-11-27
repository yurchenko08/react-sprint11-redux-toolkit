import { Provider } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </Provider>
  );
}

export default App;
