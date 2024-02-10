import SettingPageLayout from '@/components/layout/settingPageLayout';
import Header from '@/components/header';
import EditPassword from '@/components/profile/editPassword/editPassword';

export default function EditPasswordPage() {
  return (
    <SettingPageLayout header={<Header isLoggedIn />} main={<EditPassword />} />
  );
}
