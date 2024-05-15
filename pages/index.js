import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage({ posts }) {
  const clickHandler = () => {
    alert('BTN CLICKED....');
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="section">
        <div className="section-center">
          <h1>Home Page</h1>
          <Link className="btn" href="/about">
            About
          </Link>
          <button className="btn checking-ssr-btn">Click me</button>
        </div>
      </section>
    </>
  );
}
