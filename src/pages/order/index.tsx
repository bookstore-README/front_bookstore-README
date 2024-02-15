import ShippingAddressSection from '@/components/container/shippingAddressSection/shippingAddressSection';

export default function Order() {
  return (
    <div className="flex-center">
      <ShippingAddressSection />
      <div className="flex h-[509px] bg-red pc:w-432"></div>
    </div>
  );
}
