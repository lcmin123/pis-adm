// React 컴포넌트 내부
export default function DocsButton() {
  return (
    // target="_blank"를 쓰면 새 탭에서 열려서 개발할 때 더 편합니다.
    <a
      href="/api-docs"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-style..." // 스타일 적용
    >
      API 명세서
    </a>
  );
}
