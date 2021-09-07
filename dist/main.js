"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const utils_1 = require("./utils");
const helmet = require("helmet");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix(utils_1.CONSTANTS.API_PREFIX);
    app.enableVersioning();
    app.enableCors();
    app.use(helmet());
    await app.listen(utils_1.CONSTANTS.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map