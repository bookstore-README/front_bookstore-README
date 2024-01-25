import CartButton from '@/components/header/cartButton';
import SearchInput from '@/components/header/searchInput';
import MyPageButton from '@/components/header/myPageButton';
import SignInButton from '@/components/header/signInButton';
import SignOutButton from '@/components/header/signOutButton';
import SignUpButton from '@/components/buttons/signUpButton';
import HeaderLayout from '@/containers/HeaderLayout';

export interface HeaderProps {
  isLoggedIn: boolean;
  numItemsOfCart?: number;
}

function Separator() {
  return (
    <div className="mobile:hidden inline-block border-r w-1 h-14 border-gray-1" />
  );
}

// 로그인하지 않은 상태의 헤더
function NonLoggedInHeader() {
  return (
    <div
      className="flex tablet:mx-90 justify-between min-w-fit max-w-full items-center h-50 mx-16
        tablet:h-100 pc:h-100 pc:mx-110">
      <div className="text-18 pc:text-24 text-green font-bold tablet:text-24">
        Read Me
      </div>
      <SearchInput />
      <div className="inline-flex items-center tablet:gap-40 pc:gap-40">
        <SignInButton />
        <Separator />
        <SignUpButton />
      </div>
    </div>
  );
}

// 로그인한 상태의 헤더
function LoggedInHeader({ numItemsOfCart }: { numItemsOfCart: number }) {
  return (
    <div
      className="flex tablet:mx-90 justify-between min-w-fit max-w-full items-center h-50 mx-16
        tablet:h-100 pc:h-100 pc:mx-110">
      <div className="text-18 pc:text-24 text-green font-bold tablet:text-24">
        Read Me
      </div>
      <SearchInput />

      <div className="inline-flex gap-10 tablet:gap-26 pc:gap-26 items-center">
        <SignOutButton />
        <Separator />
        <CartButton numItemsOfCart={numItemsOfCart} />
        <MyPageButton />
      </div>
    </div>
  );
}

// 헤더 컴포넌트
function Header({ isLoggedIn, numItemsOfCart }: HeaderProps) {
  return isLoggedIn && numItemsOfCart ? (
    <HeaderLayout>
      <LoggedInHeader numItemsOfCart={numItemsOfCart} />
    </HeaderLayout>
  ) : (
    <HeaderLayout>
      <NonLoggedInHeader />
    </HeaderLayout>
  );
}

export default Header;
