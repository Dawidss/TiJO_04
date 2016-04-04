describe('app', function () {
    'use strict';
    var app = window.app;

    describe('Division function', function () {
        it('should divide number a by b', function () {
            expect(app.divide(10, 5)).toEqual(2);
            expect(app.divide(15, 3)).toEqual(5)
        });
        it('should divide number a by b only when a is more than 1 and less than 100', function () {
            expect(app.divide(20, 5)).toEqual(4);
        });
        it('should return false when a is less than 1', function () {
            expect(app.divide(-2, 6)).toEqual(false);
        });
        it('should return false when a is more than 100', function () {
            expect(app.divide(105, 3)).toEqual(false);
        });
        it('should divide number a by b when a is 1', function () {
            expect(app.divide(1, -1)).toEqual(-1);
        });
        it('should divide number a by b when a is 100', function () {
            expect(app.divide(100, 10)).toEqual(10);
        });
        it('should divide number a by b when a is 0', function () {
            expect(app.divide(0, 1)).toEqual(false);
        });
        it('should divide number a by b when a is 101', function () {
            expect(app.divide(101, 10)).toEqual(false);
        });
        it('should return false when b is grater than a', function () {
            expect(app.divide(101, 103)).toEqual(false);
        });
        it('should return false when b is equal 0', function () {
            expect(app.divide(101, 0)).toEqual(false);
        });
    });
    
    describe('getDescendingNumbers',function () {
        it('should return "3 2 1" ,if numberFrom is 3 and numberTo is 1 ',function () {
            expect(app.getDescendingNumbers(3,1)).toEqual('3 2 1');
        });
        it('should return false if the variables are not digit',function () {
            expect(app.getDescendingNumbers('kot','cat')).toEqual(false);
        });
        it('should return false when only one variables is digit',function () {
            expect(app.getDescendingNumbers(1,'cat')).toEqual(false);
            expect(app.getDescendingNumbers('cat',13)).toEqual(false);

        });
        it('should return false ,if numberTo is large then numberFrom',function () {
            expect(app.getDescendingNumbers(3,9)).toEqual(false);
        });
    });
    
    describe('areaOfTrapezoid',function () {
        it('should return false ,if variable a or b or h are smaller than 0 ',function () {
            expect(app.areaOfTrapezoid(1,-2,9)).toEqual(false);
            expect(app.areaOfTrapezoid(-1,2,9)).toEqual(false);
            expect(app.areaOfTrapezoid(1,-2,-9)).toEqual(false);
        })
        it('should return false when variables or one of variables is not number',function () {
            expect(app.areaOfTrapezoid(1,'dwa',3)).toEqual(false);
            expect(app.areaOfTrapezoid('jeden','dwa',3)).toEqual(false);
            expect(app.areaOfTrapezoid('Ala','ma','kota')).toEqual(false);
        })
        it('should areaOfTrapezoid ',function () {
            expect(app.areaOfTrapezoid(1,2,2)).toEqual(3);
            expect(app.areaOfTrapezoid(2,2,4)).toEqual(8);
            expect(app.areaOfTrapezoid(1,2,3)).toEqual(4.5);
            //console.log(app.areaOfTrapezoid(1,2,3));
        })
    })
    xdescribe('maxArray',function () {
        it('should return false ,if array constrains element different than number', function () {
            expect(app.maxArray([0,2,3,'cztery',undefined,false])).toEqual(false);
            expect(app.maxArray(['cztery',undefined,false])).toEqual(false);
            expect(app.maxArray([0,2,3,true])).toEqual(false);
        });
        it('should return max element of the array',function () {
            expect(app.maxArray([2,0,3,27,-100])).toEqual(27);
            expect(app.maxArray([-2,0,-3,-27,-100])).toEqual(0);
        })
    });
    xdescribe('squareOdd', function () {
        it('should return false when args is null', function () {
            expect(app.squareOdd()).toEqual(false);

        })
        it('should return false when array contains elements different than number and string', function () {
            expect(app.squareOdd([3,2,34,5,'sad', true])).toEqual(false);
            expect(app.squareOdd([1,2,undefined,5,'sa'])).toEqual(false);
            expect(app.squareOdd([1,2,false,5,'sad', true])).toEqual(false);

        });
        it('should return function when elements is number or string', function () {
            expect(app.squareOdd([9,2,'kot',4])).toEqual([81,2,'kot',4]);
            console.log(app.squareOdd([9,2,'kot',7]));
            expect(app.squareOdd([3,'zaba',5,'kaczka'])).toEqual([9,'zaba',25,'kaczka']);

        })
    })

});
