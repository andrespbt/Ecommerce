import { useNavigate } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Combobox, Dialog, Transition } from '@headlessui/react';
import { filterProductsCategory } from '../../../../helpers/filterProductsCategory';
import { useGetProductBySearchQuery } from '../../../../store/apis/productsApi';
import { NavMenuModalCloseIcon, NavSearchIcon } from '../../../icons/header';
import { isLoading } from '../../../../store/auth';

export const SearchBigScreenModal = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const { data } = useGetProductBySearchQuery(searchText);
  const productsFiltered = searchText ? filterProductsCategory(data.products) : [];
  return (
    <Transition.Root
      afterLeave={() => {
        setSearchText('');
        window.focus();
      }}
      show={isOpen}
      as={Fragment}>
      <Dialog
        className="fixed inset-0 hidden overflow-y-auto sm:inline-block "
        onClose={() => setIsOpen(false)}>
        {/* Transition on background  */}
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-200 ease in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <Dialog.Overlay className="fixed inset-0 bg-black/30 transition-opacity" />
        </Transition.Child>

        {/* Transition on elements  */}
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-200 ease in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          <Combobox
            className="absolute left-[150px] top-[22px] w-[50%] min-w-[300px] divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5 md:left-[35%] md:top-[26px] md:w-[41%] lg:left-[37%] lg:w-[45%] xl:left-[28%]"
            as="div"
            onChange={product => {
              dispatch(isLoading());
              if (window.location.pathname.includes('product')) {
                location.replace(`/product/${product.id}`);
              }
            }}>
            <Combobox.Input
              className="h-11 w-full border-0 bg-transparent px-2 text-lg text-gray-800 placeholder:text-lg focus:outline-0 focus:placeholder:text-transparent"
              placeholder="Search for items and brands"
              onFocus={() => setIsOpen(true)}
              onChange={e => setSearchText(e.target.value.toLowerCase())}
            />
            <button className="absolute top-[0.4rem] right-2 mx-auto bg-white">
              <NavSearchIcon className=" h-[1.7em] w-[1.7em] fill-black text-center " />
            </button>

            {productsFiltered.length > 0 && (
              <Combobox.Options
                static
                className="z-50 max-h-[500px] overflow-x-auto py-4 text-lg">
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
