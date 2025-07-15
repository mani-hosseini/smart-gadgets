import CategoryDropdown from "./CategoryDropdown";
import SearchBox from "./SearchBox";
import UserActions from "./UserActions";

const Mainbar = () => (
  <div className="w-full flex justify-center pb-2 pt-4 max-[1000px]:pt-2 max-[898px]:pt-1 max-[836px]:pt-0.5 max-[1000px]:pb-1 max-[898px]:pb-0.5 max-[836px]:pb-0">
    <div className="w-[90%] flex items-center justify-between gap-4 max-[1000px]:gap-2 max-[898px]:gap-1 max-[836px]:gap-0.5">
      <div className="flex items-center gap-4 max-[1000px]:gap-2 max-[898px]:gap-1 max-[836px]:gap-0.5">
        <CategoryDropdown />
        <SearchBox />
      </div>
      <UserActions />
    </div>
  </div>
);

export default Mainbar;
