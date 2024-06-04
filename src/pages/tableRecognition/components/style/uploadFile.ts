import styled from "styled-components";

export const UploadFileWapper = styled.div`
  margin-top: 10px;
  overflow: hidden;
  .upload-image-list{
    display: flex;
    margin-top: 15px;
    .image-item{
      width: 100px;
      height: 80px;
      margin-left: 10px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
`