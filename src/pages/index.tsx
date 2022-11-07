import { NextPage } from "next";

import { useForm, SubmitHandler } from "react-hook-form"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { Flex, Button, Stack } from "@chakra-ui/react";

import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string
  password: string
}

type SignInFormSchema = {
  [key in keyof SignInFormData]: any
}

const signInFormSchema: Yup.ObjectSchema<SignInFormSchema> = Yup.object().shape({
  email: Yup.string().label("E-mail").required().email(),
  password: Yup.string().label("Senha").required()
})

const SignIn: NextPage = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(() => resolve(""), 1500))

    console.log(values);
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="95%"
        maxW={360}
        bg="gray.800"
        p={8}
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            type="email"
            name="email"
            label="E-mail"
            error={errors.email}
            isDisabled={isSubmitting}
            {...register("email")}
          />

          <Input
            type="password"
            name="password"
            label="Password"
            error={errors.password}
            isDisabled={isSubmitting}
            {...register("password")}
          />
        </Stack>

        <Button
          type="submit"
          colorScheme="pink"
          size="lg"
          mt={8}
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}

export default SignIn;