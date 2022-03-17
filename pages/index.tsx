import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../containers/layout/Layout'

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Cryptocurrency Exchange</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <h1>Hello World!</h1>
    </Layout>
  </div>
)

export default Home
