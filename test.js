const tryCatch = require(".");

describe("tryCatch", function() {
  it("should handle sync success function", () => {
    function fn(a, b) {
      return a + b;
    }

    const [, result] = tryCatch(fn, 1, 2);

    expect(result).toBe(3);
  });

  it("should handle sync error function", () => {
    function fn(a, b) {
      throw new Error(`a+b=${a + b}`);
    }

    const [err] = tryCatch(fn, 1, 2);

    expect(err.message).toBe("a+b=3");
  });

  it("should handle async success function", async () => {
    expect.assertions(1);

    async function fn(a, b) {
      return a + b;
    }

    const [, result] = await tryCatch(fn, 1, 2);

    expect(result).toBe(3);
  });

  it("should handle sync error function", async () => {
    expect.assertions(1);

    async function fn(a, b) {
      throw new Error(`a+b=${a + b}`);
    }

    const [err] = await tryCatch(fn, 1, 2);

    expect(err.message).toBe("a+b=3");
  });
});
