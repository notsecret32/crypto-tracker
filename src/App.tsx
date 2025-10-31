import { Provider } from "react-redux";
import { RouterProvider } from "react-router/dom";

import { store } from "@/store";
import { router } from "@/pages/router";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
