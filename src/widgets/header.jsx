import { HomeIcon } from '@heroicons/react/24/outline';
import { useNavigate } from '@tanstack/react-router';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="h-16">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <HomeIcon className="m-2 size-6 cursor-pointer" onClick={() => navigate({ to: '/' })} />
          <h1>경기인관리시스템</h1>
        </div>
        <div>
          <ul className="flex flex-row">
            <li>
              <button onClick={() => navigate({ to: '/' })}>홈</button>
            </li>
            <li>
              <button onClick={() => navigate({ to: '/' })}>시스템관리</button>
            </li>
            <li>
              <button onClick={() => navigate({ to: '/' })}>신청관리</button>
            </li>
            <li>
              <button onClick={() => navigate({ to: '/userInfo' })}>등록관리</button>
            </li>
          </ul>
        </div>
        <div className="header_right m-1 flex items-center space-x-2">
          <div>화면 도움말</div>
          <div>| 화면 ID |</div>
          <div>체육정보시스템</div>
        </div>
      </nav>
    </header>
  );
}
