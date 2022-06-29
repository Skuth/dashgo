import { NextPage } from "next"

import { RiAddLine, RiPencilLine } from "react-icons/ri"

import { Box, Button, Flex, Heading, Icon, Table, Thead, Th, Tr, Tbody, Td, Checkbox, Text } from "@chakra-ui/react"

import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"
import { Pagination } from "../../components/Pagination"

const UserList: NextPage = () => {
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
          p={8}
        >
          <Flex
            mb={8}
            align="center"
            justify="space-between"
          >
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize={20} />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table
            colorScheme="whiteAlpha"
          >
            <Thead>
              <Tr>
                <Th px={6} color="gray.300" width={8}>
                  <Checkbox colorScheme="pink" />
                </Th>

                <Th>Usuário</Th>

                <Th>Data de cadastro</Th>

                <Th w={8}></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px={6}>
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Skuth</Text>
                    <Text fontSize="small" color="gray.300">skuth@burh.com.br</Text>
                  </Box>
                </Td>

                <Td>04 de Abril, 2022</Td>

                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}

export default UserList