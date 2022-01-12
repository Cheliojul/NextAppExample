import type { NextPage } from 'next';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import useSWR from 'swr';
import { FlatList } from '../components/FlatList';
import type { FlatType } from '../lib/types/entities';

type HomePageProps = {
  preloadedFlatList: FlatType[];
};
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const Home: NextPage<HomePageProps> = () => {
  const { data, error } = useSWR('/api/getFlats', fetcher);
  if (error) return <div>Failed to load flats</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div className={styles.container}>
      <Head>
        <title>Flat Power Map</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className="flats-container">
          <FlatList flats={data} />
        </div>
      </body>
    </div>
  );
};
export default Home;
