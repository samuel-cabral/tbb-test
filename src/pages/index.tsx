import { Flex, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { Product } from '../../typings';
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:3333/data')
      .then(response => response.json())
      .then(data => setProducts(data.nodes));
  }, []);

  const filteredProducts =
    search.length > 0
      ? products.filter(product =>
          new RegExp(search, 'i').test(product.category.name),
        )
      : [];

  return (
    <Flex direction="column" h="100vh" align="center" mt="5">
      <Header search={search} setSearch={setSearch} />
      <Flex
        direction="column"
        w="100%"
        my="28"
        maxWidth={1480}
        mx="auto"
        px="4"
        pb="8"
        gap="8"
      >
        {search.length > 0 ? (
          <SimpleGrid flex="1" gap="4" minChildWidth="320px">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} data={product} />
            ))}
          </SimpleGrid>
        ) : (
          <SimpleGrid flex="1" gap="4" minChildWidth="320px">
            {products.map(product => (
              <ProductCard key={product.id} data={product} />
            ))}
          </SimpleGrid>
        )}
      </Flex>
    </Flex>
  );
}
