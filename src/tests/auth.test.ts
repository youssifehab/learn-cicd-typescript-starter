import { getAPIKey } from "../api/auth";
import { describe, expect, test } from "vitest";

const person = {
  isActive: true,
  age: 32,
};

describe("person", () => {
  test("person is defined", () => {
    expect(person).toBeDefined();
  });

  test("is active person", () => {
    expect(person.isActive).toBeTruthy();
  });
});

describe("auth", () => {
  test("get api key", () => {
    const apiKey = getAPIKey({ authorization: "ApiKey secret" });
    expect(apiKey).toBe("secret");
  });

  test("no authorization key in the header", () => {
    const apiKey = getAPIKey({});
    expect(apiKey).toBe("");
  });

  test("no apikey in the header", () => {
    const apiKey = getAPIKey({ authorization: "test secret" });
    expect(apiKey).toBeNull();
  });
});
