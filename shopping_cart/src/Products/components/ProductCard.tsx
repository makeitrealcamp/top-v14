import React from 'react';
import { Card, Flex, Heading, Image, Paragraph, Text } from 'theme-ui';
import { Product } from '../../shared/types/productType';
import { truncateText } from '../Utils/truncateText';
import { ProductCartActions } from './ProductCartActions';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { title, id, description, price, image } = product;
  return (
    <Flex
      m={2}
      sx={{
        flexDirection: 'column',
        width: ['100%', '50%', '25%'],
        border: '1px solid #ccc',
        padding: ['0 1rem'],
        justifyContent: 'space-between',
      }}>
      <Card
        sx={{
          display: 'flex',
          overflow: 'hidden',
          alignItems: 'flex-start',
          flexDirection: 'column',
        }}>
        <Image
          sx={{
            height: [250, 300],
            alignSelf: 'center',
            paddingTop: 2,
          }}
          src={image}
        />
        <Heading p={2} as={'h3'}>
          {truncateText(title)}
        </Heading>
        <Paragraph
          sx={{
            textAlign: 'justify',
          }}>
          {truncateText(description)}
        </Paragraph>
      </Card>
      <Flex
        paddingTop={2}
        paddingBottom={2}
        sx={{
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text> $ {price}</Text>
        <ProductCartActions product={product} id={id} />
      </Flex>
    </Flex>
  );
};
