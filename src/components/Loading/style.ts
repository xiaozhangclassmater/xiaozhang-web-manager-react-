import styled from 'styled-components'

export const LoadingWapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255,255,255,.5);
  .ant-spin{
    .ant-spin-dot {
      margin-left: 13px !important;
    }
  }
  
`
