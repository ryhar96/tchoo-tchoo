export class Request {

    public srcLon: number;
    public srcLat: number;
    public destLon: number;
    public destLat: number;

    constructor(srcLon: number, srcLat: number, destLon: number, destLat: number) {
        this.srcLon = srcLon;
        this.srcLat = srcLat;
        this.destLon = destLon;
        this.destLat = destLat;
    }

}