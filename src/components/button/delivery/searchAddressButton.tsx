interface SearchAddressButtonProps {
  onClick: () => void;
}

function SearchAddressButton({ onClick }: SearchAddressButtonProps) {
  return (
    <button
      className="flex-center text-primary border-primary inline-flex h-48 w-108 rounded-[5px] border text-15"
      onClick={onClick}>
      주소 검색
    </button>
  );
}

export default SearchAddressButton;
