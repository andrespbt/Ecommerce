import { Fragment, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Combobox, Dialog, Transition } from '@headlessui/react';
import { filterProductsCategory } from '../../../helpers/filterProductsCategory';
import { useGetProductBySearchQuery } from '../../../store/apis/productsApi';
import { NavSearchIcon } from '../../icons/header';
import { HeaderContext } from './context/HeaderContext';

export const SearchBigScreenModal = () => {
  const { isSearchingBigScreen, setIsSearchingBigScreen } = useContext(HeaderContext);
  const [searchText, setSearchText] = useState('');
  const { data } = useGetProductBySearchQuery(searchText);
  const productsFiltered = searchText ? filterProductsCategory(data.products) : [];
  return (
    <>
      <div className={`${isSearchingBigScreen ? 'z-[2000]' : ''} relative hidden w-full sm:inline`}>
        <Combobox
          className="absolute top-[-1.3rem] w-full divide-y divide-gray-100 rounded-xl bg-white shadow-2xl ring-1 ring-black/5"
          as="ul"
          onChange={product => {
            if (window.location.pathname.includes('product')) {
              location.replace(`/product/${product.id}`);
            } else {
              location.replace(`/product/${product.id}`);
            }
          }}>
          <Combobox.Input
            className="h-11 w-full border-0 bg-white bg-transparent px-2 text-lg text-gray-800 placeholder:text-base focus:outline-0 focus:placeholder:text-transparent md:placeholder:text-lg"
            placeholder="Search for items and brands"
            onFocus={() => setIsSearchingBigScreen(true)}
            onChange={e => setSearchText(e.target.value.toLowerCase())}
          />
          <button className="absolute top-[0.4rem] right-2 mx-auto bg-white">
            <NavSearchIcon
              className=" h-[1.7em] w-[1.7em] fill-black text-center "
              viewBox="-2 -2 20 20"
            />
          </button>

          {productsFiltered.length > 0 && isSearchingBigScreen && (
            <Combobox.Options className="max-h-80 overflow-y-scroll rounded-b-lg text-lg">
              {productsFiltered.map(product => (
                <Combobox.Option
                  key={product.id}
                  value={product}>
                  {({ active }) => (
                    <div
                      className={`space-x-1 px-4 py-2 capitalize ${
                        active ? 'cursor-pointer bg-gray-600 text-white' : 'bg-white'
                      }`}>
                      {product.title.toLowerCase()}
                    </div>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          )}

          {searchText && productsFiltered.length === 0 && isSearchingBigScreen && (
            <span className="space-x-1 px-4 py-2 text-lg text-gray-500">No results found</span>
          )}
        </Combobox>
      </div>

      <div
        className={`${
          isSearchingBigScreen ? 'z-[1000] sm:inline' : ''
        } absolute inset-0 z-10 hidden h-[100vh] w-full animate-fade-in bg-black/60`}
        onClick={() => setIsSearchingBigScreen(false)}></div>
    </>
  );
};
