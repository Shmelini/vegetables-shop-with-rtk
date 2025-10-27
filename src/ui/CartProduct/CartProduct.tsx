import { Image, Text, Group } from "@mantine/core";
import { Stepper } from "../Stepper";
import type { CartProductType } from "../../types/types";
import s from "./CartProduct.module.scss";
import classNames from "classnames/bind";
import { useTypedDispatch } from "../../hooks/redux";
import { changeCount } from "../../reducers/CartSlice";

const cx = classNames.bind(s);

type CartProductProps = {
  product: CartProductType;
};

export function CartProduct({ product }: CartProductProps) {
  const splitedName = product.name.split("- ");
  const dispatch = useTypedDispatch();

  function handleProductCountChange(increase: boolean) {
    dispatch(changeCount({ product, increase }));
  }

  return (
    <li className={cx("cart-item")}>
      <div className={cx("cart-item__container")}>
        <Image src={product.image} w={64} h={64} mr={12} />
        <div className={cx("cart-item__text")}>
          <Group>
            <Text size="md" c="rgba(33, 37, 41, 1)">
              {splitedName[0]}
            </Text>
            <Text size="sm" c="dimmed" tt="lowercase">
              {splitedName[1]}
            </Text>
          </Group>
          <div>
            <Text fz={20} mt={6}>
              $ {product.price}
            </Text>
          </div>
        </div>
      </div>
      <Stepper count={product.count} handleClick={handleProductCountChange} />
    </li>
  );
}
