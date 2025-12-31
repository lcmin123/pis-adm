import { ComputerDesktopIcon } from '@heroicons/react/24/outline';

export default function Sidebar({ menuData }) {
  return (
    <aside className="h-full w-[250px] min-w-[250px] border-r border-gray-300 bg-[#f6f6f6]">
      {/* Sidebar Header */}
      <div className="flex h-[50px] items-center border-b border-gray-300 bg-[#ececec] px-5">
        <ComputerDesktopIcon className="mr-2 size-6 text-gray-700" />
        <span className="text-lg font-bold">Home</span>
      </div>

      {/* Sidebar Menu Groups */}
      <nav className="p-5">
        <ul className="space-y-6">
          {menuData.map((group) => (
            <li key={group.title} className="text-[1.1rem] font-bold text-gray-800">
              {group.title}
              <ul className="mt-2 ml-2 space-y-2 border-l-2 border-gray-200 pl-4 font-normal text-gray-600">
                {group.items.map((item) => (
                  <li key={item} className="cursor-pointer text-sm transition-all hover:font-bold hover:text-[#164194]">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
