import styled from 'styled-components';

export const StyledAddModal = styled.div`
  margin: 20px 50px 42px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 500px;

  input {
    margin-bottom: 20px;
  }

  textarea {
    margin-bottom: 20px;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 32px;
  line-height: 220%;
  margin: 20px 0 10px 0;
`;

export const Heading = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  margin: 0 0 4px 0;
`;

export const Images = styled.div`
  margin-bottom: 30px;
  position: relative;

  div {
    display: flex;
    gap: 10px;
  }

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.3);
  }
  input {
    position: absolute;
    transform: translate(-10000px);
  }
`;

export const UploadImageDiv= styled.div`
  width: 90px;
  height: 90px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.imgBackGround};
  cursor: pointer;

  &::after {
    content: url('/img/plus.png');
  }
`;
export const UploadedImage = styled.img`
  width: 90px;
  height: 90px;
  &:hover {
    opacity: 0.5;
    content: url('/img/cross.png');
    cursor: pointer;
  }
`;

export const Price = styled.div`
  position: relative;

  &::after {
    content: url('/img/ruble.png');
    position: absolute;
    top: 17px;
    right: 18px;
  }
`;
