-- CREATE TABLE "cars"-- CREATE TABLE "cars"
-- (
-- 	"id"            serial  PRIMARY KEY,
-- 	"brand"         character varying(300) NOT NULL,
-- 	"model"         character varying(300) NOT NULL,
-- 	"licensePlate" character varying(300) NOT NULL,
-- 	"vin"           character varying(300) NOT NULL
-- ) WITH ( OIDS = FALSE );
--
--
--
-- CREATE TABLE "rate"
-- (
-- 	"id"            serial PRIMARY KEY,
-- 	"distance"      int NOT NULL,
-- 	"price"         float NOT NULL
-- ) WITH ( OIDS = FALSE );
--
--
--
-- CREATE TABLE "car_booking"
-- (
-- 	"id"            serial PRIMARY KEY,
-- 	"carId"       bigint NOT NULL,
-- 	"rateId"       bigint NOT NULL,
-- 	"startDate"    date NOT NULL,
-- 	"endDate"      date NOT NULL,
-- 	FOREIGN KEY ("carId") REFERENCES "cars" ("id"),
-- 	FOREIGN KEY ("rateId") REFERENCES "rate" ("id")
-- ) WITH ( OIDS = FALSE );

-- (
-- 	"id"            serial  PRIMARY KEY,
-- 	"brand"         character varying(300) NOT NULL,
-- 	"model"         character varying(300) NOT NULL,
-- 	"licensePlate" character varying(300) NOT NULL,
-- 	"vin"           character varying(300) NOT NULL
-- ) WITH ( OIDS = FALSE );
--
--
--
-- CREATE TABLE "rate"
-- (
-- 	"id"            serial PRIMARY KEY,
-- 	"distance"      int NOT NULL,
-- 	"price"         float NOT NULL
-- ) WITH ( OIDS = FALSE );
--
--
--
-- CREATE TABLE "car_booking"
-- (
-- 	"id"            serial PRIMARY KEY,
-- 	"carId"       bigint NOT NULL,
-- 	"rateId"       bigint NOT NULL,
-- 	"startDate"    date NOT NULL,
-- 	"endDate"      date NOT NULL,
-- 	FOREIGN KEY ("carId") REFERENCES "cars" ("id"),
-- 	FOREIGN KEY ("rateId") REFERENCES "rate" ("id")
-- ) WITH ( OIDS = FALSE );
