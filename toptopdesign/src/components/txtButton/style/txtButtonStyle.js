import styled from "styled-components";
import {
  PptelegrafRegularNormalWhite24px
} from '../../../assets/styledMixins';

export const Styles = styled.div`
  .txt-button {
    ${PptelegrafRegularNormalWhite24px}
    color: white;
    right: -2px;
    top: 1px;
    background: #1a1a1c;
    cursor: pointer;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 53px;
    min-width: 221px;
    text-align: right;
    letter-spacing: 0;
    line-height: 24px;
    white-space: nowrap;
    border-radius: 63px;
    margin-bottom: 50px;
    &:hover {
      color: black;
      background: #c5c5ca;
    }
    @media screen and (max-width: 600px) {
      width: 160px;
      min-width: 160px;
    }
  }
`;
