import { Uuid } from "../uuid.vo";

describe('Uuid Unit tests', () => {  

    const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate');

    test('SHould throw error when uuid is invalid', () => {   

        expect(() => {
            new Uuid('invalid-uuid');
        }).toThrowError();
        expect(validateSpy).toHaveBeenCalled();

    }) 
    test('SHould create a valid uuid', () => {
        const uuid = new Uuid();
        expect(uuid).toBeDefined();
        expect(validateSpy).toHaveBeenCalledTimes(1)
    })

    test('SHould create a valid uuid with custom id', () => {
        const uuid = new Uuid('b3e0e4c3-4d0f-4c6e-8f9c-8e3a9e2d3b1e');
        expect(uuid).toBeDefined();
        expect(uuid.id).toBe('b3e0e4c3-4d0f-4c6e-8f9c-8e3a9e2d3b1e');
        expect(validateSpy).toHaveBeenCalledTimes(1)
    
    })
});