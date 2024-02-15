// AddressInputField 컴포넌트
interface AddressInputFieldProps {
  value: string;
  placeholder?: string;
}

function AddressInputField({
  value,
  placeholder,
}: AddressInputFieldProps) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      className="pointer-events-none mr-12 h-48 w-120 rounded-[5px] border border-gray-1 bg-gray-5
        pl-12 text-gray-2 mobile:mr-10"
      readOnly
    />
  );
}

export default AddressInputField;
