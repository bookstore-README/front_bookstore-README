import Image from "next/image";
import NoProfileImg from '@/public/icons/Noprofile.svg';
import CloseIcon from '@/public/icons/Close.svg';
import Spacing from "@/components/container/spacing/spacing";

interface ProfileModalFormProps {
  onClick: () => void;
  profileImage?: string;
  nickname: string;
  email: string;
}

function ProfileModalForm({onClick, profileImage, nickname, email} : ProfileModalFormProps ) {
  return (
    <div className="relative flex-center flex-col px-119 pb-100 pt-60 mobile:px-65 mobile:pb-81 mobile:pt-40">
      <h1 className="text-20 font-bold">프로필 보기</h1>
      <Spacing height={[60, 60, 60]} />
      <div className="relative h-200 w-200 overflow-hidden rounded-full">
        <Image
          src={profileImage ? profileImage : NoProfileImg}
          alt="프로필사진"
          fill
        />
      </div>
      <Spacing height={[20, 20, 20]} />
      <div className="flex flex-col items-center justify-between gap-8 text-16">
        <span className="font-bold">{nickname}</span>
        <span className='font-light text-gray-2'>{email}</span>
      </div>
      <Image
        className="absolute right-30 top-30 cursor-pointer"
        src={CloseIcon}
        alt="닫기"
        width={24}
        height={24}
        onClick={onClick}
      />
    </div>
  );
}

export default ProfileModalForm