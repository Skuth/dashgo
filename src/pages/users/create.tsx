import { NextPage } from "next"
import Link from "next/link"

import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react"

import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"
import { Input } from "../../components/Form/Input"

const CreateUser: NextPage = () => {
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
              />

              <Input
                type="email"
                name="email"
                label="E-mail"
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
              />
              <Input
                type="password"
                name="password_confirmation"
                label="Confirmação da senha"
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
                >
                  Cancelar
                </Button>
              </Link>

              <Button
                colorScheme="pink"
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