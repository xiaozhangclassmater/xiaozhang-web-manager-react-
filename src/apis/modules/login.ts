import request from "@/services";

export function Login (data:loginParams){
  return request({
    url: '/api/login',
    method: 'post',
    data
  })
}