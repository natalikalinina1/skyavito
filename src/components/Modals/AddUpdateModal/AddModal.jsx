/* eslint-disable no-undef */
import Input from '../../InputForm/InputForm';
import Button from '../../Buttons/Button';
import TextArea from '../../InputForm/TextArea';
import * as S from './addUpdateModal.styled';
import {
  useCreateAddMutation,
  useCreateAddWithNoImagesMutation,
} from '../../../features/card/cardApi';
import { useState, useEffect } from 'react';
import { isModalOpen } from '../../../features/modal/modalSlice';
import { useDispatch } from 'react-redux';
import { Preloader } from '../../../styles/preloader.styles';

const AddModal = () => {
  const imgLimit = 5;
  const dispatch = useDispatch();
  const [
    createAdd,
    { isSuccess: isCreateSuccess, isLoading: isCreateLoading },
  ] = useCreateAddMutation(); // значения для создания обьявления
  const [
    createAddWithNoImages,
    {
      isSuccess: isCreateWithNoCardSuccess,
      isLoading: isCreateWithNoCardLoading,
    },
  ] = useCreateAddWithNoImagesMutation(); //значения для обьявления без изображения

  const [isDisable, setIsDisable] = useState(true);
  const [imgQuality, setImgQuality] = useState(0);
  const [preview, setPreview] = useState([]);
  const [values, setValues] = useState({
    title: '',
    description: '',
    files: [],
    price: 0,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (values.title !== '') {
      try {
        const formData = new FormData();

        const query = `?title=${values.title}&description=${
          values.description
        }&price=${Number(values.price)}`;

        values.files?.forEach((picture) => formData.append('files', picture));

        const data = {
          query,
          formData,
        };

        if (values.files.length > 0) {
          const response = await createAdd(data);
          console.log(response);
        } else {
          const response = createAddWithNoImages(data);
          console.log(response);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handlePictureChange = (event) => {
    const newFiles = Object.values(event.target.files)
      .map((file) => file)
      .slice(0, 5);

    if (newFiles) {
      const updatedList = [...values.files, ...newFiles];
      console.log(updatedList);
      setValues({
        ...values,
        files: updatedList,
      });
    }

    setIsDisable(false);
  };

  const handleDeletePreview = (id) => {
    const copy = [...values.files];
    copy.splice(id, 1);
    setValues({
      ...values,
      files: copy,
    });
    setPreview(preview.slice(id, 1));
  };

  useEffect(() => {
    if (values.files.length === 0) {
      setPreview([]);
    } else if (values.files.length >= 5) {
      setImgQuality(4);
    }

    const objectUrl = [];
    values.files.forEach((image) => objectUrl.push(URL.createObjectURL(image)));

    setPreview(objectUrl);
    setImgQuality(objectUrl.length);
  }, [values.files]);

  useEffect(() => {
    if (isCreateSuccess || isCreateWithNoCardSuccess) {
      dispatch(isModalOpen(false));
    }
  }, [isCreateSuccess, isCreateWithNoCardSuccess, dispatch]);

  return (
    <S.StyledAddModal>
      <S.Title>Новое объявление</S.Title>
      <S.Heading>Название</S.Heading>
      <Input
        type="text"
        width={'100%'}
        placeholder="Введите название"
        name={'title'}
        onChange={(event) => {
          setValues({ ...values, title: event.target.value });
          setIsDisable(false);
        }}
        required
      />

      <S.Heading>Описание</S.Heading>
      <TextArea
        width={'100%'}
        height={'200px'}
        placeholder="Введите описание"
        name={'description'}
        onChange={(event) => {
          setValues({ ...values, description: event.target.value });
          setIsDisable(false);
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

          {preview.map((preview, i) => (
            <S.UploadedImage
              src={preview}
              key={i}
              onClick={() => handleDeletePreview(i)}
            />
          ))}

          {Array(imgLimit - imgQuality) //отображение пустых окон для загрузки доп фото
            .fill()
            .map((item, i) => {
              return (
                <label key={i} htmlFor="images">
                  <S.UploadImageDiv key={i} />
                </label>
              );
            })}
        </div>
      </S.Images>

      <S.Heading>Цена</S.Heading>
      <S.Price>
        <Input
          type="number"
          width={'200px'}
          name={'price'}
          onChange={(event) => {
            setValues({ ...values, price: Number(event.target.value) });
            setIsDisable(false);
          }}
        />
      </S.Price>

      <Button
        margin={'10px 0 0 0'}
        disabled={isDisable}
        onClick={(event) => handleSubmit(event)}
      >
        {isCreateLoading || isCreateWithNoCardLoading ? (
          <Preloader />
        ) : (
          'Опубликовать'
        )}
      </Button>
    </S.StyledAddModal>
  );
};
export default AddModal;
