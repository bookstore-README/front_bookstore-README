import { ReactNode, useEffect } from 'react';
import ScrollToTopButton from '../button/scrollToTopButton';
import { useAtom } from 'jotai';
import { pointVisibleAtom } from '@/store/state';
import useInfinite from '@/hooks/useInfinite';
import MainLayout from './mainLayout';

interface MyOrderPageLayoutProps {
  overview: ReactNode;
  orderDate?: ReactNode;
  main: ReactNode;
}

function MyOrderPageLayout({
  overview,
  orderDate,
  main,
}: MyOrderPageLayoutProps) {
  const [ref, isIntersecting] = useInfinite();
  const [, setPointVisible] = useAtom(pointVisibleAtom);

  useEffect(() => {
    setPointVisible(isIntersecting);
  }, [isIntersecting]);
  return (
    <MainLayout>
      <div role="container">
        <div className="mx-auto flex max-w-[1080px] flex-col items-center px-40 py-60">
          <div
            role="overview"
            className="mb-40 w-[1080px] mobile:w-330 tablet:w-[688px]">
            {overview}
          </div>
          <div role="order-date" className="mb-20">
            {orderDate}
          </div>
          <div role="content">
            <div className="h-1" ref={ref} />
            {main}
            <ScrollToTopButton />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default MyOrderPageLayout;
