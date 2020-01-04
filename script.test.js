describe('Assessment test spec', function() {
    // Add a spyOnEvent

    const btnContainer = document.getElementsByClassName('btn__container')[0];
    const msgContainer = document.getElementsByClassName('msg__container')[0];
    const hello_btn = document.getElementById('hello');
    const bye_btn = document.getElementById('bye');
    const count =5;

    beforeEach(function() {
        spyEvent = spyOnEvent('.btn__container', 'click');
    });

    it('should add child divs if clicked on one the buttons if divs are not present', function() {
        hello_btn.click();
        expect(msgContainer.children.length).toBe(count);
    });

    it('should add child divs if clicked on one the buttons if divs are not present', function() {
        bye_btn.click();
        expect(msgContainer.children.length).toBe(count);
    });
});
