export class Like {
    constructor(private _likes: number, private _isLiked: boolean){

    }

    get likes() {
        return this._likes;
    }

    get isLiked() {
        return this._isLiked;
    }

    onClick() {
        // if(this._isLiked){
        //     this.likes--;
        // }
        // else {
        //     this.likes++;
        // }

        this._likes +=  (this._isLiked) ? -1 : 1;
        this._isLiked = !this._isLiked;
    }
}