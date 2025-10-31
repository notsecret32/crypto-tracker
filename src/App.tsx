import { ThemeProvider } from "@/components/theme-provider";
import { ThemeSwitch } from "@/components/theme-switch";

interface AppProps {
  children: React.ReactNode;
}

function App({ children }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ThemeSwitch />
      {children}
    </ThemeProvider>
  );
}

export default App;
