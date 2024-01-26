/* string 배열형 author 값을 받아 author 리스트를 출력하는 컴포넌트

- 작가 버튼을 클릭하면 작가 페이지로 이동하게 할 예정.
*/

interface BookAuthorProps {
  authorList?: string[] | null;
  classNames?: string;
}

function BookAuthor({ authorList, classNames }: BookAuthorProps) {
  if (!authorList || authorList.length < 1) return;
  return (
    <div className={`flex gap-x-4 ${classNames} flex-wrap`}>
      {authorList.map((author, index) => {
        const isLastAuthor = index === authorList.length - 1;
        const authorClass = isLastAuthor
          ? 'text-gray-3 text-14 overflow-hidden truncate '
          : 'text-gray-3 text-14 hover:text-gray-7 whitespace-nowrap';
        return (
          <button key={author} className={authorClass}>
            {author}
            {index + 2 > authorList.length || ','}
          </button>
        );
      })}
    </div>
  );
}

export default BookAuthor;
