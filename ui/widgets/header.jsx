import { router } from '@app/router';
import { HomeIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className='h-16'>
      <nav className="flex justify-between items-center">
        <div className="flex items-center">
          <HomeIcon className="size-6 cursor-pointer m-2" onClick={() => router.navigate({ to: '/' })}/>
          <h1>경기인관리시스템</h1>
        </div>
        <div>
          <ul  className="flex flex-row">
            <li>
              <button onClick={() => router.navigate({ to: '/' })}>홈</button>
            </li>
            <li>
              <button onClick={() => router.navigate({ to: '/' })}>시스템관리</button>
            </li>
            <li>
              <button onClick={() => router.navigate({ to: '/' })}>신청관리</button>
            </li>
            <li>
              <button onClick={() => router.navigate({ to: '/userInfo' })}>등록관리</button>
            </li>
          </ul>
        </div>
        <div className="header_right flex items-center space-x-2 m-1">
          <div>화면 도움말</div>
          <div>| 화면 ID |</div>
          <div>체육정보시스템</div>
        </div>
      </nav>
    </header>
  );
}
