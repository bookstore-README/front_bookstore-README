interface SearchAddressButtonProps {
  onClick: () => void;
}

function SearchAddressButton({ onClick }: SearchAddressButtonProps) {
  return (
    <button
      className="flex-center inline-flex h-48 w-108 rounded-[5px] border border-green text-15 text-green"
      onClick={onClick}>
      주소 검색
    </button>
  );
}

export default SearchAddressButton;
