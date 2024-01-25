import Image from 'next/image';
import IconProfile from '@/public/icons/ProfileIcon.svg';
function MyPageButton() {
  return (
    <button className='relative w-16 h-16 tablet:w-24 tablet:h-24 pc:w-24 pc:h-24'>
      <Image src={IconProfile} fill alt="마이페이지 버튼" />
    </button>
  );
}

export default MyPageButton;
