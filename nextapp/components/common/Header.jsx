const Header = ({ profile }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 shadow">
      <h1 className="text-xl font-semibold text-blue-600">Logo</h1>
      <p className="text-sm text-gray-700">Welcome, {profile}</p>
    </div>
  );
};

export default Header;

