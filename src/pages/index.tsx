import { NextPage } from "next";

import { Flex, Button, Stack } from "@chakra-ui/react";

import { Input } from "../components/Form/Input";

const SignIn: NextPage = () => {
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
      >
        <Stack spacing={4}>
          <Input
            type="email"
            name="email"
            label="E-mail"
          />

          <Input
            type="password"
            name="password"
            label="Password"
          />
        </Stack>

        <Button
          type="submit"
          colorScheme="pink"
          size="lg"
          mt={8}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}

export default SignIn;