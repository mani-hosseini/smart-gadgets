import { useState, useRef, useLayoutEffect } from "react";
import { List, Smartphone, Fan, Circle, Gamepad2, Watch, Glasses, Headphones } from "lucide-react";

const categories = [
  { icon: Smartphone, label: "تلفن هوشمند" },
  { icon: Fan, label: "جارو هوشمند" },
  { icon: Circle, label: "حلقه هوشمند" },
  { icon: Gamepad2, label: "دسته‌های بازی" },
  { icon: Watch, label: "ساعت هوشمند" },
  { icon: Glasses, label: "عینک هوشمند" },
  { icon: Headphones, label: "هدفون بی‌سیم" },
];

const CategoryDropdown = () => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const btnRef = useRef(null);

  useLayoutEffect(() => { 
    if (btnRef.current) {
      setWidth(btnRef.current.offsetWidth);
    }
  }, [open]);

  return (
    <div className="relative">
      <button
        ref={btnRef}
        className="flex items-center gap-2 bg-[#e4e2fe] text-indigo-600 px-4 py-2 rounded-r-full rounded-2xl transition hover:cursor-pointer text-base md:gap-2 md:px-4 md:py-2 md:text-base max-md:gap-1 max-md:px-3 max-md:py-1.5 max-md:text-xs max-[898px]:gap-0.5 max-[898px]:px-2 max-[898px]:py-1 max-[898px]:text-[11px]"
        onClick={() => setOpen((o) => !o)}
      >
        <List size={20} />
        دسته‌بندی کالاها
      </button>
      {open && (
        <div
          className="absolute right-0 mt-2 z-10 bg-[#e4e2fe] text-indigo-600 rounded-2xl shadow-lg overflow-hidden w-full md:w-auto"
          style={{ width: width || undefined, minWidth: 160 }}
        >
          <div className="flex flex-col md:flex-row md:flex-wrap md:gap-0 md:space-x-0 md:space-y-0 md:whitespace-nowrap">
            {categories.map(({ icon: Icon, label }, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2 transition hover:bg-indigo-100 cursor-pointer rounded-2xl text-base md:gap-2 md:px-4 md:py-2 md:text-base max-md:gap-1 max-md:px-3 max-md:py-1.5 max-md:text-xs max-[898px]:gap-0.5 max-[898px]:px-2 max-[898px]:py-1 max-[898px]:text-[11px]"
                style={{whiteSpace: 'nowrap'}}
              >
                <Icon size={18} className="text-indigo-600" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown; 