import { Module } from '@nestjs/common'
import { LibAxiosInterceptorService } from './axios-interceptor.service'

@Module({
  providers: [LibAxiosInterceptorService],
  exports: [LibAxiosInterceptorService]
})
export class LibAxiosInterceptorModule {}
