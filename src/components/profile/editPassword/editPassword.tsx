import { PasswordInput } from '@/components/input/signInput/signInput';
import { EditPasswordType } from '@/types/editProfileTypes';
import { FormProvider, useForm } from 'react-hook-form';
import RegisterButton from '@/components/button/register/registerButton';
import { useEditPassword } from '@/hooks/api/useEditPassword';

function EditPassword() {
  const method = useForm<EditPasswordType>({
    mode: 'onSubmit',
    defaultValues: {
      password: '',
      checkPassword: '',
    },
  });
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = method;

  const PASSWORD_RULES = {
    required: '비밀번호를 입력해주세요.',
    pattern: {
      value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/i,
      message: '비밀번호는 영문, 숫자를 포함해 8자 이상으로 지어주세요.',
    },
    validate: (value: string | number) => {
      const passwordValue = getValues('password');
      return passwordValue === value || '비밀번호가 다릅니다';
    },
  };

  const { changePassword, isPending } = useEditPassword({
    newPassword: getValues('checkPassword'),
  });

  const onSubmit = () => {
    changePassword();
  };

  return (
    <FormProvider {...method}>
      <div
        className="max-h-745 w-440 rounded-[10px] border border-gray-1 bg-white p-40
          mobile:w-360 mobile:border-none mobile:p-0">
        <div className="flex-center mb-40">
          <h1 className="text-20 font-bold">비밀번호 변경</h1>
        </div>
        <form
          className="flex flex-col gap-40 mobile:m-15"
          onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-40">
            <div>
              <label className="w-full text-left text-16 font-bold text-black">
                새 비밀번호
              </label>
              <p className="mb-12 w-full text-left text-15 text-gray-3">
                영문, 숫자를 포함한 8자 이상의 비밀번호
              </p>
              <PasswordInput
                id="password"
                placeholder="비밀번호"
                register={register}
                required={true}
                requiredMessage={PASSWORD_RULES.required}
                pattern={{
                  value: PASSWORD_RULES.pattern.value,
                  message: PASSWORD_RULES.pattern.message,
                }}
                isError={errors.password}
              />
              {errors.password?.message && (
                <p className="w-full text-left text-14 text-red">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <label className="mb-12 w-full text-left text-16 font-bold text-black">
                새 비밀번호확인
              </label>
              <PasswordInput
                id="checkPassword"
                placeholder="비밀번호확인"
                register={register}
                required={true}
                requiredMessage={PASSWORD_RULES.required}
                isError={errors.checkPassword}
                validate={PASSWORD_RULES.validate}
              />
              {errors.checkPassword?.message && (
                <p className="w-full text-left text-14 text-red">
                  {errors.checkPassword.message}
                </p>
              )}
            </div>
          </div>
          <RegisterButton type="submit">비밀번호 변경</RegisterButton>
        </form>
      </div>
    </FormProvider>
  );
}

export default EditPassword;
