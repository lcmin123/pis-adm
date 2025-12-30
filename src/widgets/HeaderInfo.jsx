import { PhoneIcon } from '@heroicons/react/24/solid';

export default function HeaderInfo() {
  return (
    <div className="flex h-12 w-full items-center justify-between border-b border-gray-300 bg-white px-5 text-sm">
      {/* Left: 사용자 정보 및 타이머 */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <span className="font-bold">이창민</span>
          <span className="ml-1 text-gray-600">(협력업체)</span>
        </div>

        <button className="rounded-full border border-gray-300 px-3 py-0.5 transition-colors hover:bg-gray-100">
          로그아웃
        </button>

        <div className="flex items-center space-x-2">
          <span className="font-bold text-red-600">29:59</span>
          <button className="rounded-full border border-gray-300 px-3 py-0.5 transition-colors hover:bg-gray-100">
            로그인 연장
          </button>
        </div>
      </div>

      {/* Right: 연락처 정보 */}
      <div className="flex items-center text-gray-700">
        <PhoneIcon className="mr-1 size-4 text-gray-500" />
        <span className="font-medium">02-2144-8141</span>
      </div>
    </div>
  );
}
