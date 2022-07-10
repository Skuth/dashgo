import { Box, Flex, Text, Avatar } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData?: boolean
}

const Profile: React.FC<ProfileProps> = ({ showProfileData = true }) => {
  return (
    <Flex
      align="center"
    >
      {showProfileData && (
        <Box
          mr={4}
          textAlign="right"
        >
          <Text>Skuth</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            skuth@burh.com.br
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Skuth" src="https://github.com/skuth.png" />
    </Flex>
  )
}

export { Profile };