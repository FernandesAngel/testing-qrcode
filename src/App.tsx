import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { AppProvider } from "./contexts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppProvider>
          <AppRoutes />

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </AppProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
}
