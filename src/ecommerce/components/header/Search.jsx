import { useState } from 'react';
import { Combobox, Dialog } from '@headlessui/react';
import { NavMenuModalCloseIcon, NavSearchIcon } from '@/ecommerce/icons/header/index';

const categories = ['womens-dresses', 'womens-shoes', 'mens-shirts', 'mens-shoes', 'mens-watches', 'womens-watches'];

export const Search = ({ setOpen, isOpen }) => {
  const [isInputText, setIsInputText] = useState(false);

  const onInputChange = e => {
    const searchInput = e.target.value;

    if (searchInput.trim().length > 0) {
      setIsInputText(true);
    } else {
      setIsInputText(false);
    }
  };
  return (
    <Dialog
      open={isOpen}
      onClose={setOpen}
      className="absolute left-0 top-0 z-10 h-full w-full bg-gray-300">
      {isInputText && <span className="absolute top-7 left-8 text-lg font-bold text-[#666]">SEARCH:</span>}

      <NavMenuModalCloseIcon
        onClick={setOpen}
        className="absolute right-6 top-8 h-[2em] w-[2em] fill-[#2d2d2d] hover:cursor-pointer"
      />
      <Combobox
        className="relative top-20 mx-auto w-[80%] rounded-xl bg-white shadow-2xl ring-1 ring-black/5"
        as="div"
        onChange={() => {
          // TODO: Navigate to selected page
        }}>
        <Combobox.Input
          className="focus:ring-none h-11 w-full border-0 bg-transparent px-2 text-lg text-gray-800 placeholder:text-lg focus:outline-0 focus:placeholder:text-transparent"
          placeholder="Search for items and brands"
          onChange={onInputChange}
        />
        <button className="absolute top-[0.4rem] right-2 mx-auto bg-white">
          <NavSearchIcon className=" h-[1.7em] w-[1.7em] fill-black text-center " />
        </button>

        <Combobox.Options static>
          <Combobox.Option>Project 1</Combobox.Option>
          <Combobox.Option>Project 1</Combobox.Option>
          <Combobox.Option>Project 1</Combobox.Option>
          <Combobox.Option>Project 1</Combobox.Option>
        </Combobox.Options>
      </Combobox>
    </Dialog>
  );
};
