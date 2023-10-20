import Image from "next/image"
import HomeIcon from '../../../assets/icons/home.svg'
import ChatIcon from '../../../assets/icons/chat.svg'
import CartIcon from '../../../assets/icons/cart.svg'
import WishListIcon from '../../../assets/icons/wishList.svg'
import ProfileIcon from '../../../assets/icons/profile.svg'

const items = [
  {
    name: 'Home',
    icon: HomeIcon
  },
  {
    name: 'ChatIcon',
    icon: ChatIcon
  },
  {
    name: 'CartIcon',
    icon: CartIcon
  },
  {
    name: 'WishListIcon',
    icon: WishListIcon
  },
  {
    name: 'ProfileIcon',
    icon: ProfileIcon
  },
]

export const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full border-t py-6 z-50 bg-white">
      <div className="custom-container">
        <ul className="flex items-center justify-between">
          {items.map((item) => (
            <li key={item.icon}>
              <button type="button">
                <Image src={item.icon} alt={item.name} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}