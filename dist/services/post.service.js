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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const schemas_1 = require("../schemas");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const utils_1 = require("../utils");
let PostService = class PostService {
    constructor(postModel) {
        this.postModel = postModel;
    }
    async get(limit, page) {
        if (!utils_1.CONSTANTS.NUMBER_REGEX.test(limit))
            limit = '10';
        if (!utils_1.CONSTANTS.NUMBER_REGEX.test(page))
            page = '1';
        const _limit = parseInt(limit), _page = parseInt(page), query = this.postModel.find(), skip = (_page - 1) * _limit;
        query.skip(skip);
        query.limit(_limit);
        query.lean();
        const data = await query.exec(), count = await this.postModel.countDocuments();
        return { data, count };
    }
    async create(post) {
        if (this.postContentLengthGreaterThenLimit(post.content, utils_1.CONSTANTS.POST_CONTENT_LIMIT))
            throw new common_1.HttpException(utils_1.Messages.Length_Error, common_1.HttpStatus.BAD_REQUEST);
        return this.postModel.create(post);
    }
    async update(id, post) {
        const isPresent = await this.postModel.findById(id);
        if (!isPresent)
            throw new common_1.HttpException(utils_1.Messages.Post_Not_Found, common_1.HttpStatus.NOT_FOUND);
        if (this.postContentLengthGreaterThenLimit(post.content, utils_1.CONSTANTS.POST_CONTENT_LIMIT))
            throw new common_1.HttpException(utils_1.Messages.Length_Error, common_1.HttpStatus.BAD_REQUEST);
        return this.postModel.findByIdAndUpdate(id, post, { new: true });
    }
    async delete(id) {
        const isPresent = await this.postModel.findById(id);
        if (!isPresent)
            throw new common_1.HttpException(utils_1.Messages.Post_Not_Found, common_1.HttpStatus.NOT_FOUND);
        return this.postModel.findByIdAndDelete(id);
    }
    postContentLengthGreaterThenLimit(content, limit) {
        return content.length > limit;
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schemas_1.Post.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map