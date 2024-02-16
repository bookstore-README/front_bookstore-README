import { ReactNode } from 'react';
import ScrollToTopButton from '../button/scrollToTopButton';
import MainLayout from './mainLayout';

interface SettingPageLayoutProps {
  header: ReactNode;
  main: ReactNode;
  isTopButton?: boolean;
}

function SettingPageLayout({
  header,
  main,
  isTopButton,
}: SettingPageLayoutProps) {
  return (
    <MainLayout>
      <div role="content" className="flex-center pb-40">
        {main}
      </div>
      {isTopButton && <ScrollToTopButton />}
    </MainLayout>
  );
}

export default SettingPageLayout;
