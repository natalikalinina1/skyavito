export const getReviewsLength = (reviewsNum) => {
  if (reviewsNum === 0 && reviewsNum === null) {
    return '0 отзывов';
  } else if (reviewsNum === 1) {
    return '1 отзыв';
  } else if (reviewsNum >= 2 && reviewsNum <= 4) {
    return `${reviewsNum} отзыва`;
  } else {
    return `${reviewsNum} отзывов`;
  }
};