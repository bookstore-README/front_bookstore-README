import RegisterButton from '@/components/buttons/registerButton.tsx/RegisterButton';
import SignError from '@/components/errors/SignError';
import { PasswordInput, TextInput } from '@/components/signInput/SignInput';
import SocialCircle from '@/components/socialCircle/SocialCircle';
import TermsCheckbox from '@/components/terms/terms';
import { SignValueType } from '@/types/signType';
import {
  checkEmail,
  checkNickName,
  checkPassword,
} from '@/utils/checkSignInSignOut';
import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';

function SignUp() {
  const method = useForm<SignValueType>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      repassword: '',
      nickname: '',
    },
  });
  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = method;
  const passwordValue = getValues('password');
  const rePasswordValue = getValues('repassword');
  const onSubmit = () => {
    setError('email', {
      type: 'manual',
      message: '이메일 형식에 맞지 않습니다',
    });
    setError('password', {
      type: 'manual',
      message: '비밀번호는 영문, 숫자를 포함해 8자 이상으로 지어주세요.',
    });

    if (passwordValue !== rePasswordValue) {
      setError('repassword', {
        type: 'manual',
        message: '비밀번호가 다릅니다',
      });
    }

    setError('nickname', {
      type: 'manual',
      message: '닉네임은 3자 이상, 8자 이하로 지어주세요.',
    });
  };

  return (
    <FormProvider {...method}>
      <div className="w-full min-h-dvh bg-white flex-center">
        <div className="max-w-390 flex-1 flex flex-col items-center gap-y-10 px-15">
          <div className="h-64 flex-center">
            <p className="text-green font-bold text-2xl">Read Me</p>
          </div>
          <p className="text-black font-bold text-xl">회원가입</p>
          <div
            className="w-full flex flex-col items-center gap-y-20 text-gray-3 rounded-[10px]
              border-solid border-2 border-gray-1 py-5">
            <p className="text-center text-xs">
              SNS로 간편하게 로그인/회원가입
            </p>
            <div className="w-184 flex justify-between">
              <SocialCircle />
              <SocialCircle />
              <SocialCircle />
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col items-center gap-y-10">
            <label className="text-gray-6 text-16 font-bold text-left w-full">
              이메일
            </label>
            <TextInput
              id="email"
              placeholder="이메일"
              register={register}
              required={true}
              pattern={checkEmail}
            />
            <SignError errors={errors} id="email" />
            <label className="text-black text-16 font-bold text-left w-full">
              비밀번호
            </label>
            <p className="text-gray-3 text-15 text-left w-full">
              영문, 숫자를 포함한 8자 이상의 비밀번호
            </p>
            <PasswordInput
              id="password"
              placeholder="비밀번호"
              register={register}
              required={true}
              pattern={checkPassword}
              isError={errors.password}
            />
            <SignError errors={errors} id="password" />
            <label className="text-black text-16 font-bold text-left w-full">
              비밀번호확인
            </label>
            <PasswordInput
              id="repassword"
              placeholder="비밀번호확인"
              register={register}
              required={true}
              isError={errors.repassword}
            />
            <SignError errors={errors} id="repassword" />
            <label className="text-gray-6 text-16 font-bold text-left w-full">
              닉네임
            </label>
            <p className="text-gray-3 text-15 text-left w-full">
              다른 유저와 중복되지 않는 닉네임
            </p>
            <TextInput
              id="nickname"
              placeholder="닉네임"
              register={register}
              required={true}
              pattern={checkNickName}
              isError={errors.nickname}
            />
            <SignError errors={errors} id="nickname" />
            <TermsCheckbox />
            <RegisterButton>회원가입</RegisterButton>
          </form>
          <div className="flex gap-x-1">
            <p className="text-gray-3">이미 아이디가 있으신가요?</p>
            <Link href="/signin" className="text-green font-normal">
              로그인
            </Link>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}

export default SignUp;
