import styled from "styled-components";

export const LoginFormWapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 450px;
  .Form-wapper{
    width: 550px;
    height: 450px;
    padding: 30px;
    margin-right: 150px;
    margin-top: 100px;
    padding: 30px;
    box-sizing: border-box;
    .welcome-login{
      position: relative;
      text-align: center;
      &::after {
        content: '';
        display: inline-block;
        width: 15%;
        height: 5px;
        position: absolute;
        left: 50%;
        bottom: -8px;
        background-color: #2a78e6;
        transform: translateX(-50%);
      }
    }
    .ant-form{
      margin-top: 55px;
      .login-Btn{
        width: 100%;
        height: 40px;
        margin-top: 20px;
      }
      .password-tip{
        text-align: center;
      }
    }
  }
`