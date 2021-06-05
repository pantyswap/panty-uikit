import React from "react";
import styled, { useTheme } from "styled-components";
import { PancakeRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  cakePriceUsd?: number;
  isDark?: boolean;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd, isDark }) => {
  
  return cakePriceUsd ? (
    <PriceLink href="https://poocoin.app/tokens/0x6a8d8f3c224cd16d7b143930fb428faf20e9802b" target="_blank">
      <PancakeRoundIcon width="24px" mr="8px" />
      <Text color={isDark ? "textSubtle" : "#F04D92"} bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
