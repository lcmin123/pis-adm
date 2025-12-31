import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/users/')({
  component: UsersIndexPage,
});

function UsersIndexPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold">사용자 관리 메인</h2>
      <p>좌측 메뉴를 선택해주세요.</p>
    </div>
  );
}
