import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ElLoading } from 'element-plus'
class Serve {
    instance: AxiosInstance
    constructor(baseConfig: AxiosRequestConfig) {
        this.instance = axios.create(baseConfig)
        this.instance.interceptors.request.use(config => {
            ElLoading.service({ fullscreen: true,text:'正在加载中...',background:'0,0,0,0.5' })
            const token = localStorage.getItem('token')
            if (token) {
                config.headers.Authorization = `  Bearer ${token}`
            }
            return config
        })
        this.instance.interceptors.response.use(ref => {
            ElLoading.service({ fullscreen: true,text:'正在加载中...',background:'0,0,0,0.5' }).close()
            return ref
        })
    }
    get(url: string, params = {}) {
        return this.instance.get(url, { params })
    }
    post(url: string, data = {}) {
        return this.instance.post(url, data)
    }
    put(url: string, data = {}) {
        return this.instance.put(url, data)
    }
    delete(url: string, data = {}) {
        return this.instance.delete(url, data)
    }
}

export default new Serve({
    baseURL: 'https://api-hmzs.itheima.net/api/'
})
