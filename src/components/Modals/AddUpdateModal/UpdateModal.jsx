import Input from "../../InputForm/InputForm";
import Button from "../../Buttons/Button";
import TextArea from "../../InputForm/TextArea";
import * as S from "./addUpdateModal.styled";
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../../../features/api/apiSlice'
import { useState, useEffect } from 'react'
import {
  useChangeAddMutation,
  useDeleteAddImageMutation,
  useUploadImageToAddMutation,
} from '../../../features/card/cardApi'
import { useParams } from 'react-router-dom'
import { getCurrentAdd } from '../../../features/card/cardSlice'
import { isModalOpen } from '../../../features/modal/modalSlice'


const UpdateModal = () => {
  const { id } = useParams()
  const add = useSelector((state) => state.card?.currentAdd)
  const dispatch = useDispatch()
  const imgLimit = 5
  const imgQuality = add.images.length

  const [isDisable, setIsDisable] = useState(false)

  const [values, setValues] = useState({
    title: add.title,
    description: add.description,
    files: [],
    price: add.price,
  })

  const [changeAdd] = useChangeAddMutation()

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await changeAdd({ id: id, body: values })

      console.log(response)
      dispatch(getCurrentAdd(response.data))
      dispatch(isModalOpen(false))
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <S.StyledAddModal>
      <S.Title>Редактировать объявление</S.Title>
      <S.Heading>Название</S.Heading>
      <Input
        type="text"
        width={'100%'}
        placeholder={add.title}
        onChange={(event) => {
          setValues({ ...values, title: event.target.value })
        }}
      />

      <S.Heading>Описание</S.Heading>
      <TextArea
        width={'100%'}
        height={'200px'}
        placeholder={add.description}
        onChange={(event) => {
          setValues({ ...values, description: event.target.value })
        }}
      />

      <S.Images>
        <div>
          <S.Heading>Фотографии товара</S.Heading>
          <span>не более 5 фотографий</span>
        </div>
        <div>
        <input
            type="file"
            multiple
            id="images"
            //onChange={(event) => handlePictureChange(event)}
          />

     {add?.images.map((img) => (
            <S.UploadedImage
              src={`${BASE_URL}${img.url}`}
              key={img.id}
              alt={add.title}
            />
          ))}
    {Array(imgLimit - imgQuality)
            .fill()
            .map((i) => {
              return (
                <label htmlFor="images" key={i}>
                  <S.UploadImageDiv />
                </label>
              )
            })}
        </div>
      </S.Images>

      <S.Heading>Цена</S.Heading>
      <S.Price>
      <Input
          type="text"
          width={'200px'}
          placeholder={add.price}
          onChange={(event) => {
            setValues({ ...values, price: event.target.value })
          }}
        />
      </S.Price>

      <Button
        margin={'10px 0 0 0'}
        disabled={isDisable}
        type="submit"
        onClick={(event) => handleSubmit(event)}
      >
        Сохранить
      </Button>
    </S.StyledAddModal>
  );
};

export default UpdateModal;
