import { maxValue } from "./MaxValue";


describe("MaxValue", function () {
  it("should return 9 if the array of shares is [4,3,2,5,11]", function () {
    expect(maxValue([4,3,2,5,11])).toBe(9);
  });
  it("should return 9 if the array of shares is [23,7,3,4,8,6]", function () {
    expect(maxValue([23,7,3,4,8,6])).toBe(20);
  });
  it("should return 10 if the array of shares is  [4, 3, 2, 1, 11]", function () {
    expect(maxValue( [4, 3, 2, 1, 11])).toBe(10);
  });
});
