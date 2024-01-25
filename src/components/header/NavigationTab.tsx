import CategoryButton from './categoryButton';
import Link from 'next/link';
// 카테고리를 포함한 NavigationTab
function NavigationTab() {
  return (
    <div className="flex items-center border-gray-3 border-y w-full h-40 tablet:h-70 pc:h-70">
      <div className="mx-16 tablet:mx-90 pc:mx-110">
        <CategoryButton />
      </div>
      <div
        className="text-14 tablet:text-16 pc:text-16 inline-flex gap-18 pc:gap-40 tablet:gap-30
          pc:mx-[3%]">
        <Link href="/bestsellers"> 베스트</Link>
        <Link href="/latest"> 신간</Link>
        <Link href="/custom">맞춤도서</Link>
        <div className="inline-block border-r w-1 h-14 border-gray-1" />
        <Link href="/community"> 커뮤니티</Link>
      </div>
    </div>
  );
}
export default NavigationTab;
