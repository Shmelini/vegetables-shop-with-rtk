import { CartPopup } from "../components/CartPopup";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store } from "../store/store";

describe("CartPopup component", () => {
  it("должен отображать пустую корзину с пустым стором", () => {
    render(
      <MantineProvider>
        <Provider store={store()}>
          <CartPopup active={true} />
        </Provider>
      </MantineProvider>,
    );
    const emptyCart = screen.getByText(/You cart is empty!/i);

    expect(emptyCart).toBeInTheDocument();
  });
  it("при переключении active должен меняться класс", () => {
    const { rerender } = render(
      <MantineProvider>
        <Provider store={store()}>
          <CartPopup active={false} />
        </Provider>
      </MantineProvider>,
    );

    const test = screen.getByTestId("cart-popup");
    expect(test.className).not.toMatch("popup-container--active");

    rerender(
      <MantineProvider>
        <Provider store={store()}>
          <CartPopup active={true} />
        </Provider>
      </MantineProvider>,
    );
    expect(test.className).toMatch("popup-container--active");
  });
});
