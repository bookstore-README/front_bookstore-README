import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

import { SocialType, getSocialLogin } from '@/api/social';

function SocialPage() {
  const router = useRouter();
  const { socialType, code } = router.query;
  const myType: SocialType =
    socialType === 'kakao'
      ? 'KAKAO'
      : socialType === 'google'
        ? 'GOOGLE'
        : 'NAVER';

  const { data, isLoading, isError } = useQuery({
    queryKey: ['social-login'],
    queryFn: () => getSocialLogin(myType, code as string),
    enabled: !!code,
    retry: 3,
  });

  const handleSocialLogin = async () => {
    console.log(data);
    if (data) {
      let token = data ? data?.data.Authentication.substr(7) : '';
      const result = await signIn('social-credentials', {
        email: data?.data.email,
        socialType: myType,
        memberId: data?.data.memberId,
        accessToken: token,
        redirect: false,
        callbackUrl: '/',
      });
      router.push('/');
    }
    if (isError && !isLoading) {
      router.push('/signin');
    }
  };

  useEffect(() => {
    handleSocialLogin();
  }, [data]);

  return;
}

export default SocialPage;
