import { useState } from 'react';
import { HeaderContext } from './HeaderContext';

export const HeaderProvider = ({ children }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isModalMenOpen, setIsModalMenOpen] = useState(false);
  const [isModalWomenOpen, setIsModalWomenOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchingBigScreen, setIsSearchingBigScreen] = useState(false);

  return (
    <HeaderContext.Provider
      value={{
        isMenuActive,
        setIsMenuActive,
        isModalMenOpen,
        setIsModalMenOpen,
        isModalWomenOpen,
        setIsModalWomenOpen,
        isSearching,
        setIsSearching,
        isSearchingBigScreen, 
        setIsSearchingBigScreen
      }}>
      {children}
    </HeaderContext.Provider>
  );
};
