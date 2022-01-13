import Link from 'next/link';
import React from 'react';

export const Navigation: React.FC = () => {
  return (
    <div className="flex justify-center bg-sky-200">
        <Link href="/"><a className="text-xl hover:text-white p-5">Home</a></Link>
        <Link href="/edit"><a className="text-xl hover:text-white p-5">Edit flats</a></Link>
        <Link href="/about"><a className="text-xl hover:text-white p-5">About</a></Link>
    </div>
  );
};
