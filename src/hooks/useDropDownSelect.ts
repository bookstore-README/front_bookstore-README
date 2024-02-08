import { useRef, useState } from 'react';
import useShowDropDown from '@/hooks/useShowDropDown';

export default function useDropDownSelect(init: string) {
  const ref = useRef(null);
  const [selectedItem, setSelectedItem] = useState(init);
  const [showOptions, setShowOptions] = useShowDropDown(ref, false);

  const handleSelectedItem = (menu: string) => {
    setSelectedItem(menu);
  };

  const handleDropDownClick = () => setShowOptions(!showOptions);

  return {
    ref,
    showOptions,
    setShowOptions,
    selectedItem,
    setSelectedItem,
    handleDropDownClick,
    handleSelectedItem,
  };
}
