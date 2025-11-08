import { describe } from "vitest";
import {storeTime, recallTime, timeToString} from "./TimeUtilities";

describe("Time utilities", () => {
    it("storeTime successfully outputs an integer number of seconds",() => {
        expect(storeTime({hours: 1, minutes: 0, seconds: 0})).toBe(3600);
        expect(storeTime({hours: 0, minutes: 1, seconds: 0})).toBe(60);
        expect(storeTime({hours: 0, minutes: 0, seconds: 1})).toBe(1);
        expect(storeTime({hours: 0, minutes: 1, seconds: 1})).toBe(61);
        expect(storeTime({hours: 1, minutes: 0, seconds: 1})).toBe(3601);
        expect(storeTime({hours: 1, minutes: 1, seconds: 1})).toBe(3661);
        expect(storeTime({hours: 3, minutes: 45, seconds: 30})).toBe(13530);
    });

    it("recallTime successfully outputs an object",() => {
        //input should be seconds
        //output should be object hours, minutes, seconds
        
        expect(recallTime(3600)).toEqual({hours: 1, minutes: 0, seconds: 0});
        expect(recallTime(60)).toEqual({hours: 0, minutes: 1, seconds: 0});
        expect(recallTime(1)).toEqual({hours: 0, minutes: 0, seconds: 1});
        expect(recallTime(61)).toEqual({hours: 0, minutes: 1, seconds: 1});
        expect(recallTime(3601)).toEqual({hours: 1, minutes: 0, seconds: 1});
        expect(recallTime(3661)).toEqual({hours: 1, minutes: 1, seconds: 1});
        expect(recallTime(13530)).toEqual({hours: 3, minutes: 45, seconds: 30});
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
        expect(timeToString({hours: 1, minutes: 0, seconds: 0})).toBe("1 hour");
        expect(timeToString({hours: 0, minutes: 1, seconds: 0})).toBe("1 minute");
        expect(timeToString({hours: 0, minutes: 0, seconds: 1})).toBe("1 second");
        expect(timeToString({hours: 0, minutes: 1, seconds: 1})).toBe("1 minute, 1 second");
        expect(timeToString({hours: 1, minutes: 0, seconds: 1})).toBe("1 hour, 1 second");
        expect(timeToString({hours: 1, minutes: 1, seconds: 1})).toBe("1 hour, 1 minute, 1 second");
        expect(timeToString({hours: 3, minutes: 45, seconds: 30})).toBe("3 hours, 45 minutes, 30 seconds");
    });

    it("timeToString outputs -1 on invalid input",() => {
        //input 3600 / 3630
        //output 1 hour / 1 hour, 30 seconds

        
        expect(timeToString("test")).toBe(-1);
        expect(timeToString([1,2,3])).toBe(-1);
        expect(timeToString(-3600)).toBe(-1);
        
        
    });
});