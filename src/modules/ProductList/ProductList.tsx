import { Title, Loader } from "@mantine/core";
import s from "./ProductList.module.scss";
import classNames from "classnames/bind";
import { ProductCard } from "../../components/ProductCard";
import { useEffect } from "react";
import { fetchProducts } from "../../reducers/ProductsThunk";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";

const cx = classNames.bind(s);

export function ProductList() {
  const products = useTypedSelector((store) => store.products.products);
  const dispatch = useTypedDispatch();
  const isLoading = useTypedSelector((state) => state.products.isLoading);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <main className={cx("main-content")}>
      {isLoading ? (
        <Loader
          data-testid="loader"
          color="#54B46A"
          size="xl"
          type="bars"
          pos="absolute"
          mx="auto"
          left={0}
          right={0}
        />
      ) : (
        <>
          <Title order={2} mb={49} fz={32}>
            Catalog
          </Title>
          <div className={cx("main-content__product-list")}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </main>
  );
}
