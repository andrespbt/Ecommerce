import { ButtonCategorySection } from './ButtonCategorySection';
import { ImageCategorySection } from './ImageCategorySection';

export const CardCategorySection = ({ imageUrl, section, category, onClick, text, bg }) => {
  return (
    <div className="relative col-start-1 col-end-11 h-96 w-full ">
      <ImageCategorySection
        imageUrl={imageUrl}
        section={section}
        category={category}
        onClick={onClick}
        bg={bg}
      />
      <ButtonCategorySection
        text={text}
        section={section}
        category={category}
        onClick={onClick}
      />
    </div>
  );
};
