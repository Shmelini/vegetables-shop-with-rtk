import "@mantine/core/styles.css";
import "./App.scss";
import { Header } from "../../modules/Header";
import { ProductList } from "../../modules/ProductList";

export function App() {
  return (
    <>
      <Header />
      <ProductList />
    </>
  );
}
