import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { Button, Modal, TextInput } from '@mantine/core'
import { showNotification } from '@mantine/notifications'

import { queryClient } from '../../../queryClient'
import { createCase } from '../../apiService/casesService'

const CreateModal = ({ opened, close }: any) => {
  const {
    register,
    setFocus,
    formState: { errors },
    handleSubmit,
  } = useForm<any>()

  const mutation = useMutation({
    mutationFn: (data: any) => {
      console.log('created data: ', data)
      return createCase({ ...data })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['adm/cases/create'] as const,
      })
      close()
      showNotification({
        title: 'Case created',
        message: 'Case has been created successfully',
        color: 'green',
      })
    },
    onError: (err: any) => {
      showNotification({
        title: 'Error',
        message: err?.response?.data?.message,
        color: 'red',
      })
    },
  })

  const onSubmit = (data: any) => {
    console.log('data: ', data)
    mutation.mutate(data)
  }

  useEffect(() => {
    setFocus('case_name')
  }, [setFocus])

  return (
    <Modal opened={opened} onClose={close} title="Create Case">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-6"
      >
        <TextInput
          placeholder="Case Name"
          label="Case name"
          {...register('case_name', { required: 'Case name is required' })}
          error={errors?.case_name && `${errors?.case_name?.message}`}
        />

        <Button type="submit" className="mt-4">
          Add
        </Button>
      </form>
    </Modal>
  )
}

export default CreateModal
