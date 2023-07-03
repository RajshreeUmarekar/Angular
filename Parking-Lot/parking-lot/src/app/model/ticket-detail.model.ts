import { VehicleType } from "./enum/vehicle-types.model";

export class TicketDetails {
    ticketId?: number;
    entryGateNumber?: number;
    entryTime?: Date;
    exitTime?: Date;
    vehicleNumber?: string;
    vehicleType?: VehicleType;
}