import { NextPage } from "next"
import Link from "next/link"

import { useForm, SubmitHandler } from "react-hook-form"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react"

import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"
import { Input } from "../../components/Form/Input"

type CreateUserFormData = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

type CreateUserFormSchema = {
  [key in keyof CreateUserFormData]: any
}

const createUserFormSchema: Yup.ObjectSchema<CreateUserFormSchema> = Yup.object().shape({
  name: Yup.string().label("Nome").required(),
  email: Yup.string().label("E-mail").required().email(),
  password: Yup.string().label("Senha").required().min(6),
  password_confirmation: Yup.string().label("Confirmação da senha").oneOf([
    Yup.ref("password"),
    null
  ], "As senhas devem ser iguais"),
})


const CreateUser: NextPage = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserFormSchema)
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(() => resolve(""), 1500))

    console.log(values);
    
  }

  return (
    <Box>
      <Header />

      <Flex
        w="100%"
        my={6}
        maxW={1480}
        mx="auto"
        px={6}
      >
        <Sidebar />

        <Box
          flex={1}
          borderRadius={8}
          bg="gray.800"
          p={[6, 8]}
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
          
          <Divider my={6} borderColor="gray.700" />

          <VStack spacing={[6, 8]}>
            <SimpleGrid
              spacing={8}
              minChildWidth={240}
              w="100%"
            >
              <Input
                name="name"
                label="Nome completo"
                isDisabled={isSubmitting}
                error={errors.name}
                {...register("name")}
              />

              <Input
                type="email"
                name="email"
                label="E-mail"
                isDisabled={isSubmitting}
                error={errors.email}
                {...register("email")}
              />
            </SimpleGrid>

            <SimpleGrid
              spacing={[6, 8]}
              minChildWidth={240}
              w="100%"
            >
              <Input
                type="password"
                name="password"
                label="Senha"
                isDisabled={isSubmitting}
                error={errors.password}
                {...register("password")}
              />
              <Input
                type="password"
                name="password_confirmation"
                label="Confirmação da senha"
                isDisabled={isSubmitting}
                error={errors.password_confirmation}
                {...register("password_confirmation")}
              />
            </SimpleGrid>
          </VStack>

          <Flex
            mt={8}
            justify="flex-end"
          >
            <HStack
              spacing={4}
            >
              <Link href="/users" passHref>
                <Button
                  colorScheme="whiteAlpha"
                  isDisabled={isSubmitting}
                >
                  Cancelar
                </Button>
              </Link>

              <Button
                type="submit"
                colorScheme="pink"
                isLoading={isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default CreateUser