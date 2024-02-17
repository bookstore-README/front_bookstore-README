import Header from '@/components/header';
import GenreSkeleton from '@/components/skeleton/customSkeleton/genreSkeleton';
import SkeletonPreviewBookInfo from '@/components/skeleton/previewBookInfo/skeleton';
import { CustomPageContentsLayout } from '@/pages/custom';
import React from 'react';

function CustomSkeleton() {
  const arr = Array.from({ length: 20 }).map((_, index) => index);
  return (
    <div className="flex-1">
      <div className="flex w-full flex-col items-center">
        <Header isLoggedIn={true} />
        <div className="w-full max-w-[1200px]">
          <CustomPageContentsLayout>
            <div
              className="no-scrollbar mb-40 mt-30 flex w-full flex-wrap gap-8
                  mobile:flex-nowrap mobile:overflow-auto">
              {arr.map((_, index) => {
                return <GenreSkeleton key={index} />;
              })}
            </div>
            <div
              className="grid grid-cols-5 gap-x-30 gap-y-40 mobile:grid-cols-2 mobile:gap-x-10
                  mobile:gap-y-30 mobile:pr-15 tablet:grid-cols-4 tablet:gap-x-20">
              {arr.map((_, index) => (
                <div
                  key={index}
                  className="h-291 w-192 animate-pulse rounded-[5px]  border border-gray-1 bg-gray-1 mobile:h-228 mobile:w-160 tablet:h-239 tablet:w-160"></div>
              ))}
            </div>
          </CustomPageContentsLayout>
        </div>
      </div>
    </div>
  );
}

export default CustomSkeleton;
