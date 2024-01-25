import { BaseSyntheticEvent, Dispatch, MutableRefObject, SetStateAction, useEffect, useState } from 'react';

function useShowDropDown(
  ref: MutableRefObject<HTMLDivElement | null>,
  initialBoolean: boolean,
): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [showOptions, setShowOptions] = useState(initialBoolean);

  useEffect(() => {
    const onClick = (e: BaseSyntheticEvent | MouseEvent) => {
      if (ref.current !== null && !ref.current.contains(e.target)) {
        setShowOptions(!showOptions);
      }
    };

    if (showOptions) {
      window.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [showOptions, ref]);
  return [showOptions, setShowOptions];
}

export default useShowDropDown