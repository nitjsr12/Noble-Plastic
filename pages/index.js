/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HomeBanner from '../components/HomeBanner';
import Header from '../components/Header';
import Aboutinside  from '../components/Aboutinside';
import Unique from '@/components/Unique';
import Imagesecion from '@/components/Imagesecion';
import Counter from '@/components/Counter';
import Logoslider from '@/components/Logoslider';
import Footer from '@/components/Footer';
import Script from 'next/script';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
   
      </Head>
      
        <Header/>
        <HomeBanner/>
        <Aboutinside/>
        <Unique/>
        <Imagesecion/>
        <Counter/>
        <Logoslider/>
        <Footer/>
      
    </>
  )
}
