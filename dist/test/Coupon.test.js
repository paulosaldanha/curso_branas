"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Coupon_1 = __importDefault(require("../src/Coupon"));
test("Deve criar um cupom de desconto valido", function () {
    const cupon = new Coupon_1.default("VALE20", 20, new Date("2021-12-10"));
    const today = new Date("2021-12-01");
    const isValid = cupon.isValid(today);
    expect(isValid).toBeTruthy();
});
test("Deve criar um cupom de desconto expirado", function () {
    const cupon = new Coupon_1.default("VALE20", 20, new Date("2021-03-10"));
    const today = new Date("2021-12-10");
    const isExpired = cupon.isExpired(today);
    expect(isExpired).toBeTruthy();
});
