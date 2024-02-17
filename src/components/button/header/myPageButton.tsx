import Image from 'next/image';
import ProfileIcon from '@/public/icons/ProfileIcon.svg';
import KebabDropDownButton from '@/components/button/kebab/kebabDropDownButton';
import useShowDropDown from '@/hooks/useShowDropDown';
import { MutableRefObject, useRef } from 'react';
import router from 'next/router';
import { signOut } from 'next-auth/react';

function MyPageButton() {
  const ref = useRef() as MutableRefObject<HTMLImageElement>;
  const [showOptions, setShowOptions] = useShowDropDown(ref, false);

  const handleKebabClick = () => {
    setShowOptions(!showOptions);
  };

  const handleMyPageClick = () => {
    router.push('/mypage/order');
  };

  const handleLogoutClick = () => {
    signOut({callbackUrl:'/signin'})
  };

  return (
    <div className="flex items-center">
      <div className="mobile:hidden">
        <Image
          src={ProfileIcon}
          alt="마이페이지 버튼"
          onClick={handleMyPageClick}
          ref={ref}
          width={21}
          height={24}
        />
      </div>
      <div className="tablet:hidden pc:hidden">
        <Image
          src={ProfileIcon}
          alt="마이페이지 버튼"
          onClick={handleKebabClick}
          ref={ref}
          width={12}
          height={14}
        />

        {showOptions && (
          <KebabDropDownButton
            title1={'마이페이지'}
            title2="로그아웃"
            color="black"
            onClickTitle1={handleMyPageClick}
            onClickTitle2={handleLogoutClick}
          />
        )}
      </div>
    </div>
  );
}

export default MyPageButton;
