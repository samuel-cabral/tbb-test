import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

type ProfileProps = {
  showProfileData?: boolean;
};

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Samuel Cabral</Text>
          <Text color="gray.500" fontSize="small">
            samuelcabral.mail@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Samuel Cabral"
        src="https://github.com/samuel-cabral.png"
      />
    </Flex>
  );
}
