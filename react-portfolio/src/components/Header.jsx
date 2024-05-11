import React from 'react';

function Header() {
  return (
    <header className="bg-green-500 text-white py-4">
      <div className="container mx-auto px-4">
        <h1 className=" text-center text-4xl font-bold">Web Portfolio</h1>
        <p className="text-lg mt-2 flex justify-end">
  <a href="/blog" className="mr-4 hover:text-gray-300">Blog</a>
  <a href="mailto:youremail@example.com" className="mr-4 hover:text-gray-300">Email</a>
  <a href="/skills" className="hover:text-gray-300">Skills</a>
</p>
      </div>
    </header>
  );
}

export default Header;