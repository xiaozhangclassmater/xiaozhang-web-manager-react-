import { Button, Form, Input } from "antd";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { LoginFormWapper } from "./LoginFormStyle";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const LoginForm = memo(() => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log("values", values);
    navigate("/dashboard");
  };
  return (
    <LoginFormWapper>
      <div className="Form-wapper">
        <h2 className="welcome-login">欢迎登录</h2>
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18 }}
          size="large"
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="账号"
            name="username"
            style={{ height: "40px" }}
            rules={[{ required: true, message: "账号不能为空" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="密码"
            name="password"
            style={{ height: "40px" }}
            rules={[{ required: true, message: "密码不能为空" }]}
          >
            <Input.Password />
          </Form.Item>
          <div className="password-tip">账号 : admin 密码 : 123456</div>
          <Form.Item wrapperCol={{ offset: 4, span: 18 }}>
            <Button className="login-Btn" type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </LoginFormWapper>
  );
});

export default LoginForm;
