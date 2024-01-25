import { Inter } from 'next/font/google';
import { countAtom } from '@/store/count';
import { useAtom } from 'jotai';

const inter = Inter({
  subsets: ['latin'],
});

export default function Home() {
  const [count, setCount] = useAtom(countAtom);

  const handleAddCount = () => {
    setCount((prev) => prev + 1);
  };
  const handleMinusCount = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}>
      <button onClick={handleAddCount}>count++</button>
      <button onClick={handleMinusCount}>count--</button>
      {count}
    </main>
  );
}
