import { division } from "./division";

describe("division", function () {
  test("positive", () => {
    expect(division(9, 3)).toBe(3);
  });

  test("negative", () => {
    expect(division(-9, 3)).toBe(-3);
  });
});
