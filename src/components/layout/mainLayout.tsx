import Header from '@/components/header/index';
import { ReactNode, useEffect, useState } from 'react';
import ScrollToTopButton from '@/components/button/scrollToTopButton';
import useInfinite from '@/hooks/useInfinite';
import { useAtom } from 'jotai';
import { pointVisibleAtom } from '@/store/state';
import { useSession } from 'next-auth/react';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const [ref, isIntersecting] = useInfinite();
  const [, setPointVisible] = useAtom(pointVisibleAtom);
  const { status } = useSession();

  useEffect(() => {
    setPointVisible(isIntersecting);
  }, [isIntersecting]);

  return (
    <>
      <Header isLoggedIn={status === 'authenticated'} numItemsOfCart={1} />
      <div className="relative grid auto-rows-auto place-items-center">
        <div className="h-20 w-300" ref={ref} />
        {children}
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default MainLayout;
