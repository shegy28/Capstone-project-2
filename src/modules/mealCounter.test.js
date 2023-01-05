import counter from "./mealCounter.js";
describe('Test count fucn', () => {
    test('Counts the number of dom child element if present', () => {
        const count = [1,2,3,]
        const div = document.createElement('div');
        counter(div, count);
        expect(div.innerHTML).toBe(`MEALS(3)`);
    });

    test('Show No meals if dom child element not present', () => {
        const count = []
        const div = document.createElement('div');
        counter(div, count);
        expect(div.innerHTML).toBe(`No meals added`);
    });
    
});



