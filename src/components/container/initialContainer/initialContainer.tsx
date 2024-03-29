import LoadingSpinner from '@/components/chip/loadingSpinner';
import useGetCategory from '@/hooks/useGetCategory';
import { Router } from 'next/router';
import { useEffect, useState } from 'react';

function InitialContainer() {
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
  };
  const end = () => {
    setLoading(false);
  };

  useEffect(() => {
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  useGetCategory();
  return <>{loading && <LoadingSpinner />}</>;
}

export default InitialContainer;
