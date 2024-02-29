import React from "react"

type SnackGridItemProps = {
  id: string
  title: string
  price: string
  category: string
  selectedCategory: string
  snackURL: string
}

export function SnackGridItem({
  id,
  title,
  price,
  category,
  selectedCategory,
  snackURL,
}: SnackGridItemProps) {
  const set = new Set(category);

  if (set.has(selectedCategory)) {
    return (
      <div className="flex flex-col gap-2">
        <a href={`/watch?v=${id}`} className="relative aspect-video">
          <img src={snackURL} alt='Snack' className="block w-full h-96 object-cover rounded-xl"/>
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
}