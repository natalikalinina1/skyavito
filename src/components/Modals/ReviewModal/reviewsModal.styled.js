import styled from 'styled-components'

export const StyledReview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;

  margin: 20px 12px 56px 50px;
  padding-right: 80px;

  max-width: 652px;
  max-height: 900px;
  overflow: hidden;
  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.15) rgba(0, 0, 0, 0.05);

  &::-webkit-scrollbar {
    width: 5px;
    margin-left: 24px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.15);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }
  @media (max-height: 1000px) {
    max-height: 600px;
  }
  @media (max-height: 900px) {
    max-height: 500px;
  }
  @media (max-height: 600px) {
    max-height: 400px;
  }
  @media (max-width: 1000px) {
    width: 500px;
  }
  @media (max-width: 700px) {
    width: 400px;
  }
`

export const Title = styled.h1`
  font-weight: 500;
  font-size: 32px;
  line-height: 220%;
`

export const ReviewContainer = styled.div`
  display: flex;
  justify-content:  flex-start;
  gap: 12px;
  margin-top: 30px;
  width: 100%;
  padding: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.imgBackGround};
    border-radius: 5px;
  }

  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 200%;
    color: ${({ theme }) => theme.colors.black};
    margin: 0;
  }
`

export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  background: ${({ theme }) => theme.colors.imgBackGround};
`

export const ReviewDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`

export const NameDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 200%;
    color: #5f5f5f;
  }
`

export const ReviewContent = styled.div`
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.black};
  }
`

export const AddReviewContainer = styled.form`
  display: flex;
  flex-direction: column;

  gap: 14px;

  label {
    font-weight: 600;
    font-size: 16px;
    line-height: 200%;
    color: ${({ theme }) => theme.colors.black};
  }

  textarea {
    width: 652px;
    height: 100px;
    text-align: start;
  }
`
