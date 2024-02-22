import Error from '@/components/container/error';

function ServerError() {
  return <Error error={500} />;
}

export default ServerError;
