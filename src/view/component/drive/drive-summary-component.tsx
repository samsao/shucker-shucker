import React from 'react';
import styled from 'styled-components';
import { Box } from 'view/component/generic/box-component';

interface Props {
  imageUrl: string;
  brand: string;
  model: string;
  isShuckable: boolean;
}

export const DriveSummaryComponent: React.FunctionComponent<Props> = ({
  imageUrl,
  brand,
  model,
  isShuckable,
}) => {
  const name = `${brand}-${model}`;

  const getBrandName = (name: string, isShuckable: boolean): React.ReactNode =>
    !isShuckable ? (
      <NonShuckableBrandName>{name}</NonShuckableBrandName>
    ) : (
      <BrandName>{name}</BrandName>
    );

  return (
    <Box>
      <DriveImage src={imageUrl} alt={name} />
      {getBrandName(name, isShuckable)}
    </Box>
  );
};

const DriveImage = styled.img`
  width: 50px;
`;

const BrandName = styled.span`
  font-weight: bold;
`;

const NonShuckableBrandName = styled(BrandName)`
  color: red;
`;
