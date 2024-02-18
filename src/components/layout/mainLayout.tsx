import Header from '@/components/header/index';
import { ReactNode, useEffect } from 'react';
import ScrollToTopButton from '@/components/button/scrollToTopButton';
import useInfinite from '@/hooks/useInfinite';
import { useAtom } from 'jotai';
import { pointVisibleAtom } from '@/store/state'; // basketItemList 추가
import { useSession } from 'next-auth/react';
import useGetBasKetQuery from '@/hooks/useGetBasKetQuery';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const [ref, isIntersecting] = useInfinite();
  const [, setPointVisible] = useAtom(pointVisibleAtom);
  const { status } = useSession();
  const { data } = useGetBasKetQuery();

  useEffect(() => {
    setPointVisible(isIntersecting);
  }, [isIntersecting]);

  return (
    <>
      <Header
        isLoggedIn={status === 'authenticated'}
        numItemsOfCart={data?.length} // basketItems의 길이로 업데이트
      />
      <div className="relative grid auto-rows-auto place-items-center">
        <div className="h-20 w-300" ref={ref} />
        {children}
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default MainLayout;
