/* 카테고리 페이지의 사이드바 '국내 외국' 선택 버튼 */

import Link from 'next/link';

function classNames<T>(...classes: Array<T>) {
  return classes.filter(Boolean).join(' ');
}

function StyledLink({
  title = '',
  link = '/',
  isLeft = true,
  isSelected = true,
}) {
  const SidebarLinkClassNames = classNames(
    `text-18 block relative mobile:text-[13px] font-bold mobile:font-light
    mobile:py-8 mobile:px-12`,
    isSelected
      ? 'text-gray-7 mobile:text-green mobile:border-[1px] mobile:border-green'
      : 'text-gray-2 mobile:text-black mobile:border-[1px] mobile:border-gray-1',
    isLeft
      ? 'pr-12 mobile:rounded-l-lg -right-1'
      : 'pl-12 mobile:rounded-r-lg -left-1',
  );

  return (
    <Link className={SidebarLinkClassNames} href={link}>
      {title}
    </Link>
  );
}

function SidebarRegionButton({ isDomestic = true }) {
  return (
    <div className="flex justify-start items-center mobile:flex-center">
      <StyledLink
        title="국내"
        link="/domestic/"
        isLeft={true}
        isSelected={isDomestic}
      />
      <div className="bg-gray-1 h-11 mobile:bg-green mobile:h-37 relative w-[1px] z-10"></div>
      <StyledLink
        title="외국"
        link="/foreign/"
        isLeft={false}
        isSelected={!isDomestic}
      />
    </div>
  );
}

export default SidebarRegionButton;
