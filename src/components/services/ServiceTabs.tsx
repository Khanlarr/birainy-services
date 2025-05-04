"use client";
import { JSX, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { TreeNode } from "@/@core/interfaces/services";

interface OpenItems {
  [key: number]: boolean;
}

const ServiceTabs = ({ data }: { data: TreeNode[] }) => {
  const [openItems, setOpenItems] = useState<OpenItems>({});
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeTab = searchParams.get("tab");

  const handleMainClick = (item: TreeNode) => {
    setOpenItems({ [item.id]: true });
    const params = new URLSearchParams(searchParams.toString());
    params.set("id", String(item.id));
    params.delete("tab");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleChildClick = (parentId: number, childId: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("id", String(parentId));
    params.set("tab", String(childId));
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const toggleItem = (id: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderMenuItems = (items: TreeNode[]): JSX.Element[] => {
    return items.map((item) => (
      <div
        key={item.id}
        className="px-2 rounded-lg bg-gray-100 overflow-hidden"
      >
        <div
          className="flex justify-between items-center p-4 cursor-pointer bg-gray-100"
          onClick={() => handleMainClick(item)}
        >
          <span className="text-black font-normal leading-snug text-[24px] font-ppneue sm:text-[20px] xs:text-[18px]">
            {item.title}
          </span>
          {item.children && item.children.length > 0 && (
            <button
              className="w-6 h-6 flex items-center justify-center text-xl text-gray-600 rounded-md hover:bg-gray-200 transition-colors duration-200 focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                toggleItem(item.id);
              }}
            >
              {openItems[item.id] ? "−" : "+"}
            </button>
          )}
        </div>

        {item.children && item.children.length > 0 && openItems[item.id] && (
          <div className="pl-4 pb-2 flex flex-col gap-2">
            {item.children.map((child) => (
              <div key={child.id}>
                <span
                  className={`text-[20px] font-ppneue font-normal leading-[1.4] cursor-pointer ${
                    activeTab === String(child.id)
                      ? "text-black"
                      : "text-[rgba(0,0,0,0.48)]"
                  }`}
                  onClick={() => handleChildClick(item.id, child.id)}
                >
                  {child.title}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="p-4 sticky top-0 bg-white z-10">
      <div className="flex flex-col gap-2">{renderMenuItems(data)}</div>
    </div>
  );
};

export default ServiceTabs;
