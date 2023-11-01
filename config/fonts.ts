import { Fira_Code as FontMono, Inter as FontSans, Playfair_Display as FontDisplay } from "next/font/google"


export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontDisplay = FontDisplay({
  subsets: ["latin"],
  variable: "--font-display",
});