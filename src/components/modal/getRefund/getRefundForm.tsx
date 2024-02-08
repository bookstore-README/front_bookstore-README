import TitleContentTable from '@/components/modal/addReview/titleContentTable';
import Image from 'next/image';
import LineIcon from '@/public/icons/Line.svg';
import Radio from '@/components/input/radio';
import RegisterButton from '@/components/button/register/registerButton';
import Input from '@/components/input/input';
import useFormControl from '@/hooks/useFormControl';
import DropDown from '@/components/dropDown/dropDown';
import { REFUND } from 'src/constants/dropDownMenu';

function GetRefundForm() {
  const { control, handleSubmit, isButtonActive, onSubmit } = useFormControl();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-40'>
        <TitleContentTable
          title1="책 제목"
          content1="스물 아홉 생일, 1년 후 죽기로 결심하다"
          title2="저자"
          content2="이제니"
        />
        <Image src={LineIcon} alt="구분선" />
        <div className="flex">
          <Radio
            title="신청 유형 선택"
            control={control}
            name="application"
            label1="교환"
            label2="환불"
          />
          <Radio
            title="회수 방법"
            control={control}
            name="return"
            label1="직접 발송"
            label2="상품 회수"
          />
        </div>
        <Input type="email" name="email" control={control} />
        <Input
          control={control}
          name="description"
          as={<DropDown menus={REFUND} />}
        />
        <div>환불금액 얼마</div>
      </form>
      <RegisterButton>교환/환불 신청하기</RegisterButton>
    </>
  );
}

export default GetRefundForm;
