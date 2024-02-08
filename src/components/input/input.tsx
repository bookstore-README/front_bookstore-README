import classNames from 'classnames';
import { ReactNode } from 'react';
import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from 'react-hook-form';

interface InputProps {
  type?: string;
  height?: string;
  control: Control<FieldValues>;
  name: FieldPath<FieldValues>;
  as?: ReactNode;
}

function Input({ type='text', height, control, name, as = null }: InputProps) {
  const className = classNames(
    'w-full resize-none border border-gray-1 rounded-[10px] px-20 py-15 focus:border-green outline-none',
    height,
  );
  const { field } = useController({name, control})

  return (
    <div className="flex flex-col w-full gap-12">
      <label htmlFor={field.name} className="text-16 text-b-b">
        내용
      </label>
      {as ?? as}
      <input
        id={field.name}
        className={className}
        name={field.name}
        value={field.value}
        onChange={field.onChange}
        placeholder="내용을 작성해주세요"></input>
    </div>
  );
}

export default Input;
