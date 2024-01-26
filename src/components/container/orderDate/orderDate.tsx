import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { forwardRef } from 'react';
import ko from 'date-fns/locale/ko';
import Image from 'next/image';
import { getDateAgo } from '@/utils/getTimeAgo';

type OrderDateProps = {
  pastDate: string;
  setSelectedItem: Dispatch<SetStateAction<string>>;
};

const CustomOrderInput = forwardRef(function MyInput(props: any, ref) {
  return (
    <div className="border-solid border-2 border-gray-1 w-135 h-42 flex-center px-9 rounded-[5px]">
      <input
        {...props}
        ref={ref}
        className="focus:outline-none w-1 text-center flex-1"
        readOnly
      />
      <Image
        src="/images/calendar.svg"
        width={20}
        height={20}
        alt="calendar"
        className=""
      />
    </div>
  );
});

function OrderDate({ pastDate, setSelectedItem }: OrderDateProps) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);
  const aMonthAgo = getDateAgo(30);
  const threeMonthAgo = getDateAgo(90);
  const sixMonthAgo = getDateAgo(180);
  const aYearAgo = getDateAgo(365);

  const seltectdAgo = [
    ['전체보기', endDate],
    ['최근 1개월', aMonthAgo],
    ['최근 3개월', threeMonthAgo],
    ['최근 6개월', sixMonthAgo],
    ['최근 1년', aYearAgo],
    ['직접 입력', endDate],
  ];

  const findMonthAgo = useMemo(
    () => seltectdAgo.find((item) => item[0] === pastDate)![1],
    [pastDate],
  );

  useEffect(() => {
    if (pastDate !== '직접 입력') {
      setStartDate(new Date(findMonthAgo));
      setEndDate(new Date());
    }
  }, [pastDate]);

  useEffect(() => {
    if (startDate.getTime() > endDate.getTime()) {
      setStartDate(endDate);
    }
  });
  return (
    <div className="flex items-center">
      <DatePicker
        locale={ko}
        selected={startDate}
        dateFormat="yy.MM.dd"
        onChange={(date) => {
          date && setStartDate(date);
          setSelectedItem('직접 입력');
        }}
        customInput={<CustomOrderInput ref={startDateRef} />}
      />
      <span className="mx-6"> ~ </span>
      <DatePicker
        locale={ko}
        selected={endDate}
        dateFormat="yy.MM.dd"
        onChange={(date) => {
          date && setEndDate(date);
          setSelectedItem('직접 입력');
        }}
        customInput={<CustomOrderInput ref={endDateRef} />}
      />
    </div>
  );
}

export default OrderDate;
