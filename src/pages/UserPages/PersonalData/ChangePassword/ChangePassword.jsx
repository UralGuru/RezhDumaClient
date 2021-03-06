import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styles from './ChangePassword.module.css';
import Modal from 'react-modal/lib/components/Modal';
import Container from '../../../../components/shared/Container/Container';
import BreadCrumbs from '../../../../components/BreadCrumbs/BreadCrumbs';
import Button from '../../../../components/shared/Button/Button';
import { TextField } from '../../../../components/shared/Forms/TextField/TextField';
import { USER_ROUTE } from '../../../../utils/constants';
import { changeUserPassword } from '../../../../http/profileApi';
import { Context } from '../../../..';
import { observer } from 'mobx-react-lite';
import InformationModal from '../../../../components/shared/InformationModal/InformationModal';

const ChangePassword = () => {
  Modal.setAppElement('#root');

  const {userStore} = useContext(Context);

  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const navigate = useNavigate();

  return ( 
    <Container>
      <div className={styles.outer}>
        <BreadCrumbs data={[{'label': 'Главная', 'path': '/'}, {'label': 'Личные данные', 'path': '/user'}, {'label': 'Изменить пароль', 'path': '/user/edit/password'}]}/>
        <h2>Изменение пароля</h2>
        <Formik
          initialValues={{
            password: '',
            newPassword: '',
            passwordConfirm: ''
          }}
          validationSchema={EditSchema}
          validateOnBlur={true}
          validateOnChange={false}
          onSubmit={(values) => {
            const request = new FormData();
            request.append('password', values.password);
            request.append('newPassword', values.newPassword);
            changeUserPassword(request).then((data) => {
              openModal();
            })
          }}  
        >
        {formik => (
          <Form className={styles.main}>
            <TextField 
              name='password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              type='password'
              label='Старый пароль'
              placeholder='Старый пароль'
            />
            <TextField 
              name='newPassword'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.newPassword}
              type='password'
              label='Новый пароль'
              placeholder='Пароль'
            />
            <TextField 
              name='passwordConfirm'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.passwordConfirm}
              type='password'
              label='Подтвердите новый пароль'
              placeholder='Подтвердите новый пароль'
            />
            <div className={styles.button_row}>
              <Button
                className='primary-outline'
                onClick={() => {navigate(-1)}}
              >Назад</Button>
              <Button
                className='primary'
                type='submit'
              >Сохранить
              </Button>
            </div>
            <InformationModal
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}
              >
              <div className={styles.modal}>
                <div className={styles.modal_header}>Ваш пароль успешно изменен</div>
                <div className={styles.modal_content}>
                  <button onClick={() => navigate(USER_ROUTE)}>Вернуться на главную</button>
                </div>
              </div>
            </InformationModal>
          </Form>
        )}
        </Formik>
      </div>
    </Container>
  );
}
 
export default observer(ChangePassword);

const EditSchema = Yup.object({
  password: Yup.string()
    .min(4, 'Пароль должен содержать не менее 5 символов')
    .max(30, 'Пароль не может содержать больше 30 символов')
    .required('Необходимое поле'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Пароли не совпадают')
    .required('Необходимое поле'),
  newPassword: Yup.string()
    .min(4, 'Пароль должен содержать не менее 5 символов')
    .max(30, 'Пароль не может содержать больше 30 символов')
    .notOneOf([Yup.ref('password'), null], 'Новый пароль не должен совпадать со старым')
    .required('Необходимое поле'),
})