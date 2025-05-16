"use client";

import { useEffect} from "react";
import styles from "./page.module.css";


export default function Home() {
  useEffect(() => {
    const getData = async () => {
      try{
      const query = await fetch("https://jsonplaceholder.typicode.com/users");
      const response = await query.json();
      console.log("response hello api", response);
      }
      catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Sorsogon Community Innovation Labs</h1>
      </main>
    </div>
  );
}