// src/router.jsx
import IndexPage from '@pages/users/IndexPage';
import UserDetailPage from '@pages/users/UserDetailPage';
import UsersPage from '@pages/users/UsersPage';
import { userMenuData } from '@shared/consts/users/menuData';
import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router';

// 1) 루트 라우트
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
    </>
  ),
});

// 2) 레이아웃 라우트 (IndexPage가 레이아웃 역할을 함)
const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'layout',
  component: IndexPage,
});

// 3) 자식 라우트들
const indexRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '/',
  component: () => <div>홈 화면입니다. 사이드바 메뉴를 선택해주세요.</div>,
  beforeLoad: () => ({
    menuData: userMenuData, // 기본 메뉴
  }),
});

const userRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '/userInfo',
  component: UsersPage,
  beforeLoad: () => ({
    menuData: userMenuData, // 사용자 관리용 메뉴 (필요시 다른 데이터 가능)
  }),
});

const userDetailRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '/userInfo/$userId',
  component: UserDetailPage,
  beforeLoad: () => ({
    menuData: userMenuData,
  }),
});

// 4) 라우터 인스턴스 생성
export const router = createRouter({
  routeTree: rootRoute.addChildren([
    layoutRoute.addChildren([indexRoute, userRoute, userDetailRoute]),
  ]),
});
