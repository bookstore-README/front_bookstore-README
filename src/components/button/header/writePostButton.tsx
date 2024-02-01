interface WriteButtonProps {
  showButton: boolean;
}
function WritePostButton({ showButton }: WriteButtonProps) {
  if (!showButton) {
    return null; // 렌더링하지 않음
  }

  return (
    <button
      className="relative mobile:hidden flex-center text-14 w-108 h-40 rounded-md border
        border-green text-green ml-auto">
      글쓰기
    </button>
  );
}

export default WritePostButton;
