

import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Cartelera from "@/components/Cartelera";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      
     <Cartelera />
    
    </main>
  );
}
