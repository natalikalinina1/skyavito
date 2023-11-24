import Button from "../../Buttons/Button";
import TextArea from "../../InputForm/TextArea";
import * as S from "./reviewsModal.styled";
import { useAddReviewMutation } from '../../../features/reviews/reviewApi'
import { useState, useEffect, useref} from 'react'
import { useParams } from 'react-router-dom'

const AddReview = () => {
  const { id } = useParams()
  const [review, setReview] = useState('')
  const [isActive, setIsActive] = useState(false)

  const handleChange = (event) => {
    setReview(event.target.value)
    setIsActive(true)
  }

  const [addReview, { isLoading, isSuccess, isError, error }] =
    useAddReviewMutation(Number(id))

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await addReview({ id: id, text: review })
      console.log(response)
      setIsActive(false)
    } catch (err) {
      console.log(err)
    }
    event.target.reset()
  }
  useEffect(() => {
    if (review === '') {
      setIsActive(false)
    }
  }, [review])


  useEffect(() => {
    if (isSuccess) {
      console.log('review submitted')
      setReview('')
    }
  }, [isSuccess])

  return (
    <S.AddReviewContainer onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor="review">Добавить отзыв</label>
      <TextArea placeholder={'Введите отзыв'}
        name="review"
        id="review"
        onChange={(event) => handleChange(event)}/>

      <Button  width="181px" type="submit" disabled={!isActive}>
        Опубликовать </Button>
    </S.AddReviewContainer>
  );
};

export default AddReview;
