import cls from "@/utils/cls";

interface TotalPriceProps {
  title: string;
  price: string;
  font?: string;
  text?: string;
  color?: string;
}

function TotalPrice({ title, price, font, text, color}: TotalPriceProps) {
  return (
    <div className={cls(`flex items-center justify-between text-15 ${color ? color : 'text-black'}`)}>
      <span className={cls(`${font ? font : 'font-light'}`)}>{title}</span>
      <span
        className={cls(`${text ? `${text} font-bold` : 'text-15 font-bold'}`)}>
        {price}
      </span>
    </div>
  );
}

export default TotalPrice