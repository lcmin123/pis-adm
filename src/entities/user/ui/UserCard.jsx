import { mapUserSexToLabel } from '@entities/user';
import pepe from '@shared/assets/pepe.png';

export const UserCard = ({ user, actionSlot }) => {
  if (!user) return <p>사용자를 찾을 수 없습니다.</p>;

  return (
    <>
      <img src={pepe} alt="pepe" className="h-24 w-20" />
      <p>ID: {user.id}</p>
      <p>체육인 번호: {user.ath_no ? user.ath_no : '체육인 번호를 생성하세요'}</p>
      <p>이름: {user.name}</p>
      <p>생년월일: {user.birth}</p>
      <p>성별: {mapUserSexToLabel(user.sex)}</p>
      {actionSlot}
    </>
  );
};
