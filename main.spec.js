function addition(left, right) {
    return left + right;
}

function isNull(value) {
    return value === null;
}

function getGreeting(name) {
    return 'Hello ' + name;
}

function parseBoolean(value) {
    return value.trim().toLowerCase() === 'true';
}

function getPathByHash(hash) {
    return hash.split('/').map(function (item) {
        return item.trim();
    }).filter(function (item) {
        return item !== ''
    });
}

describe('Test for addition', function () {
    it('the sum of the numbers is 10', function() {
        expect(addition(5, 5)).toBe(10);
    });
    it('the sum of the numbers is not 1', function() {
        expect(addition(5, 5)).not.toBe(1);
    });
    it('value is not undefined ', function() {
        expect(addition(5, 5)).toBeDefined();
    });
    
    it('value is not Null ', function() {
        expect(addition(5, 5)).not.toBeNull();
    });
    it('value is not NaN ', function() {
        expect(addition(5, 5)).not.toBeNaN();
    });
    it('value is string contain "day"', function() {
        expect(addition('sun ', 'day')).toContain('day');
    });
    it('value is string equally "sun day"', function() {
        expect(addition('sun ', 'day')).toMatch(/sun day/);
    });
    it('value is  less than 5 ', function() {
        expect(addition(1, 3)).toBeLessThan(5);
    });
    it('value is less or equal 10 ', function() {
        expect(addition(5, 5)).toBeLessThanOrEqual(10);
    });
    it('value is more than 5 ', function() {
        expect(addition(5, 5)).toBeGreaterThan(5);
    });
    it('value is more or equal 0 ', function() {
        expect(addition(5, 5)).toBeGreaterThan(0);
    });
        
    // write tests here
});

describe('Test for isNull', function () {
    it('must return true ', function() {
        expect(isNull(null)).toBe(true);
    });

    it('the result not undefined ', function() {
        expect(isNull(null)).toBeDefined();
    });

    it('value is Null ', function() {
        expect(isNull(null)).toBeTruthy();
    });

    it('value is not Null ', function() {
        expect(isNull(5)).toBeFalsy();
    });
    // write tests here
});

describe('Test for getGreeting', function () {
    it('value is not undefined ', function() {
        expect(getGreeting('World')).toBeDefined();
    });
    
    it('value is not Null ', function() {
        expect(getGreeting('World')).not.toBeNull();
    });
    it('value is not NaN ', function() {
        expect(getGreeting('World')).not.toBeNaN();
    });
    it('value is string contain "Hello"', function() {
        expect(getGreeting('World')).toContain('Hello');
    });
    it('value is string equally "Hello World"', function() {
        expect(getGreeting('World')).toMatch(/Hello World/);
    });
    it('the sum is tring "Hello World"', function() {
        expect(getGreeting('World')).toBe("Hello World");
    });

    // write tests here
});

describe('Test for parseBoolean', function () {

    it('must return true for " TruE" string', function () {
        expect(parseBoolean(' TruE')).toBe(true);
    });

    it('not return true for " ruE" string', function () {
        expect(parseBoolean(' ruE')).toBeFalsy();
    });

    it('equality true for "  tRUe" ', function () {
        expect(parseBoolean('  tRUe')).toBeTruthy();
    });

    // write tests here
});

describe('Test for getPathByHash', function () {

    it('must return ["user", "create"] for "user/create" hash string', function () {
        expect(getPathByHash('user/create')).toEqual(['user', 'create']);
    });
    it('the result  of the function contains "user" ', function () {
        expect(getPathByHash('user/create')).toContain('user');
    });
    it('the result  of the function not null ', function () {
        expect(getPathByHash('user/create')).not.toBeNull();
    });
    it('the result  of the function not undefined ', function () {
        expect(getPathByHash('user/create')).toBeDefined();
    });
    

    // write tests here
});
