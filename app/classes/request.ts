declare let google: any;

export class Request {

    public srcLon: number;
    public srcLat: number;
    public destLon: number;
    public destLat: number;
    public isBeingProcessed: boolean;
    public people: boolean;

    public srcAddress: number;
    public destAddress: string;

    constructor(srcLon: number, srcLat: number, destLon: number, destLat: number) {
        this.srcLon = srcLon;
        this.srcLat = srcLat;
        this.destLon = destLon;
        this.destLat = destLat;
        this.isBeingProcessed = false;
        this.people = false;
        this.getAddress();
    }

    public getAddress()
    {
        let geocoder = new google.maps.Geocoder();
        let latLngSrc = new google.maps.LatLng(this.srcLat,this.srcLon);
        geocoder.geocode( {'latLng':latLngSrc}, (response: any, status: any) => {
            if (status == google.maps.GeocoderStatus.OK) {
                this.srcAddress = response[0].formatted_address;
            }
        })
        let latLngDest = new google.maps.LatLng(this.destLat,this.destLon);
        geocoder.geocode({latLng: latLngDest}, (response: any, status: any) => {
            if (status == google.maps.GeocoderStatus.OK) {
                this.destAddress = response[0].formatted_address;
            }
        })           
        
    }
    

}