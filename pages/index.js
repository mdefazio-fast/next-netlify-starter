import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <br>
      <form>
        <fast-checkout-button id="fast-checkout-button"></fast-checkout-button>
      </form>
      <br>
<span style="color: black; font-size: 14px;"><strong>The world’s fastest checkout!</strong> | <a href="https://www.fast.co/home" rel="nofollow noopener" style="text-decoration:underline;" target="_blank">Learn More</a></span>
      </main>
    
      <Footer />
    </div>
  )
}
