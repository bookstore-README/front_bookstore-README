import Link from 'next/link';
import Image from 'next/image';
import IconProfile from '@/public/icons/ProfileIcon.svg';
function SignInButton() {
  return (
    <Link href="/signin">
      <div className="cursor-pointer text-15 mobile:hidden">로그인</div>
      <div className="cursor-pointer tablet:hidden pc:hidden">
        <Image src={IconProfile} width={16} height={16} alt="로그인 버튼" />
      </div>
    </Link>
  );
}

export default SignInButton;
