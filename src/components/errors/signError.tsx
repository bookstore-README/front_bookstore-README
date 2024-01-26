import { SignValueType } from '@/types/signType';
import React from 'react';
import type { FieldErrors } from 'react-hook-form';

type SignErrorProps = {
  errors: FieldErrors<SignValueType>;
  id: keyof SignValueType;
};
export default function SignError({ errors, id }: SignErrorProps) {
  return (
    <div>
      {errors[id]?.message && (
        <p className="text-14 text-red w-full text-left">
          {errors[id]?.message}
        </p>
      )}
    </div>
  );
}
