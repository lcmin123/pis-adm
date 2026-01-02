const userHomeMenuData = [
  {
    title: '공지사항',
    items: [{ label: '공지사항관리', path: '/users/home/notice' }],
  },
];

const userSysMenuData = [
  {
    title: '코드관리',
    items: [
      { label: '공통코드관리', path: '/users/sys/common-code' },
      { label: '학교팀코드관리', path: '/users/sys/school-team-code' },
      { label: '프로그램관리', path: '/users/sys/program' },
    ],
  },
  {
    title: '사용자관리',
    items: [
      { label: '권한관리', path: '/users/sys/auth' },
      { label: '권한변경이력조회', path: '/users/sys/auth-history' },
    ],
  },
];

const userAppMenuData = [
  {
    title: '신청사이트관리',
    items: [
      { label: '공지사항관리', path: '/users/app/notice' },
      { label: 'FAQ관리', path: '/users/app/faq' },
      { label: 'Q&A관리', path: '/users/app/qna' },
      { label: '본인이력확인요청', path: '/users/app/history-check' },
      { label: '개인정보약관관리', path: '/users/app/privacy-policy' },
      { label: '신청조건관리', path: '/users/app/condition' },
      { label: '시도종목단체관리', path: '/users/app/sido-org' },
    ],
  },
];

const userRegiMenuData = [
  {
    title: '팀관리',
    items: [
      { label: '웹신청팀조회', path: '/users/regi/web-team' },
      { label: '팀정보관리', path: '/users/regi/team-info' },
      { label: '팀이력조회', path: '/users/regi/team-history' },
      { label: '팀임원관리', path: '/users/regi/team-executive' },
    ],
  },
  {
    title: '소속변경관리',
    items: [
      { label: '소속변경관리', path: '/users/regi/team-change' },
      { label: '활동재개선수조회', path: '/users/regi/resume-player' },
    ],
  },
  {
    title: '동호인/클럽관리',
    items: [
      { label: '웹신청클럽조회', path: '/users/regi/web-club' },
      { label: '클럽정보관리', path: '/users/regi/club-info' },
      { label: '웹신청동호인조회', path: '/users/regi/web-club-member' },
      { label: '동호인정보등록', path: '/users/regi/club-member-register' },
    ],
  },
  {
    title: '선수관리',
    items: [
      { label: '웹신청선수조회', path: '/users/regi/web-player' },
      { label: '등록비결제현황', path: '/users/regi/player-payment' },
      { label: '선수정보등록', path: '/users/regi/info' },
    ],
  },
  {
    title: '지도자관리',
    items: [
      { label: '웹신청지도자조회', path: '/users/regi/web-coach' },
      { label: '등록비결제현황', path: '/users/regi/coach-payment' },
      { label: '지도자정보등록', path: '/users/regi/coach-register' },
    ],
  },
  {
    title: '심판관리',
    items: [
      { label: '웹신청심판조회', path: '/users/regi/web-referee' },
      { label: '등록비결제현황', path: '/users/regi/referee-payment' },
      { label: '심판정보등록', path: '/users/regi/referee-register' },
    ],
  },
  {
    title: '선수관리담당자관리',
    items: [
      { label: '웹신청선수관리담당자조회', path: '/users/regi/web-manager' },
      { label: '등록비결제현황', path: '/users/regi/manager-payment' },
      { label: '선수관리담당자정보등록', path: '/users/regi/manager-register' },
    ],
  },
  {
    title: '개인번호통합',
    items: [{ label: '개인번호통합', path: '/users/regi/personal-number' }],
  },
];

export { userAppMenuData, userHomeMenuData, userRegiMenuData, userSysMenuData };
