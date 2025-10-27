import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./reset.css";
import "./ui/fonts/fonts.css";
import { App } from "./pages/App";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store } from "./store/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <Provider store={store()}>
        <App />
      </Provider>
    </MantineProvider>
  </StrictMode>,
);
