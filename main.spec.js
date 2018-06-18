describe('СТРОКИ', function () {
    
    var str1 = "Hello ",
        str2 = "World",
        str3 = "Hello World";

    describe('Создание строк ', function (){

        it("Создание строек с помощью \"\" и \'\' ", function() {
            var s1 = "man",
                s2 = 'gerl';
            expect(typeof s1, s2).toBe("string");
        });

        it('Метод repeat()', function () {

            var RepEt = str1.repeat(2);
            expect(RepEt).toBe("Hello Hello ");

        });

        it('Метод replace()', function () {
            
            var RePlace = str3.replace("Hello", str2);
            expect(RePlace).toBe("World World");

        });

        it('Метод slice()', function(){

            var mySlice = str1.slice(1, 5);
            expect(mySlice).toBe("ello");

            mySlice = str1.slice(-2, -1);
            expect(mySlice).toBe("o");

            mySlice = str1.slice(0);
            expect(mySlice).toBe("Hello ");

            mySlice = str1.slice(2);
            expect(mySlice).toBe("llo ");

        });

        it('Метод substr()', function(){

            var SubStr = str3.substr(2);
            expect(SubStr).toBe("llo World");

            SubStr = str3.substr(2, 2);
            expect(SubStr).toBe("ll");

        });
        
        it('Метод substring()', function(){

            var SubString = str3.substring(2);
            expect(SubString).toBe("llo World");

            SubString = str3.substring(1, 4);
            expect(SubString).toBe("ell");

            SubString = str3.substring(4, 1);
            expect(SubString).toBe("ell");

            SubString = str3.substring(-3);
            expect(SubString).toBe("Hello World");

        });

        it('Метод trim()', function(){
            str4 = " Hello "
            expect(str4.trim()).toBe("Hello");
        });


    });   
    describe('Операции со строками', function (){

        it('Определение длины строки Свойство length', function () {
            expect(str1.length).not.toBe(5);
        });

        describe('Сложение строк', function (){
            
            it("Сложение строк + ", function() {
                str = str1 + str2 + "!" + 2018;
                expect(str).toBe("Hello World!2018");
            });

            it("Сложение строк с помощью метода concat()", function() {
                expect(str1.concat(str2, "!")).toBe("Hello World!");
            });

        });
       

        describe('Сравнение строк', function (){

            it('Сравнение строк > <', function () {
                expect(str2 > str1).toBeTruthy();
                expect(str1 < "hello").toBeTruthy();
            });

            it('Метод localeCompare()', function () {
                expect(str1.localeCompare(str2)).toBe(-1);
                expect(str1.localeCompare('Hello ')).toBe(0);
                expect(str2.localeCompare(str1)).toBe(1);
            });

        });

        it("Изменение строк", function() {

            var s = "You";
            s = s + " " + "Win"
            expect(s).toBe("You Win");

            s[1] = "y";
            expect(s).not.toBe("you Win");
        });

        describe("Изменение регистра строк", function() {
            it('Метод toLowerCase()', function(){
                expect(str3.toLowerCase ()).toBe("hello world");
            });
    
            it('Метод toUpperCase()', function(){
                expect(str3.toUpperCase()).toBe("HELLO WORLD");
            });
    
        });

    });



    describe('Доступ к символам строки', function (){

        it('Доступ через []', function () {
            expect(str1[1]).toBe('e');
        });

        it('Метод charAt()', function () {
            expect(str1.charAt(3)).toBe('l');
        });

    });

    describe('Поиск подстроки', function (){

        it('Метод indexOf()', function () {
            expect(str3.indexOf("l")).toBe(2);
            expect(str3.indexOf("l", 5)).toBe(9);
            expect(str3.indexOf("L")).toBe(-1);
        });

        it('Метод lastIndexOf()', function () {
            expect(str3.lastIndexOf("l")).toBe(9);
            expect(str3.lastIndexOf("L")).toBe(-1);
        });

        it('Метод includes()', function () {
            expect(str3.includes("lo Wo")).toBeTruthy();
        });

    });

    it('Создание массива из строки  с помощью метода split()', function(){
        expect(str3.split()).toEqual(["Hello World"]);
        expect(str3.split(" ")).toEqual(["Hello", "World"]);
        expect(str2.split("")).toEqual(["W", "o", "r", "l", "d"]);
        expect(str2.split("", 3)).toEqual(["W", "o", "r"]);
        expect(str2.split("o")).toEqual(["W", "rld"]);
    });

    describe('Проверка на окончание или начало строки символами другой строки', function(){

        it('Метод endsWith()', function () {
            expect(str3.endsWith("ld")).toBeTruthy();
            expect(str3.endsWith("ld", 5)).toBeFalsy();
            expect(str2.endsWith("ld", 5)).toBeTruthy();
        });
        
        it('Метод startsWith()', function(){
            expect(str3.startsWith("Hello")).toBeTruthy();
            expect(str1.startsWith("hello")).toBeFalsy();
            expect(str1.startsWith("Hello", 2)).toBeFalsy();
        });

    });

        
       


        

    
});
