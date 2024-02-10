import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { NotifyProps } from '@/components/toast/toast';

function useFormControl(notify?: ({ type, text }: NotifyProps) => void) {
  const { control, handleSubmit, watch } = useForm({ mode: 'onChange' });
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [newRating, setNewRating] = useState(0);

  useEffect(() => {
    const value = Object.values(watch()).every((el) => el);

    if (value && newRating) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [newRating, watch()]);

  //TODO:폼보낼 함수
  const onSubmit = () => {
    notify;
    console.log('폼보내짐');
  };
  
  return {
    control,
    handleSubmit,
    isButtonActive,
    newRating,
    setNewRating,
    onSubmit,
  };
}

export default useFormControl
