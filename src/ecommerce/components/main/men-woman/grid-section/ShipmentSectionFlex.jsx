export const ShipmentSectionFlex = ({ icon, h4Text, spanText }) => {
  return (
    <div className="flex h-[150px] flex-col items-center justify-around">
      {icon}
      <h4 className="font-bold tracking-widest md:text-lg lg:text-xl">{h4Text}</h4>
      <span className="tracking-widest md:text-base lg:text-lg">{spanText}</span>
    </div>
  );
};
