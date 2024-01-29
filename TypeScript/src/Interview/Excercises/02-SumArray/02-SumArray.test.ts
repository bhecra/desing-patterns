import { sumArray } from "./SumArray";


describe("Sumarray(arr, n)", function () {
  it("should return true when there is a combination of two numbers that sums n", function () {
    expect(sumArray([2,4,5,9], 9)).toBe(true);
  });
  it("should return false when no combination of two numbers sums n", function () {
    expect(sumArray([2, 4, 5, 9], 12)).toBe(false);
  });
  it("should not sum the same number twice to reach n", function () {
    expect(sumArray([2, 5, 9], 4)).toBe(false);
  });

  describe("Extra: unordered array", function() {
    it("should return true when there is a combination of two numbers that sums n", function () {
      expect(sumArray([5,2,9,4], 9)).toBe(true);
    });
    it("should return false when no combination of two numbers sums n", function () {
      expect(sumArray([5, 2, 9, 4], 12)).toBe(false);
    });
  })
});
