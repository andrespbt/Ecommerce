import { ButtonCategorySection, ImageCategorySection } from './';

export const CardCategorySection = ({ imageUrl, section, category, onClick, text, classes }) => {
  return (
    <div className={`${classes} relative col-start-1 col-end-11 h-[300px] w-full sm:h-[350px] lg:h-full`}>
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
