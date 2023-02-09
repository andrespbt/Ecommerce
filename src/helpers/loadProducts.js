import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

export const loadLikedProducts = async (uid = '') => {
  if (!uid) throw new Error("The user's uid doesn't exists");

  const docs = await getDocs(collection(FirebaseDB, `${uid}/ecommerce/likedProducts`));

  const likedProducts = [];

  docs.forEach(doc => {
    likedProducts.push({ firebaseId: doc.id, ...doc.data() });
  });

  return likedProducts;
};
