import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Cart: NextPage = () => {
    return(
        <div className={styles.container}>
            <Head>
                <title>Card</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Cart page
                </h1>
            </main>

            <footer className={styles.footer}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </footer>
        </div>
    )
}

export default Cart