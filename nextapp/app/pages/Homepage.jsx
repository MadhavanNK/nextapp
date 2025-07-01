 "use client";
import Header from "@/components/common/Header";
import Link from "next/link";

const Homepage = () => {
  const name = "Madhavan";

  const handleClick = () => {
    alert("hey how are you");
  };

  return (
    <div className="m-4 space-y-4">
      <Header profile={name} />

      <h1 className="text-2xl font-bold">Hi, {name}</h1>

      <button
        onClick={handleClick}
        className="bg-red-600 text-white px-4 py-2 rounded">Click Me</button>

      <div>
        <Link href="/about" className="text-blue-600 underline">Go to About</Link>
      </div>
    </div>
  );
};

export default Homepage;
