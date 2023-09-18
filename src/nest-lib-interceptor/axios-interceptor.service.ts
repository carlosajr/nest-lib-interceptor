import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'

@Injectable()
export class LibAxiosInterceptorService {
  constructor(private readonly httpService: HttpService) {
    this.httpService.axiosRef.interceptors.request.use((config) => {
      console.log('Interceptor is running...')
      return config
    })
  }
}
