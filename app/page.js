import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Fly.io test repo</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={200} height={200} />
    </div>
  );
}
