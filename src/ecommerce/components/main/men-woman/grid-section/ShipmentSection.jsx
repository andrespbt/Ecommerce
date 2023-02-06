import { ShipmentFlowerIcon, ShipmentLocationIcon, ShipmentTruckIcon } from '../../../../icons/main/shipment';
import { ShipmentSectionFlex } from './ShipmentSectionFlex';

export const ShipmentSection = () => {
  return (
    <section className="flex h-[800px] flex-col items-center justify-between bg-dayDreaming py-20 text-center md:h-[400px] md:flex-row lg:px-10">
      <ShipmentSectionFlex
        icon={
          <ShipmentTruckIcon
            className="h-[50px] w-[50px] "
            viewBox="-1 -1 18 18"
          />
        }
        h4Text="Complimentary Shipping"
        spanText="Enjoy free shipping on U.S. orders over $75."
      />

      <ShipmentSectionFlex
        icon={
          <ShipmentFlowerIcon
            className="h-[50px] w-[50px]"
            viewBox="-1 -1 18 18"
          />
        }
        h4Text="Consciously Crafted"
        spanText="Designed with you and the planet in mind."
      />

<ShipmentSectionFlex
        icon={
            <ShipmentLocationIcon
            className="h-[50px] w-[50px] "
            viewBox="-1 -1 18 18"
          />
        }
        h4Text="Come Say Hi"
        spanText="We have 11 stores across the U.S."
      />
    </section>
  );
};
