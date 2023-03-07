import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ datas }) {
  return (
    <div>
      <Head>
        <title>Jim Hoopes * Software Developer</title>
        <meta name="description" content="A personal Portfolio website for a full-stack developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <img />
          <Link id="link" href="/" passHref>
            Hme
          </Link>
          <Link id="link" href="/about-me" passHref>
            About me
          </Link>
          <Link id="link" href="/events" passHref>
            Events
          </Link>
          <Link id="link" href="/code" passHref>
            Code
          </Link>
        </nav>
      </header>

      <main className={styles.main}>
        {datas?.map(ev => (
          <Link key={ev.id} href={`/events/${ev.id}`} passHref>
              <Image width={300} height={300} alt={ev.title} src={ev.image}/>
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
          </Link>
        ))}
        
      </main>
      <footer className={styles.footer}>


      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  const { events_categories } = await import('../data/companydata.json');
  // this is how to check what is coming in:
  console.log(events_categories);

  // if it were an external api: 
  // const res = await fetch('URL');
  // const data = await res.json();
  return {
    props: {
      datas: events_categories,
    },
  };
}

// console.log(events_categories);


/**
* // Synconous function:
*  export function getServerSideProps() {
*    return {
*        props: {
*            title: "Hello everyone!",
*        }
*    }
*  }
 * 
 * 
 */