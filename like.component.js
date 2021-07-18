"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
var Like = /** @class */ (function () {
    function Like(_likes, _isLiked) {
        this._likes = _likes;
        this._isLiked = _isLiked;
    }
    Object.defineProperty(Like.prototype, "likes", {
        get: function () {
            return this._likes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "isLiked", {
        get: function () {
            return this._isLiked;
        },
        enumerable: false,
        configurable: true
    });
    Like.prototype.onClick = function () {
        // if(this._isLiked){
        //     this.likes--;
        // }
        // else {
        //     this.likes++;
        // }
        this._likes += (this._isLiked) ? -1 : 1;
        this._isLiked = !this._isLiked;
    };
    return Like;
}());
exports.Like = Like;
