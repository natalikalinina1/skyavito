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
import { Preloader } from "../../../styles/preloader.styles";


const UpdateModal = () => {
  const { id } = useParams()
  const add = useSelector((state) => state.card?.currentAdd)
  const dispatch = useDispatch()
  const imgLimit = 5


  const [isDisable, setIsDisable] = useState(false)
  const [preview, setPreview] = useState([])
  const [files, setFiles] = useState([])
  const [limit, setLimit] = useState(imgLimit)

  const [values, setValues] = useState({
    title: add.title,
    description: add.description,
    files: [],
    price: add.price,
  })

  const [
    changeAdd,
    { isSuccess: isChangeAddSuccess, isLoading: isChangeAddLoading },
  ] = useChangeAddMutation()
  const [deleteImage] = useDeleteAddImageMutation()
  const [uploadImage] = useUploadImageToAddMutation()

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await changeAdd({ id: id, body: values })

     
      dispatch(getCurrentAdd(response.data))
    
    } catch (err) {
      console.log(err)
    }
  }
  const handlePictureChange = (event) => {
    const newFiles = Object.values(event.target.files)
      .map((file) => file)
      .slice(0, 5)

    const objectUrl = []
    newFiles.forEach((image) => objectUrl.push(URL.createObjectURL(image)))

    setPreview([...preview, ...objectUrl])
  }

  const handleDeleteImage = async (url) => {
    try {
      const query = `?file_url=${url}`
      const response = await deleteImage({ id, query })
      dispatch(getCurrentAdd(response.data))

      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (isChangeAddSuccess) {
      dispatch(isModalOpen(false))
      setFiles([])
    }
  }, [isChangeAddSuccess, dispatch])

  useEffect(() => {
    setLimit(imgLimit - add.images.length - files.length)
  }, [add.images.length, files.length])

  useEffect(() => {
    console.log(preview)
    console.log(limit)
  }, [preview, limit])

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
            onChange={(event) => handlePictureChange(event)}
          />

     {add?.images.map((img) => (
            <S.UploadedImage
              src={`${BASE_URL}${img.url}`}
              key={img.id}
              alt={add.title}
              onClick={() => handleDeleteImage(img.url)}
            />
          ))}
 {preview &&
            preview.map((preview, i) => (
              <S.UploadedImage
                src={preview}
                alt={add.title}
                key={i}
                // onClick={() => handleDeletePreview(i)}
              />
            ))}

          {Array(limit)
            .fill()
            .map((i) => {
              return (
                <label key={i} htmlFor="images">
                  <S.UploadImageDiv key={i} />
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
 {isChangeAddLoading ? <Preloader /> : 'Сохранить'}
      </Button>
    </S.StyledAddModal>
  );
};

export default UpdateModal;
