"use client"
import { House } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="m-5 space-y-4">
      <h1 className="text-4xl font-bold">About us</h1>

      <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
        <House className="mr-2" />Home</Link>
    </div>
  );
};

export default withAuth(page);

