import Image from 'next/image';
import CameraImageIcon from '@/public/icons/CameraImageIcon.svg';
import { FormProvider, useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import DefaultUserProfile from '@/public/images/DefaultUserProfile.png';
import { TextInput } from '@/components/input/signInput/signInput';
import { EditProfileType } from '@/types/editProfileTypes';
import RegisterButton from '@/components/button/register/registerButton';
import { useGetMember } from '@/api/member';
import { useEditProfile } from '@/hooks/api/useEditProfile';
import { NICKNAME_RULES } from '@/constants/sign';

function EditProfile() {
  // 유저 프로필 가져오기
  const { data } = useGetMember();

  const imageUploaderRef = useRef<HTMLInputElement>(null);
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null);

  const method = useForm<EditProfileType>({
    mode: 'onSubmit',
    defaultValues: {
      nickname: data?.nickname,
      profileImage: data?.ImageProfile,
    },
  });
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = method;

  const currentNickName = { nickname: getValues('nickname') };
  const formData = new FormData();
  formData.append(
    'update',
    new Blob([JSON.stringify(currentNickName)], {
      type: 'application/json',
    }),
  );
  if (profileImageFile) {
    formData.append('profileImage', profileImageFile || null);
  }

  // editProfile => mutate 함수
  const { editProfile, isPending } = useEditProfile(formData);

  const onSubmit = () => {
    editProfile();
  };

  const handleClickInput = () => {
    if (imageUploaderRef.current) {
      imageUploaderRef.current.click();
    }
  };

  // 미리보기 이미지 체인저 함수
  const handleImageChange = (file: File): Promise<void> => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return new Promise((resolve) => {
        reader.onload = () => {
          if (typeof reader.result === 'string') {
            setProfileImageUrl(reader.result);
            setProfileImageFile(file);
          }
          resolve();
        };
      });
    }
    return Promise.resolve();
  };

  useEffect(() => {
    if (data?.nickname) {
      method.setValue('nickname', data.nickname);
    }
    if (data?.profileImage) {
      setProfileImageUrl(data?.profileImage);
    }
  }, [data?.nickname, method, data?.profileImage]);

  return (
    <FormProvider {...method}>
      <div
        className="max-h-745 mobile:360 w-440 rounded-[10px] border border-gray-1 bg-white p-40 mobile:w-360
          mobile:border-none mobile:p-0 mobile:px-40">
        <div className="flex-center mb-40">
          <h1 className="text-20 font-bold"> 프로필 수정</h1>
        </div>
        <form
          className="flex flex-col gap-40 mobile:m-15"
          onSubmit={handleSubmit(onSubmit)}>
          <h2 className="mb-20 font-bold">프로필 이미지</h2>

          <div
            className="relative h-200 w-200 cursor-pointer rounded-full bg-gray-2"
            onClick={handleClickInput}>
            <Image
              src={profileImageUrl || DefaultUserProfile}
              alt="프로필 이미지"
              className="rounded-full"
              fill
            />
            <input
              type="file"
              id="profileImage"
              className="hidden"
              ref={imageUploaderRef}
              onChange={(e) => {
                if (e.target.files) {
                  handleImageChange(e.target.files[0]);
                }
              }}
              accept="image/*"
            />
            <Image
              src={CameraImageIcon}
              alt="카메라 이미지"
              width={52}
              height={52}
              className="absolute bottom-1 right-1"
            />
          </div>

          <div>
            <label className="w-full text-left text-16 font-bold text-black">
              이메일
            </label>
            <TextInput
              id="email"
              register={register}
              value={data?.email}
              readOnly
              classNames="text-gray-2 focus:border-gray-3"
            />
          </div>
          <div>
            <label className="w-full text-left text-16 font-bold text-black">
              닉네임
            </label>
            <p className="w-full text-left text-15 text-gray-3">
              다른 유저와 중복되지 않는 닉네임
            </p>
            <TextInput
              id="nickname"
              register={register}
              requiredMessage={NICKNAME_RULES.required}
              pattern={{
                value: NICKNAME_RULES.pattern.value,
                message: NICKNAME_RULES.pattern.message,
              }}
              isError={errors.nickname}
              defaultValue={data?.nickname}
            />
            {errors.nickname?.message && (
              <p className="w-full text-left text-14 text-red">
                {errors?.nickname?.message}
              </p>
            )}
          </div>
          <RegisterButton disabled={!isPending} type="submit">
            회원정보 수정
          </RegisterButton>
        </form>
      </div>
    </FormProvider>
  );
}
export default EditProfile;
