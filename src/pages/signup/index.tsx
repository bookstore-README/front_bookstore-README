import RegisterButton from '@/components/button/register/registerButton';
import SignError from '@/components/errors/signError';
import {
  PasswordInput,
  TextInput,
} from '@/components/input/signInput/signInput';
import SocialCircle from '@/components/chip/socialCircle';
import TermsCheckbox from '@/components/container/terms/terms';
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
    formState: { errors },
  } = method;

  const onSubmit = (data: SignValueType) => {
    const { email, password, repassword, nickname } = data;
    if (!checkEmail.value.test(email)) {
      setError('email', {
        type: 'manual',
        message: checkEmail.message,
      });
    }
    if (!checkPassword.value.test(password)) {
      setError('password', {
        type: 'manual',
        message: checkPassword.message,
      });
    }

    if (!checkNickName.value.test(nickname)) {
      setError('nickname', {
        type: 'manual',
        message: checkNickName.message,
      });
    }
    if (password !== repassword) {
      setError('repassword', {
        type: 'manual',
        message: '비밀번호가 다릅니다',
      });
    }
  };

  return (
    <FormProvider {...method}>
      <div className="w-full min-h-dvh bg-white flex-center">
        <div className="max-w-390 flex-1 flex flex-col items-center px-15">
          <div className="h-64 flex-center mb-77">
            <p className="font-bold font-Inter text-green text-24">Read Me</p>
          </div>
          <p className="text-black font-bold text-20 mb-40">회원가입</p>
          <div
            className="w-full h-125 flex flex-col items-center justify-center text-gray-3
              rounded-[10px] border-solid border-2 border-gray-1 py-5 mb-40">
            <p className="text-center text-12 mb-20">
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
            className="w-full flex flex-col">
            <fieldset>
              <label className="text-gray-6 text-16 font-bold text-left w-full mb-12 inline-block">
                이메일
              </label>
              <TextInput
                id="email"
                placeholder="이메일"
                register={register}
                required={true}
                isError={errors.email}
              />
              <div className="mt-8 mb-40 text-left">
                <SignError errors={errors} id="email" />
              </div>
            </fieldset>
            <fieldset>
              <label className="text-black text-16 font-bold text-left w-full">
                비밀번호
              </label>
              <p className="text-gray-3 text-15 text-left w-full mb-12 mt-4">
                영문, 숫자를 포함한 8자 이상의 비밀번호
              </p>
              <PasswordInput
                id="password"
                placeholder="비밀번호"
                register={register}
                required={true}
                isError={errors.password}
              />
              <div className="mt-8 mb-40">
                <SignError errors={errors} id="password" />
              </div>
            </fieldset>
            <fieldset>
              <label className="text-black text-16 font-bold text-left w-full inline-block mb-12">
                비밀번호확인
              </label>
              <PasswordInput
                id="repassword"
                placeholder="비밀번호확인"
                register={register}
                required={true}
                isError={errors.repassword}
              />
              <div className="mt-8 mb-40">
                <SignError errors={errors} id="repassword" />
              </div>
            </fieldset>
            <fieldset>
              <label className="text-gray-6 text-16 font-bold text-left w-full">
                닉네임
              </label>
              <p className="text-gray-3 text-15 text-left w-full mt-4 mb-12">
                다른 유저와 중복되지 않는 닉네임
              </p>
              <TextInput
                id="nickname"
                placeholder="닉네임"
                register={register}
                required={true}
                isError={errors.nickname}
              />
              <div className="mt-8 mb-40">
                <SignError errors={errors} id="nickname" />
              </div>
            </fieldset>
            <fieldset className="mb-20">
              <TermsCheckbox />
            </fieldset>
            <RegisterButton>회원가입</RegisterButton>
          </form>
          <div className="flex gap-x-4 mt-20">
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
