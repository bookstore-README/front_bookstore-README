

export const checkEmail = () => /[a-z0-9]+@[a-z]+.[a-z]{2,3}/i  
export const checkPassword = () => /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/i
export const checkNickName = () => /^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]{3,8}$/i