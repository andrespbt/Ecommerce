import { ButtonCategorySection } from './ButtonCategorySection';
import { ImageCategorySection } from './ImageCategorySection';

export const CardCategorySection = ({ imageUrl, section, category, onClick, text, classes }) => {
  return (
    <div className={`${classes} relative col-start-1 col-end-11 h-96 w-full lg:h-[600px]`}>
      <ImageCategorySection
        imageUrl={imageUrl}
        section={section}
        category={category}
        onClick={onClick}
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
