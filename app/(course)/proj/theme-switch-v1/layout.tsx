import './_styles/theme.css';
import { ThemeProvider } from './_context/theme';

export default function ThemeSwitchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
