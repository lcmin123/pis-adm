import { Header, HeaderInfo, Sidebar } from '@/widgets';
import { Outlet, useMatches } from '@tanstack/react-router';

export default function IndexPage() {
  const matches = useMatches();
  
  // 현재 활성화된 라우트들 중 context에 menuData가 있는 가장 마지막 라우트를 찾습니다.
  const currentMatch = [...matches].reverse().find((match) => match.context?.menuData);
  const menuData = currentMatch?.context?.menuData || [];

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <HeaderInfo />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar menuData={menuData} />
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
