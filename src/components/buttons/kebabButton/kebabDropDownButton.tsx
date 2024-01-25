export interface KebabDropDownButtonProps {
  title1: string;
  title2: string;
}

function KebabDropDownButton({ title1, title2 }: KebabDropDownButtonProps) {
  return (
    <div className="flex-center flex-col absolute top-48 right-20 w-108 h-84 border-[1px] border-solid border-gray-10 rounded-[5px] bg-white">
      <div className="hover:text-green text-gray-11 flex-center w-full text-14 h-full border-[1px] border-solid border-gray-10">
        {title1}
      </div>
      <div className="hover:text-green text-gray-11 flex-center w-full h-full text-14">
        {title2}
      </div>
    </div>
  );
}

export default KebabDropDownButton;
