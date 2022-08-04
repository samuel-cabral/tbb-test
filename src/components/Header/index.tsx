import {
  Icon,
  Flex,
  useBreakpointValue,
  Box,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { RiMenuLine } from 'react-icons/ri';
import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

type HeaderProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export function Header({ search, setSearch }: HeaderProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isLargeVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      position="fixed"
      top={0}
      w="100%"
      zIndex={2}
      bg="gray.100"
      h={{ lg: '20' }}
      py={{ base: '5' }}
      mx="auto"
      justify="center"
      boxShadow="lg"
    >
      {!isLargeVersion && (
        <Stack w="100%" px="6" gap={2} align="center" justify="space-between">
          <Flex w="100%" align="center" justify="space-between">
            <Icon as={RiMenuLine} fontSize="32" />
            <Logo />
            <Profile showProfileData={isLargeVersion} />
          </Flex>
          <SearchBox value={search} setValue={setSearch} />
        </Stack>
      )}

      {isLargeVersion && (
        <Flex w="100%" maxWidth={1480} align="center" justify="center" px="6">
          <Logo />

          <SearchBox value={search} setValue={setSearch} />

          <Flex align="center" ml="auto">
            <NotificationsNav />
            <Profile showProfileData={isLargeVersion} />
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
