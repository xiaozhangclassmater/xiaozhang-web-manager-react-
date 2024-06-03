import styled from "styled-components";

export const AppLayoutWapper =  styled.div`
  height: 100%;
  .Logo-wapper{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    height: 80px;
    padding: 0 5px;
    box-sizing: border-box;
    .logo{
      width: 80px;
      height: 80px;
      /* transition: all.3s; */
      img{
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .smallLogo{
      width: 40px;
      height: 40px;
    }
    .systemName{
      flex: 1;
      font-size:16px
    }
    .hiddenSysName{
      opacity: 0;
      display: none;
      transition: all .8s;
    }
  }
`;