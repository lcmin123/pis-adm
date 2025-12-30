import { Header, HeaderInfo } from '@/widgets';
import Sidebar from '@/widgets/SideBar';

export default function IndexPage() {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header />
      <HeaderInfo />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto bg-white p-6">
          {/* 메인 콘텐츠 영역 */}
          <h2 className="text-2xl font-bold">콘텐츠 영역</h2>
        </main>
      </div>
    </div>
  );
}
