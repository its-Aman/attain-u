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
exports.RedisService = void 0;
const common_1 = require("@nestjs/common");
const utils_1 = require("../utils");
const redis_1 = require("redis");
let RedisService = class RedisService {
    constructor() {
        this.createRedisClient();
    }
    createRedisClient() {
        this.redisClient = (0, redis_1.createClient)({
            host: (0, utils_1.getRedisURI)()
        });
    }
    getRedis() {
        return this.redisClient;
    }
    async getElement(key) {
        return new Promise((resolve, reject) => {
            this.redisClient.get(key, (err, results) => {
                (err) ? reject(err) : resolve(results);
            });
        });
    }
    async setElement(key, value, expiration) {
        await this.redisClient.set(key, value);
        if (expiration) {
            await this.expire(key, expiration);
        }
    }
    async expire(key, secs) {
        await this.redisClient.expire(key, secs);
    }
    async removeElement(key) {
        await this.redisClient.del(key);
    }
};
RedisService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], RedisService);
exports.RedisService = RedisService;
//# sourceMappingURL=redis.service.js.map