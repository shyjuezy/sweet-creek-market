import React from 'react';
import { MenuItem } from '../types';
import { XIcon } from 'lucide-react';
import Image from 'next/image';
interface ModalProps {
  item: MenuItem;
  onClose: () => void;
}

export default function Modal({ item, onClose }: ModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg max-w-2xl w-full max-h-[97vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex justify-between items-start">
          <h2 className="text-2xl font-bold">{item.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <XIcon className="h-6 w-6 transition-transform duration-300 hover:scale-110" />
          </button>
        </div>
        <Image
          src={item.image}
          alt={item.name}
          className="w-full h-64 object-cover rounded-lg my-4"
          width={500}
          height={192}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMsqAcAAWUA8f6XWZkAAAAASUVORK5CYII="
        />
        <p className="text-xl font-semibold mb-2">${item.price.toFixed(2)}</p>
        <p className="mb-4">{item.fullDescription}</p>
        <div>
          <h3 className="font-semibold mb-2">Ingredients:</h3>
          <ul className="list-disc list-inside">
            {item.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 