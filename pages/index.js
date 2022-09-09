import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Link from "next/link";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
          <title>Ninja List | Home</title>
          <meta name='keywords' content='ninjas'/>
      </Head>
      <div>
        <h1 className={styles.title}>Welcome</h1>
        <p className={styles.text}>lorem ipsum</p>
        <p className={styles.text}>lorem ipsum ajbksnckbkcb jkasb cjkacja</p>
        <Link href='/ninjas'><a className={styles.btn}>See Ninja Listing</a></Link>
  
      </div>
    </>
  )
}
