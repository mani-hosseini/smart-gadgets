import { Search } from "lucide-react";

const SearchBox = () => (
  <div className="flex items-center bg-gray-100 rounded px-2 py-2 w-full md:w-[400px]">
    <input
      type="text"
      className="bg-transparent outline-none flex-1 px-2 text-xs md:text-sm w-full"
      placeholder="محصول خود را جستجو کنید"
    />
    <Search size={13} className="text-blue-600 max-[868px]:w-3 max-[868px]:h-3" />
  </div>
);

export default SearchBox; 