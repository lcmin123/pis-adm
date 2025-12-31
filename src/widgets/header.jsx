import { HomeIcon } from '@heroicons/react/24/outline';
import { useNavigate } from '@tanstack/react-router';

export default function Header() {
  const navigate = useNavigate();

  // 네비게이션 아이템 공통 스타일
  const navItemClass =
    'h-full flex items-center px-3 text-[1.1rem] font-bold text-white border-b-4 border-transparent hover:border-white transition-colors duration-200 cursor-pointer';

  return (
    <header className="h-[9%] min-h-[70px] bg-linear-to-r from-[#164194] to-[#36b9c6] text-white shadow-md">
      <nav className="flex h-full items-center justify-between px-[30px]">
        {/* Left: 로고 및 시스템 명 */}
        <div className="flex items-center">
          <HomeIcon className="mr-2 size-6 cursor-pointer" onClick={() => navigate({ to: '/' })} />
          <h1 className="text-xl font-bold">경기인관리시스템</h1>
        </div>

        {/* Center: 메인 메뉴 */}
        <div className="h-full">
          <ul className="flex h-full flex-row space-x-4">
            <li className="h-full">
              <button className={navItemClass} onClick={() => navigate({ to: '/users' })}>
                홈
              </button>
            </li>
            <li className="h-full">
              <button className={navItemClass} onClick={() => navigate({ to: '/' })}>
                시스템관리
              </button>
            </li>
            <li className="h-full">
              <button className={navItemClass} onClick={() => navigate({ to: '/' })}>
                신청관리
              </button>
            </li>
            <li className="h-full">
              <button className={navItemClass} onClick={() => navigate({ to: '/users/Info' })}>
                등록관리
              </button>
            </li>
          </ul>
        </div>

        {/* Right: 유틸리티 메뉴 */}
        <div className="flex items-center space-x-5 text-sm font-light opacity-90">
          <div className="cursor-pointer hover:underline">화면 도움말</div>
          <div className="text-gray-200">| 화면 ID |</div>
          <div>체육정보시스템</div>
        </div>
      </nav>
    </header>
  );
}
