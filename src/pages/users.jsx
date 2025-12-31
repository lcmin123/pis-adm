import { userAppMenuData, userHomeMenuData, userRegiMenuData, userSysMenuData } from '@/shared/consts/menuData';
import { Header, HeaderInfo, Sidebar } from '@/widgets';
import { createFileRoute, Outlet, useLocation } from '@tanstack/react-router';

export const Route = createFileRoute('/Users')({
  component: UsersLayout,
});

function UsersLayout() {
  const location = useLocation();
  console.log('pathname', location.pathname);

  // TODO: 실제 로직에 따라 menuData를 선택하는 로직을 구현해야 합니다.
  // 현재는 예시로 userMenuData를 그대로 사용합니다.
  let menuData = userHomeMenuData;
  if (location.pathname.startsWith('/Users/Sys')) {
    menuData = userSysMenuData;
  } else if (location.pathname.startsWith('/Users/App')) {
    menuData = userAppMenuData;
  } else if (location.pathname.startsWith('/Users/Regi')) {
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
