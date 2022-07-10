import { ReactNode } from "react";
import { Box, Text, Link, Icon, Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";

interface NavSectionProps {
  title: string
  children: ReactNode
}

const NavSection: React.FC<NavSectionProps> = ({ title, children }) => {
  return (
    <Box>
      <Text
        fontWeight="bold"
        color="gray.400"
        fontSize="small"
        textTransform="uppercase"
      >
        {title}
      </Text>
      <Stack
        spacing={4}
        mt={8}
        align="stretch"
      >
        {children}
      </Stack>
    </Box>
  )
}

export { NavSection }