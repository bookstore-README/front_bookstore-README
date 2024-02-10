import { useEffect, useRef, useState } from 'react';
import useShowDropDown from '@/hooks/useShowDropDown';
import { useAtom } from 'jotai';
import { selectedItemAtom } from '@/store/state';

export default  function useDropDownSelect(init: string) {
  const ref = useRef(null);
  const [selectedItem, setSelectedItem] = useAtom(selectedItemAtom);
  const [showOptions, setShowOptions] = useShowDropDown(ref, false);

  const handleSelectedItem = (menu: string) => {
    setSelectedItem(menu);
  };

  const handleDropDownClick = () => setShowOptions(!showOptions);

  useEffect(() => {
    setSelectedItem(init);
  }, []);

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
