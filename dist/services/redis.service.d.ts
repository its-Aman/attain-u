export declare class RedisService {
    redisClient: any;
    constructor();
    private createRedisClient;
    getRedis(): any;
    getElement(key: string): Promise<unknown>;
    setElement(key: string, value: any, expiration?: number): Promise<void>;
    expire(key: string, secs: number): Promise<void>;
    removeElement(key: string): Promise<void>;
}
