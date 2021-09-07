"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const passport_1 = require("@nestjs/passport");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
const services_1 = require("./services");
const controller_1 = require("./controller");
const utils_1 = require("./utils");
const schemas_1 = require("./schemas");
const guard_1 = require("./guard");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot((0, utils_1.getMongoURI)()),
            mongoose_1.MongooseModule.forFeature([{ name: schemas_1.Post.name, schema: schemas_1.PostSchema }]),
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: utils_1.CONSTANTS.JWT_SECRET,
                signOptions: {
                    expiresIn: utils_1.CONSTANTS.TOKEN_EXPIRE_TIME,
                    notBefore: utils_1.CONSTANTS.NOT_BEFORE_TIME,
                },
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
        ],
        controllers: [
            controller_1.AppController,
            controller_1.AuthController,
            controller_1.PostController
        ],
        providers: [
            guard_1.AdminGuard,
            guard_1.JwtAuthGuard,
            services_1.AppService,
            services_1.AuthService,
            services_1.JwtStrategy,
            services_1.PostService
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map