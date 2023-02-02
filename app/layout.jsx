"use client";
import "./globals.css";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";
import { Oswald } from "@next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function RootLayout({ children }) {
  useEffect(() => {
    hotjar.initialize(3346375, 6);
  }, []);
  return (
    <html lang="en">
      <head />
      <body className={oswald.className}>
        <AnimatePresence>
          <motion.div
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.75,
            }}
            variants={{
              initialState: {
                opacity: 0,
              },
              animateState: {
                opacity: 1,
              },
              exitState: {},
            }}
          >
            {children}
            <Analytics />
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
