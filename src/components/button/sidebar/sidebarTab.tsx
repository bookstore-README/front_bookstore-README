import Link from 'next/link';
import { useAtom } from 'jotai';

import { CategoryListAtom } from '@/store/state';
import { SidebarProps } from '@/types/sidebarType';
import useCheckCategoryUrl from '@/hooks/useCheckCategoryUrl';

function SidebarTab({ pageName }: SidebarProps) {
  const [categoryList] = useAtom(CategoryListAtom);
  const { mainId, subId, categoryId } = useCheckCategoryUrl();

  return (
    <div
      className="absolute z-20 flex flex-col gap-12 bg-white pt-20
        mobile:right-0 mobile:top-65 mobile:h-[468px] mobile:w-270
        mobile:flex-wrap mobile:gap-5 mobile:rounded-[10px] mobile:border-[1px] mobile:border-gray-1 mobile:p-15">
      <Link
        className={`block text-[13px] ${subId ? 'text-gray-2' : 'font-bold text-green'}`}
        href={`/${mainId === 0 ? 'domestic' : 'foreign'}/${pageName ?? ''}`}>
        전체보기
      </Link>
      {categoryList &&
        (categoryList[mainId === 0 ? 'domestic' : 'foreign'] ?? []).map(
          (el, ind) => {
            return (
              <Link
                className={`block text-[13px] ${
                  el.subId === subId ? 'font-bold text-green' : 'text-gray-2'
                }`}
                href={`/${mainId === 0 ? 'domestic' : 'foreign'}${el.link}${pageName ? `/${pageName}` : ''}`}
                key={el?.categoryId}>
                {el?.subName}
              </Link>
            );
          },
        )}
    </div>
  );
}

export default SidebarTab;
