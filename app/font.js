import { Road_Rage, Roboto } from "next/font/google";
import localFont from "next/font/local";

export const roadRage = Road_Rage({
    subsets: ["latin"],
    weight: '400',
    variable: "--font-roadRage",
  });
  
  export const roboto = Roboto({
    subsets: ["latin"],
    weight: '400',
    variable: "--font-roboto",
  });

export const jejuMyeongjo = localFont({ src: './fonts/JejuMyeongjo-Regular.ttf' })