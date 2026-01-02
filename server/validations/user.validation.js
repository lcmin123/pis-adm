const yup = require('yup');

const createUserSchema = yup.object({
  name: yup.string().required('이름은 필수 항목입니다.'),
  birth: yup
    .string()
    .length(6, '생년월일은 6자리여야 합니다.')
    .matches(/^\d+$/, '생년월일은 숫자만 입력 가능합니다.')
    .required('생년월일은 필수 항목입니다.'),
  sex: yup
    .mixed()
    .oneOf([1, 2, '1', '2'], '성별은 1(남성) 또는 2(여성)만 가능합니다.')
    .required('성별은 필수 항목입니다.'),
  id: yup.string().required('ID는 필수 항목입니다.'),
});

const updateAthNoSchema = yup.object({
  ath_no: yup
    .string()
    .matches(/^\d{6}-[A-Z0-9]+$/, '체육인 번호 형식이 올바르지 않습니다. (예: 990101-A1234)')
    .required('체육인 번호는 필수 항목입니다.'),
});

module.exports = {
  createUserSchema,
  updateAthNoSchema,
};
