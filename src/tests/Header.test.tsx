import { Header } from "../modules/Header";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store } from "../store/store";

describe("Header component", () => {
  render(
    <MantineProvider>
      <Provider store={store()}>
        <Header />
      </Provider>
    </MantineProvider>,
  );

  it("компонет Header должен рендериться", () => {
    const shopLogo = screen.getByAltText(/vegetable shop/i);
    const cartElements = screen.getAllByText(/cart/i);

    expect(shopLogo).toBeInTheDocument();
    expect(cartElements[0]).toBeInTheDocument();
    expect(cartElements[1]).toBeInTheDocument();
  });
});
