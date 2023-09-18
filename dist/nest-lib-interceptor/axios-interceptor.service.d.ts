import { HttpService } from '@nestjs/axios';
export declare class LibAxiosInterceptorService {
    private readonly httpService;
    constructor(httpService: HttpService);
}
