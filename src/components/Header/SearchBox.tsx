import { Icon, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

const SearchBox: React.FC = () => {
  return (
    <InputGroup
        maxW={400}
        color="gray.200"
        bg="gray.800"
        borderRadius="full"
        py={4}
        ml={6}
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px={8}
          mr={4}
          placeholder="Buscar na plataforma"
          _placeholder={{
            color: "gray.400"
          }}
        />

        <InputRightElement
          pointerEvents="none"
          top={2}
          right={4}
        >
          <Icon as={RiSearchLine} fontSize={20} />
        </InputRightElement>
      </InputGroup>
  )
}

export { SearchBox };