import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Tooltip,
} from '@chakra-ui/react';
import { Product } from '../../typings';

type ProductCardProps = {
  data: Product;
};

export function ProductCard({ data }: ProductCardProps) {
  return (
    <Center>
      <Box
        role="group"
        p={6}
        maxW="330px"
        w="full"
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow="2xl"
        rounded="lg"
        pos="relative"
        zIndex={1}
      >
        <Box
          rounded="lg"
          pos="relative"
          height="full"
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
        >
          <Image
            rounded="lg"
            height="xs"
            width="xs"
            objectFit="cover"
            src={data.images[0].asset.url}
            fallbackSrc="https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/3533/9029/motionsense__33259.1653333975.jpg?c=2?imbypass=on"
          />
        </Box>
        <Stack pt={10} align="center">
          <Text color="gray.500" fontSize="sm" textTransform="uppercase">
            {data.category.name}
          </Text>
          <Tooltip label={data.name} placement="top">
            <Heading
              color="black"
              fontSize="lg"
              fontFamily="body"
              fontWeight={500}
              textAlign="center"
              noOfLines={1}
            >
              {data.name}
            </Heading>
          </Tooltip>
          <Stack direction="row" align="center">
            <Text fontWeight={800} fontSize="3xl" color="black">
              $7
            </Text>
            <Text textDecoration="line-through" color="gray.600">
              $19
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
