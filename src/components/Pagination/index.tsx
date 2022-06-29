import { HStack, Button, Box, Text } from "@chakra-ui/react"

const Pagination: React.FC = () => {
  return (
    <HStack
      spacing={6}
      mt={8}
      align="center"
      justify="space-between"
    >
      <Box>
        <Text fontWeight="bold">
          0
          <Text as="span" fontWeight="normal"> - </Text>
          10
          <Text as="span" fontWeight="normal"> de </Text>
          100
        </Text>
      </Box>

      <HStack spacing={2}>
        <Button
          as="a"
          size="sm"
          fontSize="xs"
          w={4}
          colorScheme="pink"
          disabled
          _disabled={{
            bg: "pink.500",
            cursor: "default"
          }}
        >
          1
        </Button>

        <Button
          as="a"
          size="sm"
          fontSize="xs"
          w={4}
          bg="gray.700"
          _hover={{
            bg: "gray.500"
          }}
        >
          2
        </Button>

        <Button
          as="a"
          size="sm"
          fontSize="xs"
          w={4}
          bg="gray.700"
          _hover={{
            bg: "gray.500"
          }}
        >
          3
        </Button>

        <Button
          as="a"
          size="sm"
          fontSize="xs"
          w={4}
          bg="gray.700"
          _hover={{
            bg: "gray.500"
          }}
        >
          4
        </Button>
      </HStack>
    </HStack>
  )
}

export { Pagination };