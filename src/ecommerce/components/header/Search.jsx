import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Combobox, Dialog, Transition } from '@headlessui/react';
import { NavMenuModalCloseIcon, NavSearchIcon } from '../../icons/header';
import { useGetProductBySearchQuery } from '../../../store/apis/productsApi';
import { filterProductsCategory } from '../../../helpers/filterProductsCategory';
import { isLoading } from '../../../store/auth';

export const Search = ({ setOpen, isOpen }) => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const { data } = useGetProductBySearchQuery(searchText);
  const productsFiltered = searchText ? filterProductsCategory(data.products) : [];

  return (
    <Transition.Root
      afterLeave={() => {
        setSearchText('');
      }}
      show={isOpen}
      as={Fragment}>
      <Dialog
        className="fixed inset-0 overflow-y-auto "
        onClose={setOpen}>
        {/* Transition on background  */}
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-200 ease in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <Dialog.Overlay className="fixed inset-0 bg-gray-300 transition-opacity" />
        </Transition.Child>

        {/* Transition on elements  */}
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-200 ease in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          {searchText && <span className="absolute top-7 left-8 text-lg font-bold text-[#666]">SEARCH:</span>}
          <NavMenuModalCloseIcon
            onClick={setOpen}
            className="absolute right-6 top-8 h-[2em] w-[2em] fill-[#2d2d2d] hover:cursor-pointer"
          />
          <Combobox
            className="relative top-20 mx-auto w-[80%] divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5"
            as="div"
            onChange={product => {
              dispatch(isLoading());
              location.replace(`/product/${product.id}`);
            }}>
            <Combobox.Input
              className="h-11 w-full border-0 bg-transparent px-2 text-lg text-gray-800 placeholder:text-lg focus:outline-0 focus:placeholder:text-transparent"
              placeholder="Search for items and brands"
              onChange={e => setSearchText(e.target.value.toLowerCase())}
            />
            <button className="absolute top-[0.4rem] right-2 mx-auto bg-white">
              <NavSearchIcon
                className=" h-[1.7em] w-[1.7em] fill-black text-center "
                viewBox="-2 -2 20 20"
              />
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
                      <div
                        className={`space-x-1 px-4 py-2 ${
                          active ? 'cursor-pointer bg-gray-600 text-white' : 'bg-white'
                        }`}>
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
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};
