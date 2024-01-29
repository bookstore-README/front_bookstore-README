import DropDown from '@/components/dropDown/dropDown';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';

function TestPage() {
  return (
    <div className="flex flex-col gap-20 p-20">
      <DropDown />
      <PreviewBookInfo
        title="어머 이책 사야해!"
        authorList={[
          '이승연',
          '작가얌',
          '작가2',
          '작가3',
          '작가3',
          '작가3',
          '작가3',
          '작가3',
          '작가3',
          '작가5',
        ]}
        size="md"
        ranking={10}
      />
    </div>
  );
}

export default TestPage;
