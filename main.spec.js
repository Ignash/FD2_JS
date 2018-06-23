describe('Дата и время', function() {

    it ('Создание даты', function(){

        var day = new Date();
        expect(typeof day).toBe('object');

    });

    it('Вывод даты', function(){

        var day = new Date(2011, 10, 12, 23, 45);

        var DayString = day.toString();
        expect(DayString).toEqual("Sat Nov 12 2011 23:45:00 GMT+0300 (Саудовская Аравия, стандартное время)");

        var DateString = day.toDateString();
        expect(DateString).toEqual("Sat Nov 12 2011");

        var TimeString = day.toTimeString();
        expect(TimeString).toEqual('23:45:00 GMT+0300 (Саудовская Аравия, стандартное время)');

        var option = {
            era: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            timezone: 'UTC',
            hour: undefined,
            minute: undefined,
            second: undefined,
            timeZoneName:'short'
            };
        
        
        expect(day.toLocaleString('ru', option)).toEqual('суббота, 12 ноября 2011 г. от Рождества Христова, GMT+3');
        

    });

    describe ('Компоненты даты', function(){

        var myDay = new Date(2011, 9, 30, 2, 30, 50, 320);

        it('Год', function(){
            var year = myDay.getFullYear();
            expect(year).toBe(2011);
        });

        it('Месяц', function(){

            var myMonth = myDay.getMonth();
            expect(myMonth).toBe(9);
    
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            expect(months[myMonth]).toBe('October');

        });

        it('Дата', function(){

            var date = myDay.getDate();
            expect(date).toBe(30);
            
        });

        it('Час', function(){

            var hours = myDay.getHours();
            expect(hours).toBe(2);

        });
        
        it('Минуты', function(){

            var minutes = myDay.getMinutes();
            expect(minutes).toBe(30)

        });

        it('Секунды', function(){

            var seconds = myDay.getSeconds();
            expect(seconds).toBe(50)

        });

        it('Миллисекунды', function(){

            var milliseconds = myDay.getMilliseconds();
            expect(milliseconds).toBe(320)

        });
        
        it('День', function(){

            var day = myDay.getDay();
            expect(day).toBe(0);

            var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            expect(days[day]).toBe('Sunday');

        });

        it('Число миллисекунд с 1 января 1970года ', function(){

            var time = myDay.getTime();
            expect(time).toBe(1319931050320);

        });

        it('Разница между указанным временем и UTC-временем, в минутах', function(){

            var time = myDay.getTimezoneOffset();
            expect(time).toBe(-180);

        });
    });
    describe('Установка компонентов', function(){


        it('Проверка', function(){

            var myDay = new Date(2011, 9, 30, 2, 30, 50, 320);


            myDayString = myDay.toString();
            expect(myDayString).toEqual('Sun Oct 30 2011 02:30:50 GMT+0300 (Саудовская Аравия, стандартное время)');
            
        });

        it('Установка года', function(){

            var myDay = new Date(2011, 9, 30, 2, 30, 50, 320);


            myDay.setFullYear(1999);
            expect(myDay.toString()).toEqual('Sat Oct 30 1999 02:30:50 GMT+0300 (Саудовская Аравия, стандартное время)');

            myDay.setFullYear(1999, 10, 5);
            expect(myDay.toString()).toEqual('Fri Nov 05 1999 02:30:50 GMT+0300 (Саудовская Аравия, стандартное время)');

        });

        it('Установка месяца', function(){

            var myDay = new Date(2011, 9, 30, 2, 30, 50, 320);


            myDay.setMonth(5);
            expect(myDay.toString()).toEqual('Thu Jun 30 2011 02:30:50 GMT+0300 (Саудовская Аравия, стандартное время)');

            myDay.setMonth(5, 15);
            expect(myDay.toString()).toEqual('Wed Jun 15 2011 02:30:50 GMT+0300 (Саудовская Аравия, стандартное время)');

        });

        it('Установка даты', function(){

            var myDay = new Date(2011, 9, 30, 2, 30, 50, 320);
            myDay.setDate(5);
            expect(myDay.toString()).toEqual('Wed Oct 05 2011 02:30:50 GMT+0300 (Саудовская Аравия, стандартное время)');

        });

        it('Установка часа', function(){

            var myDay = new Date(2011, 9, 30, 2, 30, 50, 320);
            myDay.setHours(6);
            expect(myDay.toString()).toEqual('Sun Oct 30 2011 06:30:50 GMT+0300 (Саудовская Аравия, стандартное время)');

            myDay.setHours(6, 40, 15);
            expect(myDay.toString()).toEqual('Sun Oct 30 2011 06:40:15 GMT+0300 (Саудовская Аравия, стандартное время)');


        });

        it('Установка минут', function(){

            var myDay = new Date(2011, 9, 30, 2, 30, 50, 320);
            myDay.setMinutes(25);
            expect(myDay.toString()).toEqual('Sun Oct 30 2011 02:25:50 GMT+0300 (Саудовская Аравия, стандартное время)');

            myDay.setMinutes(25, 20, 20);
            expect(myDay.toString()).toEqual('Sun Oct 30 2011 02:25:20 GMT+0300 (Саудовская Аравия, стандартное время)');


        });

        it('Установка секунд', function(){

            var myDay = new Date(2011, 9, 30, 2, 30, 50, 320);
            myDay.setSeconds(5);
            expect(myDay.toString()).toEqual('Sun Oct 30 2011 02:30:05 GMT+0300 (Саудовская Аравия, стандартное время)');


        });

        it('Установка всей даты по миллисекундам', function(){

            var myDay = new Date(2011, 9, 30, 2, 30, 50, 320);
            myDay.setDate(5);
            expect(myDay.toString()).toEqual('Wed Oct 05 2011 02:30:50 GMT+0300 (Саудовская Аравия, стандартное время)');

        });

    });

    it('Автоисправление даты', function(){

        var day = new Date(2015, 2, 30);
        expect(day.toString()).toEqual('Mon Mar 30 2015 00:00:00 GMT+0300 (Саудовская Аравия, стандартное время)');

        day.setDate(day.getDate() + 2);
        expect(day.toString()).toEqual('Wed Apr 01 2015 00:00:00 GMT+0300 (Саудовская Аравия, стандартное время)');
    });

    
});

