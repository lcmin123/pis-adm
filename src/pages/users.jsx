import { userAppMenuData, userHomeMenuData, userRegiMenuData, userSysMenuData } from '@/shared/consts/menuData';
import { Header, HeaderInfo, Sidebar } from '@/widgets';
import { createFileRoute, Outlet, useLocation } from '@tanstack/react-router';

export const Route = createFileRoute('/users')({
  component: UsersLayout,
});

function UsersLayout() {
  const location = useLocation();
  console.log('pathname', location.pathname);

  let menuData = userHomeMenuData;
  if (location.pathname.startsWith('/users/sys')) {
    menuData = userSysMenuData;
  } else if (location.pathname.startsWith('/users/app')) {
    menuData = userAppMenuData;
  } else if (location.pathname.startsWith('/users/regi')) {
    menuData = userRegiMenuData;
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header />
      <HeaderInfo />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar menuData={menuData} />
        <main className="flex-1 overflow-auto bg-white p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
