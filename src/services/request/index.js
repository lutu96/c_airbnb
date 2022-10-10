import { BASE_URL, TIMEOUT } from "./config"
import axios from 'axios'

class YRequest {
    constructor (baseURL, timeout) {
        this.instance = axios.create({
            baseURL,
            timeout
        })

        this.instance.interceptors.response.use((res) => {
            return res.data
        }, err => {
            return err
        })
    }
    request (config) {
        return this.instance.request(config)
    }

    get (config) {
        return this.instance.request({ ...config, method: 'get'})
    }
    post (config) {
        return  this.instance.request({...config, method: 'post'})
    } 
}

export default new YRequest(BASE_URL, TIMEOUT)