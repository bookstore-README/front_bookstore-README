import DropDownItem from '@/components/dropDown/dropDownItem';
import OrderDate from '@/components/container/orderDate/orderDate';
import useDropDownSelect from '@/hooks/useDropDownSelect';
import { Person } from '@/types/orderDateType';
import DropDownHeader from '@/components/dropDown/dropDownHeader';
import { Control, FieldValues } from 'react-hook-form';

type DropDownTypes = {
  person?: Person;
  menus: string[];
  orderDate?: boolean;
};

function DropDown({ menus, orderDate, person }: DropDownTypes) {
  const {
    ref,
    showOptions,
    setShowOptions,
    selectedItem,
    setSelectedItem,
    handleDropDownClick,
    handleSelectedItem,
  } = useDropDownSelect(menus[0]);
  return (
    <>
      <div ref={ref} className="relative w-full">
        <DropDownHeader handleDropDownClick={handleDropDownClick} showOptions={showOptions} selectedItem={selectedItem} />
        {showOptions && (
          <ul className="absolute w-full rounded-b-[5px] border-2 border-solid border-gray-1 bg-white text-14">
            {menus.map((menu) => {
              return (
                <DropDownItem
                  key={menu}
                  menu={menu}
                  onSelectedItem={handleSelectedItem}
                  setIsClick={setShowOptions}
                />
              );
            })}
          </ul>
        )}
      </div>
      {orderDate && (
        <OrderDate
          pastDate={selectedItem}
          setSelectedItem={setSelectedItem}
          person={person}
        />
      )}
    </>
  );
}

export default DropDown;
