import { ReactNode } from 'react';

interface SettingPageLayoutProps {
  header: ReactNode;
  main: ReactNode;
}

function SettingPageLayout({ header, main }: SettingPageLayoutProps) {
  return (
    <>
      <div role="container" className="flex flex-col gap-40">
        <div role="header">{header}</div>
        <div role="content" className="flex-center">
          {main}
        </div>
      </div>
    </>
  );
}

export default SettingPageLayout;
