import styled from 'styled-components';
const Warrper = styled.section`
   >.output{
     text-align: right;
     line-height: 72px;
     background: #fff;
     padding: 0 10px;
     font-size: 36px;
     box-shadow:inset 0 -5px 5px -5px rgba(0,0,0,0.25), 
                inset 0 5px 5px -5px rgba(0,0,0,0.25);
   }
   >.pad{
     >button{
        font-size: 18px;
        float: left;
        width: 25%;
        border:none;
        height: 64px;
        &.ok{
          height: 128px;
          float: right;
        }
        &.zero{
           width: 50%;
        }
        & :nth-child(1) {
          background: #f2f2f2;
        }
        &:nth-child(2),
      &:nth-child(5) {
        background:#E0E0E0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background:#D3D3D3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background:#C1C1C1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background:#B8B8B8;
      }
      &:nth-child(12) {
        background:#9A9A9A;
      }
      &:nth-child(14) {
        background:#A9A9A9;
      }
     }
   }
`;
export { Warrper}