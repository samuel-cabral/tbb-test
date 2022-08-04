import { Flex, Icon, Input } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { RiSearchLine } from 'react-icons/ri';

type SearchBoxProps = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export function SearchBox({ value, setValue }: SearchBoxProps) {
  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="6"
      ml="6"
      width="100%"
      maxWidth={{ lg: 400 }}
      alignSelf="center"
      color="gray.800"
      position="relative"
      borderRadius="full"
      boxShadow="md"
    >
      <Input
        color="gray.900"
        variant="unstyled"
        placeholder="Buscar por categoria..."
        _placeholder={{ color: 'gray.400' }}
        px="4"
        mr="4"
        name="search"
        type="text"
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
