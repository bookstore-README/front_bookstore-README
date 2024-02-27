import Image from 'next/image';
import EmojiButtonContainer from '@/components/card/communityCard/emoji/emojiButtonContainer';
import KebabButton from '@/components/button/kebab/kebabButton';
import { CommunityCardProps } from '@/types/api/community';
import NoProfileImg from '@/public/icons/Noprofile.svg';
import { useState } from 'react';
import AlertModal from '@/components/modal/alertModal';
import AddCommunityCard from '@/components/modal/addCommunityCard';
import { useDeleteCommunity } from '@/api/community';
import { useSession } from 'next-auth/react';
import classNames from 'classnames';
import ProfileModal from '@/components/modal/profile';
import { useGetMember } from '@/api/member';

function CommunityCard({
  communityId,
  profileImg,
  userNickname,
  createAt,
  bookId,
  bookCover,
  bookTitle,
  review,
  emojiInfo,
  writer,
  kebab = false,
  profile = false,
}: CommunityCardProps) {
  const { data: session } = useSession();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const { data: profileData } = useGetMember(writer.memberId);

  const handleEditModalOpenClick = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const handleAlertModalOpenClick = () => {
    setIsAlertModalOpen(!isAlertModalOpen);
  };

  const handleProfileOpenClick = () => {
    if (profile && session?.accessToken) {
      setIsProfileModalOpen(!isProfileModalOpen);
    }
    return null;
  };

  return (
    <div
      className="relative flex h-439 w-347 flex-col gap-20 rounded-[10px] border-[1px]
        border-solid border-gray-1 py-20 mobile:max-w-330 tablet:max-w-334">
      <div className="flex items-center px-20">
        <div
          className={`relative h-48 w-48 overflow-hidden rounded-full ${profile ? classNames('z-40 hover:cursor-pointer hover:opacity-50') : ''} `}
          onClick={handleProfileOpenClick}>
          <Image src={profileImg ?? NoProfileImg} alt="프로필이미지" fill />
        </div>
        <div className="flex flex-col justify-start py-5 pl-12">
          <p className="text-14 font-bold text-gray-4">{userNickname}</p>
          <p className="text-12 font-normal text-gray-3">{createAt}</p>
        </div>
        {kebab && (
          <KebabButton
            title1="수정하기"
            title2="삭제하기"
            onClickTitle1={handleEditModalOpenClick}
            onClickTitle2={handleAlertModalOpenClick}
          />
        )}
      </div>
      <div className="flex-center h-[180px] w-full overflow-hidden bg-[linear-gradient(180deg,_#DCE7F7_0%,_#F7EAEA_100%)]">
        <Image
          src={bookCover}
          alt="책표지"
          width={0}
          height={0}
          sizes="height:180px"
          className="h-full w-auto"
          priority
        />
      </div>
      <div className="flex flex-col px-20">
        <p className="h-23 truncate text-16 font-bold text-gray-4">
          {bookTitle}
        </p>
        <p className="h-60 text-14 font-light text-gray-3">{review}</p>
      </div>
      <EmojiButtonContainer
        communityId={communityId}
        emojiId={emojiInfo.emojiId}
        emojis={emojiInfo.emojis}
      />
      {isEditModalOpen && (
        <AddCommunityCard
          onClick={handleEditModalOpenClick}
          communityId={communityId}
          review={review}
          bookId={bookId}
          edit={true}
        />
      )}
      {isAlertModalOpen && (
        <AlertModal
          title="정말 삭제하시겠습니까?"
          description="삭제한 글은 복구할 수 없습니다."
          onClick={handleAlertModalOpenClick}
          Fn={useDeleteCommunity}
          id={communityId}
        />
      )}
      {isProfileModalOpen && (
        <ProfileModal
          onClick={handleProfileOpenClick}
          profileData={profileData}
        />
      )}
    </div>
  );
}

export default CommunityCard;
