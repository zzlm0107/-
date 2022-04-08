import axios from 'axios'

//创建一个axios实例，返回一个promise
const request = axios.create({
    baseURL: '/api',
    timeout: 5000,
})

//配置请求拦截器
request.interceptors.request.use((config)=>{
    //此处对拦截的请求数据进行处理
    /* ........ */

    return config;
},(err)=>{
    // 对请求错误做些什么
    return Promise.reject('axios请求拦截出错' + error);
})

//配置响应拦截器
request.interceptors.response.use((res)=>{
    //此处对拦截的响应数据进行处理
    /* ........ */

    return res.data;
},(err)=>{
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject('axios响应拦截出错' + error);
})

export default request;