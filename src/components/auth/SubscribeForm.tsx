import React, { useCallback, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
import { BASE_PATH } from '../../data/config';
import { Loader } from '../common/Loader';

type SubscribeFormData = {
  name: string;
  email: string;
};

type SubscribeFormProps = {
  onSuccess: () => void;
};

const SubscribeForm: React.FC<SubscribeFormProps> = ({ onSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<SubscribeFormData>({
    defaultValues: { name: '', email: '' },
    mode: 'onBlur',
  });

  const URL_APP =
    'https://script.google.com/macros/s/AKfycbyWy1JvlVV8dWjJQKa3IiszMAGzGbxPwHdutyH3zpKon-NNOjILKgAgIa0oQi87lqJUjw/exec';

  const onSubmit: SubmitHandler<SubscribeFormData> = useCallback(
    async (data) => {
      setIsLoading(true);
      try {
        const response = await fetch(URL_APP, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();
        if (result.success) {
          onSuccess();
          setTimeout(() => {
            alert('Данные успешно отправлены!');
          }, 100);
        } else {
          alert('Ошибка при отправке данных.');
        }
      } catch (error) {
        console.error('Error:', error);
        console.log(JSON.stringify(data));
        alert('Ошибка при отправке данных.');
      } finally {
        setIsLoading(false);
      }
    },
    [onSuccess]
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-6"
    >
      <p className="text-base text-center">
        Отправьте нам ваши имя и email и мы обязательно оповестим вас о
        предстоящих мероприятиях проекта &quot;Здравый смысл&quot;
      </p>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Ваше имя"
          className="block w-full p-2 border rounded border-primary"
          {...register('name', {
            required: 'Пожалуйста, введите ваше имя',
            onChange: () => clearErrors('name'),
          })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm absolute top-10 left-0">
            {errors.name.message}
          </span>
        )}
      </div>

      <div className="relative w-full">
        <input
          type="email"
          placeholder="Email"
          className="block w-full p-2 border rounded border-primary"
          {...register('email', {
            required: 'Пожалуйста, введите ваш email',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Некорректный email',
            },
            onChange: () => clearErrors('email'),
          })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm absolute top-10 left-0">
            {errors.email.message}
          </span>
        )}
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? <Loader /> : 'Отправить'}
      </Button>

      <p className="text-sm text-gray-600 text-center">
        Нажимая на кнопку, вы соглашаетесь с{' '}
        <Link
          to={`${BASE_PATH}privacy-policy`}
          className="text-primary hover:underline"
        >
          Политикой конфиденциальности
        </Link>
      </p>
    </form>
  );
};

export default React.memo(SubscribeForm);
