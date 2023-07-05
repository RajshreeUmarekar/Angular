import { VehicleType } from "./enum/vehicle-types.model";

export class BookingDetails {
    entryGateNumber?: number | null;
    entryTime?: string | null;
    vehicleNumber?: string | null;
    vehicleType?: VehicleType | string | null;
}