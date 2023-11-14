export const getPhoneMasked  = (phoneNumber) => {
  return `${phoneNumber.slice(0, 1)} ${phoneNumber.slice(1, 4)} XXX XX XX`;
}; //возвращает строку с номером где следующие три цифры заменяются на "XXX",

export const formatPhone = (phoneNumber) => {
  return `${phoneNumber.slice(0, 1)} ${phoneNumber.slice(
    1,
    4
  )} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7, 9)} ${phoneNumber.slice(
    9,
    11
  )}`; //разбивает номер на группы по одной, три, три, две и две цифры соответственно, и разделяя их пробелами.
};
