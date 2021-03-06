import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  ...rest
}) => {
  return (
    <FormControl>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        name={name}
        id={name}
        placeholder={label || rest.placeholder || ""}
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        size="lg"
        _hover={{
          bg: "gray.900"
        }}

        {...rest}
      />
    </FormControl>
  )
}

export { Input };