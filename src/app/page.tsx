import BellIcon from '../assets/icons/bell.svg'
import Image from 'next/image'
import SearchIcon from '../assets/icons/search.svg'
import RightArrow from '../assets/icons/rightArrow.svg'
import { CategoriesSlider } from './components/CategoriesSlider'
import { ProductCard } from './components/ProductCard'
import { RoomsSlider } from './components/RoomsSlider'
import { BottomNavigation } from './components/BottomNavigation'

const products = [
  {
    name: 'Sverom chair',
    img: '/products/chair.svg',
    price: 400,
    discountedPrice: 300,
  },
  {
    name: 'Sverom chair',
    img: '/products/chairAndTable.svg',
    price: 400,
    discountedPrice: 300,
  },
  {
    name: 'Sverom chair',
    img: '/products/ektorpSofa.svg',
    price: 400,
    discountedPrice: 300,
  },
  {
    name: 'Sverom chair',
    img: '/products/janSofa.svg',
    price: 400,
    discountedPrice: 300,
  },
]

export default function Home() {
  return (
    <main className="pt-14 pb-40">
      <div className='custom-container'>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">
            Explore What <br /> Your Home Needs
          </h1>
          <button type="button">
            <Image src={BellIcon} alt="orange icon bell" />
          </button>
        </div>

        <div className="mt-6 flex border rounded-lg px-2">
          <Image src={SearchIcon} alt="serch icon" />
          <input
            type="text" 
            placeholder="Chair, desk, lamp, etc"
            className="w-full p-3 outline-none"
          />
        </div>
      </div>

      <div className='mt-8'>
        <div className='flex justify-between custom-container'>
          <h2 className='text-xl font-semibold'>Categories</h2>
          <button type="button" className='text-primary flex items-center gap-x-3'>See all <Image src={RightArrow} alt="right arrow svg" /></button>
        </div>
        <div className='mt-4 pl-5'>
          <CategoriesSlider />
        </div>
      </div>

      <div className="mt-8 custom-container relative px-6 py-8 rounded-xl">
        <div className="flex flex-col gap-y-4 text-secondary">
          <span className="text-lg">
            High quality sofa <br /> started
          </span>
          <div className="flex flex-col gap-y-1">
            <div className="flex gap-x-2 items-center">
              <span className='font-bold text-3xl'>70%</span>
              <span className='text-xl'>off</span>
            </div>
            <div>
              <button type="button" className="text-left">See all items</button>
            </div>
          </div>
        </div>
        <Image src="/sofaBanner.svg" layout="fill" alt="" objectFit="cover" className="rounded-xl -z-10" />
      </div>

      <div className="mt-8 custom-container">
        <div className='flex justify-between'>
          <h2 className='text-xl font-semibold'>Popular</h2>
          <button type="button" className='text-primary flex items-center gap-x-3'>See all <Image src={RightArrow} alt="right arrow svg" /></button>
        </div>
        <ul className="mt-6 grid grid-cols-2 gap-5">
          {products.map((product) => (
            <li key={product.name}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 custom-container relative px-6 py-8 rounded-xl">
        <div className="flex flex-col gap-y-1 text-primary">
          <span className="text-3xl font-semibold">
            Sale
          </span>
          <span className="text-xl">
            All chair up to <span className="font-bold text-2xl">70%</span> off
          </span>
        </div>
        <Image src="/chairBanner.svg" layout="fill" alt="" objectFit="cover" className="rounded-xl -z-10" />
      </div>

      <div className='mt-8'>
        <div className='custom-container'>
          <h2 className='text-xl font-semibold'>Rooms</h2>
          <p className="text-gray-400 mt-1">
            Furniture for every corners in your home
          </p>
        </div>
        <div className='mt-4 pl-5'>
          <RoomsSlider />
        </div>
      </div>

      <BottomNavigation />
    </main>
  )
}
