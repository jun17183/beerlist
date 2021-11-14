import { createGlobalStyle } from "styled-components";

import GmarketSansTTFBold from './GmarketSansTTFBold.ttf'
import GmarketSansTTFMedium from './GmarketSansTTFMedium.ttf'
import GmarketSansTTFLight from './GmarketSansTTFLight.ttf'

export default createGlobalStyle`
  @font-face {
    font-family: 'Gmarket-bold';
    src: local('Gmarket-bold'),
    url(${ GmarketSansTTFBold });
    font-style: normal;
  }

  @font-face {
    font-family: 'Gmarket-medium';
    src: local('Gmarket-medium'),
    url(${ GmarketSansTTFMedium });
    font-style: normal;
  }

  @font-face {
    font-family: 'Gmarket-light';
    src: local('Gmarket-medium'),
    url(${ GmarketSansTTFLight });
    font-style: normal;
  }
`