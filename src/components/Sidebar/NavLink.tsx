import { ElementType } from "react"
import { Link, Icon, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react"

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType
  children: string
}

const NavLink: React.FC<NavLinkProps> = ({ icon, children, ...rest }) => {
  return (
    <Link
      display="flex"
      alignItems="center"
      py={1}
      {...rest}
    >
      <Icon as={icon} fontSize={20} />
      <Text ml={4} fontWeight="medium">{children}</Text>
    </Link>
  )
}

export { NavLink };