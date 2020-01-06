describe('Assessment test', function() {

    var msgContainer = document.getElementsByClassName('msg__container')[0];
    var hello_btn = document.getElementById('hello');
    var bye_btn = document.getElementById('bye');
    var count = 5;

    beforeEach(function() {
        spyEvent = spyOnEvent('.btn__container', 'click');
    });

    it('should add child divs if clicked on hello buttons if divs are not present', function() {
        hello_btn.click();
        expect(msgContainer.children.length).toBe(count);
    });

    it('should add child divs if clicked on goodbye buttons if divs are not present', function() {
        bye_btn.click();
        expect(msgContainer.children.length).toBe(count);
    });
});
