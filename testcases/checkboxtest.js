describe("mysuite", function(){
    it("checkbox functionality", function(){
        browser.get("https://material.angular.io/components/checkbox/examples");
        browser.sleep(1000);
       

        //Assert the text on the page "Checkbox configuration"
        var nameOfFiled=element(by.xpath("//h2[contains(text(),'Checkbox configuration')]"));
        expect(nameOfFiled.getText()).toBe("Checkbox configuration"); //validate name of window
        
        //Click the checkbox named "Checked"
        var checked=element(by.id("mat-checkbox-1"));
        checked.click();
        browser.sleep(1000);

        //Verify that the Result on page displays a check mark in the "I'm achecked"
        var iAmChecked=element(by.xpath("//input[@id='mat-checkbox-4-input']"));
        expect(iAmChecked.isPresent()).toBe(true);
        browser.sleep(1000);

        //Click the radio button "Align:Before"
        var radioBtnBefore=element(by.id("mat-radio-3"));
        radioBtnBefore.click();
        browser.sleep(1000);

        //Verify that the Result on page displays the check mark in the "I'm a checkbox" moved to the right side of the checkbox label
        element(by.css(".mat-checkbox-label-before")).isPresent();

        var rightBefore=element(by.css(".mat-checkbox-label-before .mat-checkbox-inner-container"));
        expect(rightBefore.getCssValue('order')).toBe('1');


    })
})