export const SubNavbar = ({ currentPath }) => {
  const menCategories = [];
  const womenCategories = [];

  return (
    <div className={`hidden h-14 bg-lightGray md:${currentPath ? 'block' : ''}`}>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};
