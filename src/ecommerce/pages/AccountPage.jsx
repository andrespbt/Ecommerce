import { useSelector } from 'react-redux';
import {
  CartInfoSection,
  LikeInfoSection,
  AccountInfoSection,
  BuysInfoSection,
  EmptyAccountInfoSection,
} from '../components/main/account';
import { EcommerceLayout } from '../layout';

export const AccountPage = () => {
  const { likes, cart, buys } = useSelector(state => state.ecommerce);
  const { email } = useSelector(state => state.auth);

  return (
    <EcommerceLayout>
      <main className={`${email ? '' : 'flex items-center justify-center'}`}>
        {email ? (
          <>
            <AccountInfoSection />
            {cart.length > 0 && (
              <CartInfoSection
                cart={cart}
                likes={likes}
              />
            )}

            {likes.length > 0 && (
              <LikeInfoSection
                cart={cart}
                likes={likes}
              />
            )}

            {buys.length > 0 && (
              <BuysInfoSection
                buys={buys}
                likes={likes}
                cart={cart}
              />
            )}
          </>
        ) : (
          <EmptyAccountInfoSection />
        )}
      </main>
    </EcommerceLayout>
  );
};
