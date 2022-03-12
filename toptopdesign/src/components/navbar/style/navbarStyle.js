import styled from 'styled-components';
import {
  Border1pxSecond,
  PptelegrafRegularNormalBlack13px,
  ValignTextMiddle,
  PptelegrafRegularNormalBlack14px
} from '../../../assets/styledMixins';

export const Styles = styled.div`
    .before-container{
        display: flex;
        justify-content: center;
        border-bottom: 1px solid var(--second);
        @media screen and (min-width: 1900px) {
            margin: 0px 122px 0px 186px;
        }
        .navbar{
            width: 100%;
            max-width: 1156px;
            min-height: 86px;
            background-color: var(--white);
            position: relative;
            padding: 0px 22px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            
            .small-btn-outline{
                ${Border1pxSecond}
                ${PptelegrafRegularNormalBlack13px}
                height: 32px;
                margin-bottom: 0.78px;
                display: flex;
                padding: 0 15.5px;
                justify-content: flex-end;
                align-items: center;
                border-radius: 64px;
                &:hover {
                    color: #ffffff;
                    background: #000000;
                }
                .sign-in-btn{
                    ${ValignTextMiddle}
                    height: 22px;
                    min-width: 58px;
                    padding-top: 1px;
                    letter-spacing: 1.04px;
                    line-height: 22.5px;
                    white-space: nowrap;
                }
                .sign-in-arrow{
                    width: 13px;
                    height: 8px;
                    margin-left: 8px;
                    margin-top: 0;
                }
            }
            .icon-group{
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-left: auto;
                .icon{
                    width: 18px;
                    height: 21px;
                }
                .alarm{
                    margin-bottom: 1.19px;
                }
                .gift{
                    margin-left: 39px;
                    margin-bottom: 2.02px;
                }
            }
            .title-img{
                width: 85px;
                height: 37px;
            }
            .home{
                ${PptelegrafRegularNormalBlack14px}
                display: flex;
                align-items: center;
                min-height: 15px;
                min-width: 36px;
                letter-spacing: 0;
                &:hover {
                    color: #867d7d;
                }
                width: 85px;
                height: 37px;
            }
        }
    }
    
`;

// @media screen and (max-width: 1200px) {
//     margin: 0px 140px 0px 140px;
// }
// @media screen and (max-width: 1000px) {
//     margin: 0px 100px 0px 100px;
// }
// @media screen and (max-width: 800px) {
//     margin: 0px 60px 0px 60px;
// }
// @media screen and (max-width: 600px) {
//     margin: 0px 20px 0px 20px;
//     padding: 0px;
// }