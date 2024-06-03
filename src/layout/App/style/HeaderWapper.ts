import styled from "styled-components";

const HeaderWapper = styled.div`
  display: flex;
  .ant-layout-header{
    display: flex;
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
    background-color: #fff;
    .header-left{
      .collapsed-Btn{
        &:hover{
          background-color: #fff;
        }
      }
    }
    .header-center{
      flex: 1;
    }
    .header-right{
      user-select: none;
      .userInfo{
        display: flex;
        align-items: center;
        height: 100%;
        cursor: pointer;
        .avatar{
          width: 50px;
          height: 50px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .name{
          font-size: 18px;
        }
      }
    }
  }
`
export default HeaderWapper