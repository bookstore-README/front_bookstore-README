import Image from 'next/image';
import LogoIcon from '@/public/icons/MainLogoIcon.svg';
import Link from 'next/link';
import Spacing from '@/components/container/spacing/spacing';

function Error({ error }: { error: number }) {
  return (
    <div className="flex-center h-screen w-screen flex-col">
      <div className="text-32 flex flex-col items-center justify-end gap-30 font-bold text-primary">
        <Image src={LogoIcon} alt="로고" width={150} height={90} />
        {error} ERROR
      </div>
      <Spacing height={[8, 8, 8]} />
      <div className="flex flex-col items-center justify-between gap-4 text-16 font-normal">
        <span>페이지를 찾을 수 없습니다.</span>
        <span>올바른 URL을 입력하였는지 확인해주세요.</span>
      </div>
      <Spacing height={[30, 30, 30]} />
      <Link
        className="flex-center h-50 w-256 rounded-[5px] border border-primary bg-white text-14
            text-primary"
        href="/">
        메인으로 돌아가기
      </Link>
    </div>
  );
}

export default Error;
