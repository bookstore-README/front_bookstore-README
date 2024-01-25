/* string 배열형 author 값을 받아 author 리스트를 출력하는 컴포넌트

- 작가 버튼을 클릭하면 작가 페이지로 이동하게 할 예정.
*/

interface BookAuthorProps {
  authorList?: string[] | null;
}

function BookAuthor({ authorList }: BookAuthorProps) {
  if (!authorList || authorList.length < 1) return;
  return (
    <div className="flex-center gap-4">
      {authorList.map((author) => {
        return (
          <button
            key={author}
            className="text-gray-3 text-14 hover:text-gray-7">
            {author}
          </button>
        );
      })}
    </div>
  );
}

export default BookAuthor;
