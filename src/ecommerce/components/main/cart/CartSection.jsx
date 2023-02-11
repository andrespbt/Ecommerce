import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { startAddingBuys, startDeleteCartProduct, startDeletingCart } from '../../../../store/ecommerce/thunks';
import { CartTrashIcon } from '../../../icons/main/cart/CartTrashIcon';
import { AmmountTableData, EmptyCartSection } from '.';

export const CartSection = () => {
  const dispatch = useDispatch();
  const { cart, buys } = useSelector(state => state.ecommerce);
  const navigate = useNavigate();

  const onProductDelete = id => {
    dispatch(startDeleteCartProduct(id));
  };

  const onCartBuy = () => {
    Swal.fire({
      title: 'Are you sure you want to buy these items?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, buy it!',
    }).then(result => {
      if (result.isConfirmed) {
        dispatch(startAddingBuys());
        dispatch(startDeletingCart());
        Swal.fire('Bought!', 'Thanks to buy in our store!', 'success');
      }
    });
  };

  return (
    <section className="flex h-full w-full flex-col px-3 py-6">
      <div>
        {cart.length > 0 ? (
          <>
            <table className="w-full lg:mx-auto lg:max-w-[80%]">
              <thead>
                <tr className="underline md:text-lg">
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(({ id, title, img, price, discount, ammount }) => {
                  return (
                    <tr
                      className="relative border-b-2"
                      key={id}>
                      {/* Image and Title */}
                      <td
                        className="flex h-[100px] w-full items-center justify-between gap-3 hover:cursor-pointer md:h-full md:justify-evenly lg:justify-center lg:gap-10"
                        onClick={() => navigate(`/product/${id}`)}>
                        <div className="flex h-full w-[80px] items-center sm:w-[120px] md:w-[150px]">
                          <img
                            className="h-[80%] w-full"
                            src={img}
                            alt={title}
                          />
                        </div>
                        <div className="w-[50%] max-w-[100px] sm:max-w-[150px]">
                          <h3 className="text-xs font-bold capitalize sm:text-sm md:text-base lg:text-lg">
                            {title?.toLowerCase()}
                          </h3>
                        </div>
                      </td>

                      {/* Price */}
                      <td className="h-[100px] w-[60px] text-center">
                        <span className="font-bold lg:text-lg">${price}</span>
                      </td>

                      {/* Ammount */}
                      <td className="h-[100px]">
                        <AmmountTableData
                          id={id}
                          title={title}
                          img={img}
                          price={price}
                          ammount={ammount}
                          discount={discount}
                        />
                      </td>

                      <td className="h-[100px] w-[60px] text-center">
                        <span className="font-bold lg:text-lg">${ammount * price}</span>
                      </td>

                      <td
                        className="hover:cursor-pointer"
                        onClick={() => onProductDelete(id)}>
                        <CartTrashIcon
                          className="mx-auto h-[1.2rem] w-[1.2rem]"
                          viewBox="0 .5 16 16"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="my-10 flex flex-col gap-6 rounded-lg border-2 bg-gray-200 p-6 text-center sm:mx-auto sm:max-w-[500px]">
              <h2 className="text-xl font-bold">Cart Totals</h2>
              <div className="flex justify-between">
                <span className="text-lg font-bold">Total:</span>
                <span className="text-lg font-bold">
                  ${cart.reduce((acum, current) => acum + current.ammount * current.price, 0)}
                </span>
              </div>
              <button
                className="mx-auto h-[40px] w-[80%] rounded-xl bg-darkGray px-4 font-bold text-white"
                onClick={onCartBuy}>
                Buy Cart
              </button>
            </div>
          </>
        ) : (
          <EmptyCartSection />
        )}
      </div>
    </section>
  );
};
