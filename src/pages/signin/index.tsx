import RegisterButton from '@/components/buttons/registerButton.tsx/registerButton';
import SignError from '@/components/errors/signError';

import { PasswordInput, TextInput } from '@/components/signInput/SignInput';
import SocialCircle from '@/components/socialCircle/socialCircle';
import { SignValueType } from '@/types/signType';
import { checkEmail } from '@/utils/checkSignInSignOut';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function SignIn() {
  const [isClick, setIsClick] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignValueType>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = () => {
    setError('password', {
      type: 'manual',
      message: '아이디나 비밀번호가 일치하지 않습니다.',
    });
  };
  return (
    <div className="w-full min-h-dvh flex-center bg-white">
      <div className="max-w-300 flex-1 flex flex-col items-center gap-y-10">
        <div className="h-64 flex-center">
          <p className="text-green font-bold text-2xl">Read Me</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center gap-y-10">
          <div className="w-full flex flex-col">
            <TextInput
              id="email"
              placeholder="이메일"
              register={register}
              required={true}
              pattern={checkEmail}
            />
            <PasswordInput
              id="password"
              placeholder="비밀번호"
              register={register}
              required={true}
              isError={errors.password}
            />
            <SignError errors={errors} id="password" />
          </div>
          <div className="w-full flex">
            <input
              id="loginSaved"
              type="checkbox"
              className="invisible w-1 h-1"
            />
            <label htmlFor="loginSaved " className="flex-center">
              <div
                onClick={() => setIsClick(!isClick)}
                className={`flex-center ${isClick ? 'bg-green' : ''} rounded-full w-20 h-20 border-solid
                  border-2 border-gray-1 cursor-pointer`}>
                {isClick && (
                  <Image
                    alt=""
                    src="/icons/CheckIcon.svg"
                    width={10}
                    height={7}
                  />
                )}
              </div>
            </label>
            <p className="mx-2 text-15 text-black">로그인 상태 유지</p>
          </div>
          <RegisterButton>로그인</RegisterButton>
        </form>
        <div className="flex gap-x-1">
          <p className="text-gray-3">아이디가 없으신가요?</p>
          <Link href="/signup" className="text-green font-normal">
            회원가입
          </Link>
        </div>
        <div className="flex flex-col gap-y-20">
          <p className="text-center text-xs text-gray-3">
            SNS로 로그인/회원가입
          </p>
          <div className="w-184 flex justify-between">
            <SocialCircle />
            <SocialCircle />
            <SocialCircle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
