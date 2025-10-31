import { ProductList } from "../modules/ProductList";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store } from "../store/store";

describe("ProductList component", () => {
  const initialState = {
    products: {
      products: [
        {
          id: 1,
          name: "Brocolli - 1 Kg",
          price: 120,
          image:
            "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg",
          category: "vegetables",
        },
        {
          id: 2,
          name: "Cauliflower - 1 Kg",
          price: 60,
          image:
            "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cauliflower.jpg",
          category: "vegetables",
        },
        {
          id: 3,
          name: "Cucumber - 1 Kg",
          price: 48,
          image:
            "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cucumber.jpg",
          category: "vegetables",
        },
      ],
      isLoading: false,
      error: null,
    },
    cart: {
      cart: [],
    },
  };

  it("должен рендерить продукты из стора", () => {
    const testStore = store(initialState);
    render(
      <MantineProvider>
        <Provider store={testStore}>
          <ProductList />
        </Provider>
      </MantineProvider>,
    );

    expect(screen.getByText(/brocolli/i)).toBeInTheDocument();
  });

  it("не должен ничего рендерить с пустым стором", () => {
    render(
      <MantineProvider>
        <Provider store={store()}>
          <ProductList />
        </Provider>
      </MantineProvider>,
    );

    const loader = screen.getByTestId("loader");

    expect(loader).toBeInTheDocument();
  });
});
