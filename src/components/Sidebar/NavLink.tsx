import { ElementType } from "react"

import {
  Link as ChakraLink,
  Icon,
  Text,
  LinkProps as ChakraLinkProps
} from "@chakra-ui/react"

import { ActiveLink } from "../ActiveLink"

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType
  href: string
  children: string
}

const NavLink: React.FC<NavLinkProps> = ({ icon, children, href, ...rest }) => {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink
        display="flex"
        alignItems="center"
        py={1}
        {...rest}
      >
        <Icon as={icon} fontSize={20} />
        <Text ml={4} fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}

export { NavLink };