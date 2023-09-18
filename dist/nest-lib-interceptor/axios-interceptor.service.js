"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibAxiosInterceptorService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
let LibAxiosInterceptorService = class LibAxiosInterceptorService {
    constructor(httpService) {
        this.httpService = httpService;
        this.httpService.axiosRef.interceptors.request.use((config) => {
            console.log('Interceptor is running...');
            return config;
        });
    }
};
LibAxiosInterceptorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], LibAxiosInterceptorService);
exports.LibAxiosInterceptorService = LibAxiosInterceptorService;
//# sourceMappingURL=axios-interceptor.service.js.map