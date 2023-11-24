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


const UpdateModal = () => {
  const { id } = useParams()
  const add = useSelector((state) => state.card?.currentAdd)
  const dispatch = useDispatch()
  const LIMIT = 5

  const [isDisable, setIsDisable] = useState(false)
  const [preview, setPreview] = useState([])
  const [fileList, setFileList] = useState([])
  const [limit, setLimit] = useState(LIMIT)

  const [values, setValues] = useState({
    title: add.title,
    description: add.description,
    files: [],
    price: add.price,
  })

  const [changeAdd, { isSuccess: isChangeAddSuccess }] = useChangeAddMutation()
  const [addImage, { isSuccess: isAddImageSuccess }] =
    useUploadImageToAddMutation()
  const [deleteImage] = useDeleteAddImageMutation()

  useEffect(() => {
    setLimit(LIMIT - add.images.length - fileList.length)
  }, [add.images.length, fileList.length])

  useEffect(() => {
    if (fileList.length === 0) {
      setPreview([])
    }
    const objectUrl = []
    fileList.forEach((image) => objectUrl.push(URL.createObjectURL(image)))
    setPreview(objectUrl)
  }, [fileList])

  const handlePictureChange = (event) => {
    const newFiles = Object.values(event.target.files).map((file) => file)

    if (newFiles) {
      const updatedList = [...values.files, ...newFiles]
      setValues({
        ...values,
        files: updatedList,
      })
    }

    setIsDisable(false)
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    try {
      const data = {
        title: values.title,
        description: values.description,
        price: Number(values.price),
      }
      const response = await changeAdd({ id: id, body: data })
      console.log(response)

      if (fileList) {
        fileList.forEach((el) => {
          const formData = new FormData()
          formData.append('file', el)
          addImage({ id: id, body: formData })
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleDeleteImage = (id, url) => {
    const query = `?file_url=${url}`
    deleteImage({ id, query })
  }

  const handleDeletePreview = (id) => {
    const copy = [...fileList]
    copy.splice(id, 1)
    setFileList(copy)
    setPreview(preview.slice(id, 1))
  }

  useEffect(() => {
    if (fileList.length > 5) {
      const copy = [...fileList]
      copy.splice(5, 1)
      setFileList(copy)
    }
  }, [fileList])

  useEffect(() => {
    console.log(preview)
  }, [preview])

  // console.log(values)
  return (
    <S.StyledAddModal>
      <S.Title>Редактировать объявление</S.Title>
      <S.Heading>Название</S.Heading>
      <Input type="text" width={'100%'} placeholder={add.title} />

      <S.Heading>Описание</S.Heading>
      <TextArea width={'100%'} height={'200px'} placeholder={add.description} />

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

          {add.images.map((img, index) => (
            <S.UploadedImage
              src={`${BASE_URL}${img.url}`}
              key={index}
              alt={add.title}
              onClick={() => handleDeleteImage(id, img.url)}
            />
          ))}

          {preview.map((img, index) => (
            <S.UploadedImage src={preview.name} alt="image_preview" key={index} />
          ))}

          {Array(limit)
            .fill()
            .map((index) => {
              return (
                <label htmlFor="images" key={index}>
                  <S.UploadImageDiv />
                </label>
              )
            })}
        </div>
      </S.Images>

      <S.Heading>Цена</S.Heading>
      <S.Price>
      <Input type="text" width={'200px'} placeholder={add.price} />
      </S.Price>

      <Button
        margin={'10px 0 0 0'}
        disabled={isDisable}
        type="submit"
        onClick={(event) => onSubmit(event)}
      >
        Сохранить
      </Button>
    </S.StyledAddModal>
  );
};

export default UpdateModal;
