import DropDown from '@/components/dropDown/dropDown';
import React from 'react';
import { PERIOD } from 'src/constants/dropDownMenu';
import { personTestData } from '@/pages/api/mock/bookOrderMock';

function dropDownTest() {

  return (
    <div className="relative flex w-[1000px]">
        <DropDown
          menus={PERIOD}
          person={personTestData}
          orderDate={true}
        />
    </div>
  );
}

export default dropDownTest;
