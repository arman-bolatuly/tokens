// import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useForm } from 'react-hook-form'
// import { useMutation, useQuery } from '@tanstack/react-query'
import { Text, Title, TextInput, Button, Select } from '@mantine/core'
// import { useSnapshot } from 'valtio'

// import { getAccount, login } from '../../apiService/auth'
// import { store } from '../../store'
// import { LogoIcon } from '../../assets/icons'

const Registration = () => {
  const navigate = useNavigate()

  // const { isAuth } = useSnapshot(store.auth)

  // const {
  //   register,
  //   setFocus,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm<any>()

  // const { data: accData, isLoading: isAccLoading } = useQuery({
  //   queryKey: ['auth/me'],
  //   queryFn: getAccount,
  //   enabled: !isAuth,
  //   retry: false,
  // })

  // useEffect(() => {
  //   if (!isAccLoading && accData) {
  //     store.auth.isAuth = true
  //     navigate('/statistics')
  //   }
  // }, [isAccLoading])

  // const mutation = useMutation({
  //   mutationFn: (data: any) => {
  //     return login(data)
  //   },
  //   onSuccess: (data: any) => {
  //     localStorage.setItem('token', data.data.access_token)
  //     store.auth.isAuth = true
  //     navigate('/statistics')
  //   },
  //   onError: (err: any) => {
  //     console.log(err)
  //   },
  // })

  // const onSubmit = (data: any) => {
  //   mutation.mutate(data)
  // }

  // useEffect(() => {
  //   setFocus('email')
  // }, [setFocus])

  // if (isAccLoading) {
  //   return (
  //     <div className="flex justify-center my-40">
  //       <Loader type="dots" size={35} />
  //     </div>
  //   )
  // }

  return (
    <div className="flex flex-col justify-between items-center h-screen bg-[#0D1D29]">
      <header className="flex justify-between items-center w-full px-6 pt-4 border-b-[1px] border-[#087f5b]">
        <Title order={2} className="text-[#FFFFFF]">
          TokenX
        </Title>

        <Button variant="light" onClick={() => navigate('/login')}>
          Войти
        </Button>
      </header>

      <div className="flex flex-col space-y-6 w-[400px] bg-[#FFFFFF] py-6 px-4 rounded-xl">
        <Title order={5} className="text-center">
          Регистрация
        </Title>

        <form
          // onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-6"
        >
          <TextInput
            label="Email"
            // {...register('email', {
            //   required: 'Логин не должен быть пустым',
            // })}
            placeholder="Email"
            // error={errors?.email && `${errors?.email?.message}`}
          />

          <TextInput
            label="Имя пользователя"
            // {...register('password', {
            //   required: 'Пароль не должен быть пустым',
            // })}
            placeholder="Имя пользователя"
          />

          <TextInput
            label="Пароль"
            // {...register('password', {
            //   required: 'Пароль не должен быть пустым',
            // })}
            placeholder="Создать пароль"
            type="Password"
            // error={errors?.password && `${errors?.password?.message}`}
          />

          <Select
            label="Страна проживания"
            placeholder="Выбрать"
            data={[
              { value: 'usa', label: 'United States' },
              { value: 'uk', label: 'United Kingdom' },
              { value: 'france', label: 'France' },
              { value: 'germany', label: 'Germany' },
              { value: 'russia', label: 'Russia' },
              { value: 'china', label: 'China' },
            ]}
          />

          <Button type="submit">Регистрация</Button>
        </form>
      </div>

      <Text mt={24} c="#087f5b" mb={16}>
        © 2021 TokenX. All rights reserved.
      </Text>
    </div>
  )
}

export default Registration
