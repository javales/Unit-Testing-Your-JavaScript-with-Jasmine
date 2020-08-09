describe('calc.js', function() {
    describe('Calculator', function() {
        it('should initialize the total', function() {
            const calculator = new Calculator();
    
            expect(calculator.total).toBe(0);
            expect(calculator.total).toBeFalsy();
        });
    
        it('can be instantiated', function() {
            jasmine.addMatchers(customMatchers);
    
            const calculator = new Calculator();
            const calculator2 = new Calculator();
    
            expect(calculator).toBeCalculator(); //custom matcher for just this one spec
            expect(calculator).toBeTruthy();
            expect(calculator2).toBeTruthy();
            expect(calculator).toEqual(calculator2);
            expect(calculator.constructor.name /* Calculator */).toContain("Calculat");
        });
    
        it('instantiates unique object', function() {
            const calculator1 = new Calculator();
            const calculator2 = new Calculator();
            
            expect(calculator1).not.toBe(calculator2);
        });
    
        it('has common operations', function() {
            const calculator = new Calculator();
    
            expect(calculator.add).toBeDefined();     // or not.toBeUndefined();
            expect(calculator.subtract).toBeDefined();     // or not.toBeUndefined();
            expect(calculator.multiply).toBeDefined();     // or not.toBeUndefined();
            expect(calculator.divide).toBeDefined();   // or not.toBeUndefined();
        })
    
        it('can overwrite total', function() {
            const calculator = new Calculator();
    
            calculator.total = null;
            expect(calculator.total).toBeNull();
        });

        describe('add()', function() {
            it('should add numbers to total', function() {
                const calculator = new Calculator();
                calculator.add(5);
                expect(calculator.total).toBe(5);
                //expect(10).toBe(10);
            });

            it('returns total', function() {
                const calculator = new Calculator();
                calculator.total = 50;
        
                expect(calculator.add(20)).toBe(70);
                expect(calculator.total).toMatch(/-?\d+/);
                expect(typeof calculator.total).toMatch('number');
                expect(calculator.total).toBeNumber();
                expect(calculator.total).toEqual(jasmine.anything());
                expect(function() {}).toEqual(jasmine.anything()); // expect when value is null or undefined
            });

        });

        describe('subtract()', function() {
            it('should subract numbers from total', function() {
                const calculator = new Calculator();
                calculator.total = 30;
                calculator.subtract(5);
        
                expect(calculator.total).toBe(25);
            });

        });

        describe('multiply()', function() {
            it('should multiply numbers by total', function() {
                const calculator = new Calculator();
                calculator.total = 100;
                calculator.multiply(2);
            
                expect(calculator.total).toBe(200);
            });

            it('does not handle NaN', function() {
                const calculator = new Calculator();
        
                calculator.total = 20;
                calculator.multiply('a');
        
                expect(calculator.total).toBeNaN();
            });
        });

        describe('divide()', function() {
            it('should divide numbers into total', function() {
                const calculator = new Calculator();
                calculator.total = 200;
                calculator.divide(2);
            
                expect(calculator.total).toBe(100);
            });

            it('handles divide by zero', function() {
                const calculator = new Calculator();
        
                expect(function() { calculator.divide(0) }).toThrow();
                expect(function() { calculator.divide(0) }).toThrowError(Error);
                expect(function() { calculator.divide(0) }).toThrowError(Error, 'Cannot divide by zero');
            });
        });    
    });
});