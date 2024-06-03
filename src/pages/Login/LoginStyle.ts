import loginBgImage from '@/assets/image/loginBg.png'
import styled from 'styled-components'
export const LoginWapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${loginBgImage}) no-repeat center;
  background-size: cover;
  overflow: hidden;
  .title{
    color: #000;
    overflow: hidden;
    text-align: center;
    user-select: none;
    width: 100%;
    margin-top: 80px;
  }
`
