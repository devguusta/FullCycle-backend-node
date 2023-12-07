import { extend } from "lodash";
import { ValueObject } from "../value-object";

class StringValueObject extends ValueObject {
    constructor(readonly value: string) {
        super();
    }
}
class ComplexValueObject extends ValueObject {
    constructor(readonly value: string, readonly value2: number) {
        super();
    }
}

describe('Value Object Unit Tests', () => {
    test('should be equals', () => {
        const value1 = new StringValueObject('test');
        const value2 = new StringValueObject('test');
        expect(value1.equals(value2)).toBeTruthy();

        const value3 = new ComplexValueObject('test', 1);
        const value4 = new ComplexValueObject('test', 1);
        expect(value3.equals(value4)).toBeTruthy();
        
    });

    test('should not be equals', () => {
        const value1 = new StringValueObject('test');
        const value2 = new StringValueObject('test2');
        expect(value1.equals(value2)).toBeFalsy();

        const value3 = new ComplexValueObject('test', 1);
        const value4 = new ComplexValueObject('test', 2);
        expect(value3.equals(value4)).toBeFalsy();
    });
});