const page = ({ params }) => {
  const { slug } = params;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Blog Slug:</h1>
      <p className="text-gray-700">{slug}</p>
    </div>
  );
};

export default page;

