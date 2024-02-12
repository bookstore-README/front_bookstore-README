import { ReactNode, useEffect, useRef, useState } from 'react';
import useShowDropDown from '@/hooks/useShowDropDown';
import { createPortal } from 'react-dom';
import useResizeEffect from '@/hooks/useResizeEffect';
import { LocationType } from '@/types/toolTipType';  

type ToolTipTypes = {
  toolTipText: string;
  children: ReactNode
};  


function ToolTip({ children, toolTipText }: ToolTipTypes) {
  const ref = useRef(null);
  const [showOptions, setShowOptions] = useShowDropDown(ref, false);
  const [location, setLocation] = useState<LocationType>()
  const handleClick = () => {
    setShowOptions(!showOptions);
  }
  const childrenRef = useRef<HTMLDivElement>(null)
  const portalRef = useRef<HTMLDivElement>(null)   

  const portalHeight = childrenRef?.current?.offsetHeight!


  useResizeEffect(() => {
    setLocation(childrenRef?.current?.getBoundingClientRect())
  })

  useEffect(() => {
    setLocation(childrenRef?.current?.getBoundingClientRect())
  }, [])



  return (
    <div ref={ref} className="relative">
      <div onClick={handleClick} ref={childrenRef}>
        {children}
      </div>
      {showOptions && (
        createPortal(
          <div ref={portalRef} className={`rounded-lg shadow-md w-330 p-20 bg-white absolute border-2 border-solid border-gray-1 text-14 z-[99999]`} style={{
            top: location && (location.left + 165 > window.screen.width) ? location.top + 30 : location && location.top - portalHeight - 40 - 12,
            left: location && (location.left + 165 > window.screen.width) ? window.screen.width / 2 - 165 : location && (location.left - 165)

          }}>
            {toolTipText}
          </div>, document.body,
        )
      )}
    </div>

  );
}

export default ToolTip
