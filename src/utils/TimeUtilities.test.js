import { describe } from "vitest";
import {storeTime, recallTime, timeToString} from "./TimeUtilities";

describe("Time utilities", () => {
    it("storeTime successfully outputs an integer number of seconds",() => {

    });

    it("recallTime successfully outputs an object",() => {
        //input should be seconds
        //output should be object hours, minutes, seconds
    });


    it("timeToString successfully outputs a string on integer input",() => {
        //input 3600 / 3630
        //output 1 hour / 1 hour, 30 seconds

        
        expect(timeToString(30)).toBe("30 seconds");
        expect(timeToString(1800)).toBe("30 minutes");
        expect(timeToString(60)).toBe("1 minute");
        expect(timeToString(3600)).toBe("1 hour");
        expect(timeToString(3630)).toBe("1 hour, 30 seconds");
        expect(timeToString(13530)).toBe("3 hours, 45 minutes, 30 seconds");
        
    });

    it("timeToString successfully outputs a string on object input",() => {
        //input 3600 / 3630
        //output 1 hour / 1 hour, 30 seconds
        
    });

    it("timeToString outputs -1 on invalid input",() => {
        //input 3600 / 3630
        //output 1 hour / 1 hour, 30 seconds

        
        expect(timeToString("test")).toBe(-1);
        expect(timeToString([1,2,3])).toBe(-1);
        expect(timeToString(-3600)).toBe(-1);
        
        
    });
});