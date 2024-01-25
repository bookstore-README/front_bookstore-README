import React, { useCallback } from 'react';
type DropDownItemProps = {
  menu: string;
  setSeltedItem: React.Dispatch<React.SetStateAction<string>>;
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
};

function DropDownItem({ menu, setSeltedItem, setIsClick }: DropDownItemProps) {
  const handleSelectItem = useCallback((text: string) => {
    setSeltedItem(text);
    setIsClick(false);
  }, []);
  return (
    <div>
      <li
        className="hover:bg-green hover:text-white bg-white"
        onClick={() => handleSelectItem(menu)}>
        {menu}
      </li>
    </div>
  );
}

export default DropDownItem;
