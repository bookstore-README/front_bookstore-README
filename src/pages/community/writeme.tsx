import CommunityLayout from '@/components/layout/communityLayout';
import { useSession } from 'next-auth/react';

function WriteMe() {
  const { data: session } = useSession();
  if (session === undefined) return null;

  return (
    <CommunityLayout
      isSelected="내 글 보기"
      kebab={true}
      memberId={session?.memberId}
    />
  );
}

export default WriteMe;
