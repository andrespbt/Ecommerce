import IconCart from '@/assets/images/icon-cart.svg';
import ImageAvatar from '@/assets/images/image-avatar.png';

export const Right = () => {
  return (
    <div className='flex'>

        <button>
            <img className='h-6 mr-10' src={ IconCart } alt="Icon cart" />
        </button>

        <button>
            <img className='h-[3.5rem] hover:border-orange hover:border-solid hover:border-2 rounded-full' src={ ImageAvatar } alt="Avatar image" />
        </button>

    </div>
  )
}
