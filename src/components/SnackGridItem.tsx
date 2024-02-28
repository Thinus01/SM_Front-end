import React from "react"

type SnackGridItemProps = {
  id: string
  title: string
  price: string
  snackURL: string
}

export function SnackGridItem({
  id,
  title,
  price,
  snackURL,
}: SnackGridItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <a href={`/watch?v=${id}`} className="relative aspect-video">
        <img src={snackURL} alt='Snack' className="block w-full h-full object-cover rounded-xl"/>
      </a>
      <div>
        <a className="font-bold">
          <h5 className="w-fit">{title}</h5>
          <div className=" bg-secondary-text w-fit text-tecondary text-sm px-0.5 rounded">
            {price}
          </div>
        </a>
      </div>
    </div>
  )
}