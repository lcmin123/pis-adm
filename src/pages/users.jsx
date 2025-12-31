import { userMenuData } from '@/shared/consts/menuData';
import { Header, HeaderInfo, Sidebar } from '@/widgets';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/users')({
  component: UsersLayout,
});

function UsersLayout() {
  //const location = useLocation();

  // TODO: 실제 로직에 따라 menuData를 선택하는 로직을 구현해야 합니다.
  // 현재는 예시로 userMenuData를 그대로 사용합니다.
  const menuData = userMenuData;

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
