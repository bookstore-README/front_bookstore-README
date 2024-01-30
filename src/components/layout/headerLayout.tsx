import NavigationTab from '@/components/header/navigationTab';
import { ReactElement } from 'react';

function HeaderLayout({ children }: { children: ReactElement }) {
  return (
    <div className="sticky top-0 z-10 flex-row h-90 tablet:h-170 pc:h-170">
      {children} <NavigationTab />
    </div>
  );
}

export default HeaderLayout;
