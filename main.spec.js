describe('ООП в прототипном чтиле', function() {
    describe('Object prototype', function () {

        it ('prototype __proto__', function(){
            var human = {
                    eats:true
                },
                man = {
                    running:true
                };  
            man.__proto__ = human;
    
            expect(man.running).toBeTruthy();
            expect(man.eats).toBeTruthy();

            man.eats = false;
            expect(man.eats).toBeFalsy();
            expect(human.eats).toBeTruthy();
            
            man = {
                running:true,
                __proto__ : human
            };
            expect(man.running).toBeTruthy();
            expect(man.eats).toBeTruthy();
        });
        
        it ('hasOwnProperty', function (){

            var human = {
                    eats:true
                },
                man = {
                    running:true,
                    __proto__ : human
                };

            expect(man.hasOwnProperty('running')).toBeTruthy();
            expect(man.hasOwnProperty('eats')).toBeFalsy();

            spy = jasmine.createSpy('spy');

            for (var key in man) {
                if (!man.hasOwnProperty(key)) {
                    continue;
                } else {
                    spy(key);
                }        
            }

            expect(spy.calls.count()).toBe(1);
            expect(spy).toHaveBeenCalledWith('running');
        });

        it ('Object.create()', function () {
            var human = {
                    speak:'Hello!'
                },
                man = Object.create(null);
            
            man.speak = 'Hello!';

            expect(human.toString).toBeDefined();
            expect(man.toString).toBeUndefined();

        });
        
        it ('Object.getPrototypeOf()', function () {
            var human = {
                    eats:true
                },
                man = {
                    running:true
                };  
            man.__proto__ = human;

            expect(Object.getPrototypeOf(man)).toBe(human)
        });

        it ('Object.setPrototypeOf()', function (){
            var human = {
                    eats:true
                },
                man = {
                    running:true
                };

            Object.setPrototypeOf(man, human);
            expect(Object.getPrototypeOf(man)).toBe(human);

            Object.setPrototypeOf(man, null);
            expect(Object.getPrototypeOf(man)).toBeNull();
        });
    });

    describe ('Object.prototype, new Object', function (){

        it ('.prototype', function (){
            var human = {
                    eats:true
                };
            
            function Man(name) {
                this.name = name;
            }
            Man.prototype = human;

            var maxim = new Man('Maxim');

            expect(maxim.eats).toBe(true);
            expect(Object.getPrototypeOf(maxim)).toBe(human)

        });
       
        it ('constructor', function (){
            function Man() {}
            
            expect(Object.getOwnPropertyNames(Man.prototype)).toEqual(['constructor']);
            expect(Man.prototype.constructor === Man).toBeTruthy();

            function Man(name) {
                this.name = name;
            }
            var maxim = new Man('Maxim');
            var ivan = new maxim.constructor('Ivan');
            
            expect(maxim.name).toBe('Maxim');
            expect(ivan.name).toBe('Ivan');

            Man.prototype = {
                eats:true
            }

            expect(Man.prototype.constructor === Man).toBeFalsy();
            
            Man.prototype = {
                eats:true,
                constructor: Man
            }
            expect(Man.prototype.constructor === Man).toBeTruthy();

            expect(maxim.running).toBeUndefined();
            Man.prototype.running = true;
            maxim = new Man('Maxim');
            expect(maxim.running).toBeDefined();

        });
    });

    describe('built-in classes', function (){

        it ('{}', function (){
            var obj = {};

            expect(obj.__proto__).toBeDefined();
            expect(obj.__proto__.constructor).toBe(Object);

            expect(obj.toString == Object.prototype.toString).toBeTruthy();
            expect(obj.__proto__ == Object.prototype).toBeTruthy();
            expect(obj.__proto__.__proto__).toBeNull()

        });

        it ('classes', function (){
            var arr = [1,2,3];

            expect(arr.__proto__ == Array.prototype).toBeTruthy();
            expect(Array.prototype.__proto__ == Object.prototype).toBeTruthy();
            expect(arr.toString()).toBe('1,2,3');

            var date = new Date();
            expect(date.__proto__ == Date.prototype).toBeTruthy();
            expect(Date.prototype.__proto__ == Object.prototype).toBeTruthy();

        });

        it ('call and apply in prototype', function (){

            function some(){
                return [].join.call(arguments, "-")
            }

            expect(some('a','b','c')).toBe('a-b-c');

            function some2(){
                return Array.prototype.join.call(arguments, "-") 
            }
            expect(some2('1','2','3')).toBe('1-2-3');
        });

        it ('Primitives', function (){
            var str = 'text',
                num = 5,
                bool = true;

            expect(str.__proto__).toBe(String.prototype);
            expect(num.__proto__).toBe(Number.prototype);
            expect(bool.__proto__).toBe(Boolean.prototype);
        });

        it ('Changing the built-in prototypes', function () {
            String.prototype.repeat = function(times) {
                return new Array(times + 1).join(this);
              };
            var str = 'o';

            expect(str.repeat(3)).toBe('ooo')
              
        });

        it ('Own classes on prototype', function () {

            function Car(model){
                this.model =  model;
                this.speed = 0;
            }

            Car.prototype.going = function (speed) {
                this.speed += speed;
            }

            Car.prototype.stop = function() {
                this.speed = 0;
            }

            var ford = new Car('Ford');
            expect(ford.speed).toBe(0);

            ford.going(50);
            expect(ford.speed).toBe(50);

            ford.stop();
            expect(ford.speed).toBe(0);

        });
    });
    describe('Inheritance of classes', function () {
        it ('Inheritance', function () {
            function Vehicle(model){
                this.model =  model;
                this.speed = 0;
            }
            Vehicle.prototype.going = function (speed) {
                this.speed += speed;
            }
            Vehicle.prototype.stop = function() {
                this.speed = 0;
            }

            function Ship(model){
                this.model = model;
                this.speed = 0;
            }
            Ship.prototype.swimming = function (){
                this.swimming = true;
            }

            var boat = new Ship('Pobeda');
            expect(Ship.prototype.stop).toBeUndefined();

            Ship.prototype = Object.create(Vehicle.prototype);

            Ship.prototype.constructor = Ship;
            expect(Ship.prototype.stop).toBeDefined();
        });

        it ('Override', function () {
            function Vehicle(model){
                this.model =  model;
                this.speed = 0;
            }
            Vehicle.prototype.going = function (speed) {
                this.speed += speed;
            }
            Vehicle.prototype.stop = function() {
                this.speed = 0;
            }

            function Ship(model){
                this.model = model;
                this.speed = 0;
            }
            Ship.prototype.swimming = function (){
                this.speed++;
            }
            Ship.prototype.going = function (speed) {
                this.speed += speed;
                this.swimming();
            }

            expect(Vehicle.prototype.going !== Ship.prototype.going).toBeTruthy()
        });

        it ('call parents metod', function(){
            function Vehicle(model){
                this.model =  model;
                this.speed = 0;
            }
            Vehicle.prototype.going = function (speed) {
                this.speed += speed;
            }
            Vehicle.prototype.stop = function() {
                this.speed = 0;
            }

            function ShipAmphibian(model){
                Vehicle.apply(this, arguments);
            }
            ShipAmphibian.prototype.swimming = function (){
                this.speed++;
            }
            ShipAmphibian.prototype.going = function (speed) {
                Vehicle.prototype.going.apply(this, arguments);
                this.swimming();
            }

            var amphibian = new ShipAmphibian('Beda');
            amphibian.going(50);

            expect(amphibian.speed).toBe(51)
        });
    });

    describe('instanceOf', function () {
        it ('instanceOf algorithm', function () {
            function Car() {}

            var ford = new Car();
            var arr = []

            expect(ford instanceof Car).toBeTruthy();
            expect(arr instanceof Array).toBeTruthy();
            expect(arr instanceof Object).toBeTruthy();
        });
    });
});