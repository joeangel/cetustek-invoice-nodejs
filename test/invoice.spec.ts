import { create } from "../src/invoice";

test("create() returns correct string", () => {
  const result = create({
    OrderId: "123",
    OrderDate: "2020/07/01",
    BuyerName: "Joe",
    BuyerEmailAddress: "joe@fio.one",
    DonateMark: 2,
    desc: 'TEST 01',
    price: 1,
  });
  expect(result).toBe("ok");
});
