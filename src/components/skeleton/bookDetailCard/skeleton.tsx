
import { SKELETON_COMMON_STYLE } from 'src/constants/style/skeletonCommonStyle';


function SkeletonBookDetailCard() {
  return (
    <section className="flex justify-start gap-20 items-start mobile:flex-col mobile:flex-center">
      <article className={`${SKELETON_COMMON_STYLE} rounded-[10px] w-[525px] h-[757px] tablet:w-[334px] tablet:h-[526px] mobile:w-[330px] mobile:h-[550px]`}>
      </article>

      <article className="flex flex-col gap-40 mobile:gap-30 justify-start items-start mobile:w-full">
        <div className='flex flex-col gap-4'>
          <div className={`${SKELETON_COMMON_STYLE} h-22 w-100`}></div>
          <div className={`${SKELETON_COMMON_STYLE} h-30 w-355`}></div>
          <div className={`${SKELETON_COMMON_STYLE} h-22 w-175`}></div>
          <div className='bg-gray-5 w-full h-[1px]'></div>
          <div className={`${SKELETON_COMMON_STYLE} h-19 w-300`}></div>
          <div className={`${SKELETON_COMMON_STYLE} h-30 w-240`}></div>
          <div className={`${SKELETON_COMMON_STYLE} h-38 w-130`}></div>
        </div>
        <div className={`${SKELETON_COMMON_STYLE} rounded-[10px] pc:w-[525px] w-full h-154 mobile:h-130 `}>

        </div>
      </article>

    </section>
  );
}

export default SkeletonBookDetailCard;

