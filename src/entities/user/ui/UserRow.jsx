export const UserRow = ({ user, onClick }) => {
  return (
    <li onClick={onClick} style={{ cursor: 'pointer' }}>
      {user.id} {user.name} {user.birth} {user.sex === 1 || user.sex === '1' ? '남성' : '여성'}
    </li>
  );
};
