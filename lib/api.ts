import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

// API 基础配置
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';
const API_TIMEOUT = 10000;

// 创建 axios 实例
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
apiClient.interceptors.request.use(
  (config) => {
    // 可以在这里添加认证 token
    // const token = getToken();
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error: AxiosError) => {
    // 统一错误处理
    const message = getErrorMessage(error);
    console.error('API Error:', message);
    return Promise.reject(new Error(message));
  }
);

// 获取错误信息
function getErrorMessage(error: AxiosError): string {
  if (error.response) {
    // 服务器返回错误
    const status = error.response.status;
    const data = error.response.data as { message?: string };

    switch (status) {
      case 400:
        return data.message || '请求参数错误';
      case 401:
        return '未授权，请登录';
      case 403:
        return '拒绝访问';
      case 404:
        return '请求的资源不存在';
      case 500:
        return '服务器内部错误';
      default:
        return data.message || '请求失败';
    }
  } else if (error.request) {
    // 请求发送失败
    return '网络错误，请检查网络连接';
  } else {
    // 其他错误
    return error.message || '未知错误';
  }
}

// API 请求封装
export const api = {
  get: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return apiClient.get(url, config);
  },

  post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> => {
    return apiClient.post(url, data, config);
  },

  put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> => {
    return apiClient.put(url, data, config);
  },

  patch: <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> => {
    return apiClient.patch(url, data, config);
  },

  delete: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return apiClient.delete(url, config);
  },
};

export default api;
