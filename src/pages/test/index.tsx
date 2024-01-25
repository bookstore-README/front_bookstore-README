import DropDown from '@/components/dropDown/DropDown';
import OrderCount from '@/components/orderDate/OrderCount';
import OrderOverView from '@/components/orderDate/OrderOverView';

function TestPage() {  

  return (
    <>     
      <OrderOverView orderView={{
        processing: 1, 
        shipping: 0, 
        completed:0, 
        exchangeCompleted:1, 
        purchased:1, 
      }}/>   
      <DropDown />      
      <OrderCount orderDate="2024.1.2" orderCount={2} />    
    </>
  );
}

export default TestPage;
