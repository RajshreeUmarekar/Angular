INSERT INTO gate(gate_number, floor_number, gate_type) VALUES(1,1,'ENTRY');
INSERT INTO gate(gate_number, floor_number, gate_type) VALUES(2,1,'EXIT');
INSERT INTO gate(gate_number, floor_number, gate_type) VALUES(3,2,'ENTRY');
INSERT INTO gate(gate_number, floor_number, gate_type) VALUES(4,2,'EXIT');
INSERT INTO gate(gate_number, floor_number, gate_type) VALUES(5,3,'ENTRY');
INSERT INTO gate(gate_number, floor_number, gate_type) VALUES(6,3,'EXIT');
INSERT INTO gate(gate_number, floor_number, gate_type) VALUES(7,4,'ENTRY');
INSERT INTO gate(gate_number, floor_number, gate_type) VALUES(8,4,'EXIT');

INSERT INTO floor(floor_number, type_of_parking_spot_id, total_number_of_parking_spots_of_each_type, available_number_of_parking_spots) VALUES(1,1,5,5);
INSERT INTO floor(floor_number, type_of_parking_spot_id, total_number_of_parking_spots_of_each_type, available_number_of_parking_spots) VALUES(1,2,5,5);
INSERT INTO floor(floor_number, type_of_parking_spot_id, total_number_of_parking_spots_of_each_type, available_number_of_parking_spots) VALUES(2,1,5,5);
INSERT INTO floor(floor_number, type_of_parking_spot_id, total_number_of_parking_spots_of_each_type, available_number_of_parking_spots) VALUES(3,3,10,10);

INSERT INTO type_of_parking_spot(parking_spot_type, max_capacity) VALUES('COMPACT', 10);
INSERT INTO type_of_parking_spot(parking_spot_type, max_capacity) VALUES('LARGE', 20);
INSERT INTO type_of_parking_spot(parking_spot_type, max_capacity) VALUES('HANDICAPPED', 15);
INSERT INTO type_of_parking_spot(parking_spot_type, max_capacity) VALUES('MOTORCYCLE', 25);
INSERT INTO type_of_parking_spot(parking_spot_type, max_capacity) VALUES('ELECTRIC', 5);

INSERT INTO parking_spot(parking_spot_type_id, floor_number, is_chargable, is_occupied) VALUES(2,1,true,false);
INSERT INTO parking_spot(parking_spot_type_id, floor_number, is_chargable, is_occupied) VALUES(3,2,true,false);
INSERT INTO parking_spot(parking_spot_type_id, floor_number, is_chargable, is_occupied) VALUES(1,1,false,true);
INSERT INTO parking_spot(parking_spot_type_id, floor_number, is_chargable, is_occupied) VALUES(5,1,false,false);
INSERT INTO parking_spot(parking_spot_type_id, floor_number, is_chargable, is_occupied) VALUES(4,4,true,false);
INSERT INTO parking_spot(parking_spot_type_id, floor_number, is_chargable, is_occupied) VALUES(1,5,true,true);