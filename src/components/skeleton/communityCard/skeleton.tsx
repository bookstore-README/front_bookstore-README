import { SKELETON_COMMON_STYLE } from 'src/constants/style/skeletonCommonStyle';

function SkeletonCommunityCard() {
  return (
    <div
      role="card-container"
      className="relative flex h-439 w-347 animate-pulse flex-col justify-between rounded-lg border-2 border-gray-1
        p-20 mobile:w-330 tablet:w-334">
      <div role="user-info-container" className="flex items-center justify-start">
        <div
          role="user-profileImg"
          className={`${SKELETON_COMMON_STYLE} relative h-48 w-48`}
        />
        <div className="flex flex-col justify-start py-5 pl-12 gap-10">
          <div
            role="nickName"
            className={`${SKELETON_COMMON_STYLE} h-12 w-62`}
          />
          <div
            role="createDate"
            className={`${SKELETON_COMMON_STYLE} h-10 w-62`}
          />
        </div>
      </div>
      <div
        role="bookCover"
        className={`${SKELETON_COMMON_STYLE} h-[108px] w-full`}
      />
      <div role="bookTitle-content-container" className="flex flex-col gap-5">
        <div
          role="bookTitle"
          className={`${SKELETON_COMMON_STYLE} h-30 w-full`}
        />
        <div role="content-container" className="flex flex-col gap-7">
          <div
            role="content"
            className={`${SKELETON_COMMON_STYLE} h-18 w-full`}
          />
          <div
            role="content"
            className={`${SKELETON_COMMON_STYLE} h-18 w-full`}
          />
          <div
            role="content"
            className={`${SKELETON_COMMON_STYLE} h-18 w-full`}
          />
        </div>
      </div>
      <div className="flex-center gap-8">
        <div className={`${SKELETON_COMMON_STYLE} h-25 w-45 tablet:h-24`} />
        <div className={`${SKELETON_COMMON_STYLE} h-25 w-45 tablet:h-24`} />
        <div className={`${SKELETON_COMMON_STYLE} h-25 w-45 tablet:h-24`} />
        <div className={`${SKELETON_COMMON_STYLE} h-25 w-45 tablet:h-24`} />
        <div className={`${SKELETON_COMMON_STYLE} h-25 w-45 tablet:h-24`} />
      </div>
    </div>
  );
}

export default SkeletonCommunityCard;
