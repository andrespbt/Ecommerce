import { useNavigate } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { Combobox, Dialog, Transition } from '@headlessui/react';
import { NavMenuModalCloseIcon, NavSearchIcon } from '../../icons/header';
import { useGetProductBySearchQuery } from '../../../store/apis/productsApi';
import { filterProductsCategory } from '../../../helpers/filterProductsCategory';

export const Search = ({ setOpen, isOpen }) => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const { data } = useGetProductBySearchQuery(searchText);
  const productsFiltered = searchText ? filterProductsCategory(data.products) : [];

  return (
    <Transition.Root
      show={isOpen}
      as={Fragment}>
      <Transition.Child
        enter="duration-300 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="duration-200 ease in"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
        <Dialog
          className="absolute left-0 top-0 z-10 h-full w-full bg-gray-300"
          onClose={setOpen}>
          {searchText && <span className="absolute top-7 left-8 text-lg font-bold text-[#666]">SEARCH:</span>}

          <NavMenuModalCloseIcon
            onClick={setOpen}
            className="absolute right-6 top-8 h-[2em] w-[2em] fill-[#2d2d2d] hover:cursor-pointer"
          />
          <Combobox
            className="relative top-20 mx-auto w-[80%] divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5"
            as="div"
            onChange={product => {
              navigate(`/product/${product.id}`);
            }}>
            <Combobox.Input
              className="focus:ring-none h-11 w-full border-0 bg-transparent px-2 text-lg text-gray-800 placeholder:text-lg focus:outline-0 focus:placeholder:text-transparent"
              placeholder="Search for items and brands"
              onChange={e => setSearchText(e.target.value.toLowerCase())}
            />
            <button className="absolute top-[0.4rem] right-2 mx-auto bg-white">
              <NavSearchIcon className=" h-[1.7em] w-[1.7em] fill-black text-center " />
            </button>

            {productsFiltered.length > 0 && (
              <Combobox.Options
                static
                className="max-h-[500px] overflow-x-auto py-4 text-lg">
                {productsFiltered.map(product => (
                  <Combobox.Option
                    key={product.id}
                    value={product}>
                    {({ active }) => (
                      <div className={`space-x-1 px-4 py-2 ${active ? 'bg-gray-600 text-white' : 'bg-white'}`}>
                        {product.title}
                      </div>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}

            {searchText && productsFiltered.length === 0 && (
              <p className="space-x-1 px-4 py-2 text-lg text-gray-500">No results found</p>
            )}
          </Combobox>
        </Dialog>
      </Transition.Child>
    </Transition.Root>
  );
};
