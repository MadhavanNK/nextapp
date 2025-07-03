"use client";

import React from "react";
import Link from "next/link";
import { SignInWithGoogle } from "@/firebase";

const Header = () => {
  
  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-md bg-red">
      
      <div className="text-xl font-bold">Logo</div>

    
      <nav className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
      </nav>

    
      <button onClick={SignInWithGoogle}className="border px-4 py-2 rounded hover:bg-red-500 transition">
         Sign in with Google
      </button>
    </header>
  );
};

export default Header;


