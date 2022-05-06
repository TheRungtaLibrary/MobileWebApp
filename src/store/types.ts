export interface Image {
    uri: string;
    set: string,
}

export interface Vehicle {
    title: string,
    htmlDescription: string;
    images: Image[],
}

export interface VehicleInfo {
    vehicle: Vehicle,
    isLoading: boolean;
}