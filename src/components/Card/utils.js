const dropHMS = (date) => {
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0, 0);
};
  
function createdOn(date) {
  const today = new Date();
  const yesterday = new Date();
  const roomLastMessageDate = new Date(date);
  
  yesterday.setDate(today.getDate() - 1);
  
  const h = roomLastMessageDate.getHours();
  const m = roomLastMessageDate.getMinutes();
  const d = new Intl.DateTimeFormat('ru').format(roomLastMessageDate);
  
  dropHMS(today);
  dropHMS(yesterday);
  dropHMS(roomLastMessageDate);
  
  if (date) {
    if (today.getTime() === roomLastMessageDate.getTime()) {
      return `Сегодня в ${h}:${m < 10 ? `0${m}` : `${m}`}`;
    }
    if (yesterday.getTime() === roomLastMessageDate.getTime()) {
      return `Вчера в ${h}:${m < 10 ? `0${m}` : `${m}`}`;
    }
    return `${d} в ${h}:${m < 10 ? `0${m}` : `${m}`}`;
  }
}
  
export default createdOn;