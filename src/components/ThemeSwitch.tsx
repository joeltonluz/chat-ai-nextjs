'use client'

import { useTheme, ThemeProvider } from "next-themes";
import { Switch } from "./ui/switch";

interface ThemeSwitchProps {
  darkMode: boolean
}

export function ThemeSwitch() {
  const { setTheme,systemTheme } = useTheme();

  return (
    <div>
      {/* <Switch checked={systemTheme === 'dark'} onCheckedChange={(e) => setTheme(e.target.value ? 'dark' : 'light')} />*/}
    </div>
  )
}