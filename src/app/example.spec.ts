import { Example } from "./example";

describe('Example', () => {
    it('should hash "Example"', () => {
        const e = new Example();

        expect(e.doSomething()).toBe('0a52730597fb4ffa01fc117d9e71e3a9');
    });
});