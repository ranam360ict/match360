import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className='container flex items-center justify-between'>
      <div>
        <Image
          width={200}
          height={100}
          alt='Image'
          src={'/logo1.png'}
        />
      </div>
      <div className='text-white w-[500px] flex justify-between items-center'>
        <Link href={'/login'}>a</Link>
        <Link
          href={'Home'}
          // className=' bg-red-200 px-2 border rounded-xl text-orange-800 hover:bg-red-100 text-lg'
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
