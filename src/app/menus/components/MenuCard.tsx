import React from 'react';
import { MenuItem } from '../types';
import Image from 'next/image';
interface MenuCardProps {
  item: MenuItem;
  onViewMore: () => void;
}

export default function MenuCard({ item, onViewMore }: MenuCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
        width={500}
        height={192}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMsqAcAAWUA8f6XWZkAAAAASUVORK5CYII="
        priority
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
        <p className="text-gray-600 mb-2">{item.shortDescription}</p>
        <p className="text-lg font-bold mb-4">${item.price.toFixed(2)}</p>
        <button
          onClick={onViewMore}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors hover:bg-primary/80 duration-300"
        >
          View More
        </button>
      </div>
    </div>
  );
} 