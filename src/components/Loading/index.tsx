import { Spin } from "antd";
import { LoadingWapper } from "./style";

export default function Loading() {
	return (
    <LoadingWapper>
      <Spin size="large" tip="Loading..." className="loading">
        <div className="content" />
      </Spin>
    </LoadingWapper>
	);
}
