import { Card, Image, Text, Group } from "@mantine/core";
import { Stepper } from "../../ui/Stepper";
import s from "./ProductCard.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import { MainButton } from "../../ui/MainButton";
import type { Product } from "../../types/types";
import { useTypedDispatch } from "../../hooks/redux";
import { addToCart } from "../../reducers/CartSlice";

const cx = classNames.bind(s);

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const [prodCount, setProdCount] = useState(1);
  const dispatch = useTypedDispatch();

  const splitedName = product.name.split("- ");

  function handleStepperChange(increase: boolean) {
    if (increase) {
      setProdCount((prev) => prev + 1);
    } else if (!increase) {
      prodCount === 0 ? setProdCount(0) : setProdCount((prev) => prev - 1);
    }
  }

  function handleCartAddProduct() {
    dispatch(addToCart({ product, count: prodCount }));
    setProdCount(1);
  }

  return (
    <div className={cx("product-card")}>
      <Card padding={16} w={302} h={414} radius={24}>
        <Image src={product.image} w={276} h={276} />
        <Group mb={16}>
          <Group>
            <Text size="md" c="rgba(33, 37, 41, 1)">
              {splitedName[0]}
            </Text>
            <Text size="sm" c="dimmed" tt="lowercase">
              {splitedName[1]}
            </Text>
          </Group>
          <Stepper count={prodCount} handleClick={handleStepperChange} />
        </Group>
        <Group gap={0} justify="space-between">
          <Text fz={20}>$ {product.price}</Text>
          <MainButton
            btnType="card"
            onClick={() => {
              handleCartAddProduct();
            }}
          />
        </Group>
      </Card>
    </div>
  );
}
