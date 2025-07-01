import Link from "next/link";
import React from 'react'

const page = () => {
  return (
    <div className="p-5 space-y-4">
      <h1 className="text-3xl font-bold text-gray-800">Our Services</h1>

      <p className="text-gray-600">Explore the services we offer. Click below to learn more.</p>

      <Link href="/services/web-dev" className="text-blue-600 underline hover:text-blue-800">
        Web Development
      </Link>
    </div>
  );
};

export default page;

