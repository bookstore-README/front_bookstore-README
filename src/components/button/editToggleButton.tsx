interface EditToggleButtonProps {
  isEditMode: boolean;
  onClick: () => void;
}

function EditToggleButton({ isEditMode, onClick }: EditToggleButtonProps) {
  const buttonStyle = 'w-134 h-40 rounded-[5px] flex-center';
  const buttonClass = isEditMode
    ? `${buttonStyle} bg-primary text-white`
    : `${buttonStyle} bg-white border text-primary`;

  return (
    <button onClick={onClick} className={buttonClass}>
      {isEditMode ? '적용하기' : '수정하기'}
    </button>
  );
}

export default EditToggleButton;
