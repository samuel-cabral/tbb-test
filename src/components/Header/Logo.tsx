import { Text } from '@chakra-ui/react';

export function Logo() {
  return (
    <Text
      fontSize={['2xl', '3xl']}
      fontWeight="bold"
      letterSpacing="tight"
      w={{ lg: '64' }}
    >
      tbb
      <Text as="span" color="pink.300">
        Store
      </Text>
      <Text as="span" ml="1">
        .
      </Text>
    </Text>
  );
}
