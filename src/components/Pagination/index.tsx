import { HStack, Button, Box, Text } from "@chakra-ui/react"
import { PaginationItem } from "./PaginationItem";

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
        <PaginationItem isCurrent number={1} />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
        <PaginationItem number={6} />
      </HStack>
    </HStack>
  )
}

export { Pagination };