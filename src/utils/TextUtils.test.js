import { describe } from "vitest";
import { capitalize } from "./TextUtils";

describe("Text Utilities",() => {
    it("Correctly capitalizes single word", () => {
        expect(capitalize("test")).toBe("Test");
        expect(capitalize("capital")).toBe("Capital");
        expect(capitalize("Test")).toBe("Test");
        expect(capitalize("newWord")).toBe("NewWord");

    });
    
    it("Correctly capitalizes all words in a string", () => {
        expect(capitalize("test output")).toBe("Test Output");
        expect(capitalize("here's A longer sentence to see what happens.")).toBe("Here's A Longer Sentence To See What Happens.");

    });
});