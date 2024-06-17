import React from 'react';
import GridComponent from './GridComponent'; // Уверете се, че пътят е правилен
import { products } from '../data/products'; // Импортирайте данните

export default function BestSellerProducts() {
  return (
    <div className="bg-red-200 py-2 mx-auto md:px-10 w-full max-w-7xl flex flex-col overflow-x-hidden">
      <div className='flex flex-col items-center justify-center gap-5 mt-20'>
        <h2 className='text-4xl font-bold'>Best Seller Products</h2>
        <p className='text-lightGray text-base'>Check our best seller products on Elma website right now</p>
      </div>
      <div className='mt-10 w-full'>
        <GridComponent products={products} />
      </div>
    </div>
  );
}
