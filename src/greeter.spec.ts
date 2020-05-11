import * as greeter from "./greeter";
jest.mock('./database', () => {
    return {people: [":name:"]};
});

test("hello world", () => {
    expect(greeter.greet()).toBe("Hello :name:!");
});