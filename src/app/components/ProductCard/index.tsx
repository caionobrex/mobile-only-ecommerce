import { IProductCardProps } from "./types"
import Image  from "next/image"

export const ProductCard = ({ product }: IProductCardProps) => {
  return (
    <div className="p-3 bg-white shadow-lg rounded-xl">
      <div className="relative h-44">
        <Image src={product.img} layout="fill" alt="" objectFit="cover" className="rounded-xl" />
      </div>
      <div className="mt-3">
        <h1 className="text-gray-400">{product.name}</h1>
        <span className="font-semibold mt-1 inline-block">{product.price.toLocaleString('pt-BR', { currency: 'BRL', style: 'currency' })}</span>
      </div>
    </div>
  )
}