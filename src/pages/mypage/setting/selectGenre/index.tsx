import SettingPageLayout from '@/components/layout/settingPageLayout';
import Header from '@/components/header';
import GenreSection from '@/components/container/genreSection/genreSection';

export default function SelectGenrePage() {
  return <SettingPageLayout main={<GenreSection />} />;
}
