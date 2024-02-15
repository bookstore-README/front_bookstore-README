// AddressLabel 컴포넌트
interface AddressLabelProps {
  children: React.ReactNode;
}

function AddressLabel({ children }: AddressLabelProps) {
  return (
    <label
      htmlFor="address"
      className="mr-66 whitespace-nowrap mobile:mr-63 mobile:mt-17 pc:mt-12">
      {children}
    </label>
  );
}

export default AddressLabel;
