function SelectOrder(
  setSelectedOrder: (menu: string) => void,
  setCurrentOrder: any,
  ) {
  const onSelectedOrder = (menu: string) => {
    setSelectedOrder(menu);
    if (menu === '조회순')
      setCurrentOrder(() => {
        return {sort: 'VIEW', ascending: false };
      });
    if (menu === '신상품순')
      setCurrentOrder(() => {
        return { sort: 'NEWEST', ascending: false };
      });
    if (menu === '별점순')
      setCurrentOrder(() => {
        return { sort: 'STAR', ascending: false };
      });
    if (menu === '리뷰 많은순')
      setCurrentOrder(() => {
        return { sort: 'REVIEW', ascending: false };
      });
    if (menu === '낮은 가격순')
      setCurrentOrder(() => {
        return { sort: 'PRICE', ascending: true };
      });
    if (menu === '높은 가격순')
      setCurrentOrder(() => {
        return { sort: 'PRICE', ascending: false };
      });
  };
  
  return onSelectedOrder
}
  
export default SelectOrder;