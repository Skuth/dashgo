import { Button } from "@chakra-ui/react";

interface PaginationProps {
  number: number | string
  isCurrent?: boolean
}

const PaginationItem: React.FC<PaginationProps> = ({
  isCurrent = false,
  number
}) => {
  return isCurrent ? (
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
      {number}
    </Button>
  ) : (
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
      {number}
    </Button>
  )
}

export { PaginationItem };