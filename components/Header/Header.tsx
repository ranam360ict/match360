import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className='px-20 mt-2 flex items-center justify-between'>
      <div>
        <Image
          width={200}
          height={100}
          alt='Image'
          src={'/logo1.png'}
        />
      </div>
      <div className='text-white w-[500px] flex justify-between'>
        <Link href={'Home'}>Home</Link>
        <Link href={'Home'}>About</Link>
        <Link href={'Home'}>Marriage</Link>
        <Link href={'Home'}>Blog</Link>
        <Link href={'Home'}>News</Link>
        <Link href={'Home'}>Contact Us</Link>
        <Link
          href={'Home'}
          className='bg-red-200 px-2 border rounded-xl shadow-emerald-300 text-blue-500'
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
