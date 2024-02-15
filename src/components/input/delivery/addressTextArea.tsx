// AddressTextArea 컴포넌트
interface AddressTextAreaProps {
  value: string;
  placeholder?: string;
}

function AddressTextArea({ value, placeholder }: AddressTextAreaProps) {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      className={`pointer-events-none mt-2 w-full overflow-hidden rounded-[5px] border border-gray-1 bg-gray-5 py-10 pl-12 text-16 text-gray-2 tablet:h-48 pc:h-48`}
      readOnly
    />
  );
}

export default AddressTextArea;
