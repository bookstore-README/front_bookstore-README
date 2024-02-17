import SettingPageLayout from '@/components/layout/settingPageLayout';
import EditProfile from '@/components/profile/editProfile/editProfile';

export default function EditProfilePage() {
  return (
    <SettingPageLayout
      main={<EditProfile initialNickname="기본닉네임" email="dddd@ddd.com" />}
    />
  );
}
