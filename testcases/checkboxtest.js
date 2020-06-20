describe("mysuite", function(){
    it("checkbox functionality", function(){
        browser.get("https://material.angular.io/components/checkbox/examples");
        browser.sleep(1000);
        browser.manage().window().maximize();
        browser.sleep(2000);


        var nameoffiled=element(by.xpath("//h2[contains(text(),'Checkbox configuration')]"));
        expect(nameoffiled.getText()).toBe("Checkbox configuration"); //validate name of window
        
        element(by.id("mat-checkbox-4-input")).click();


    })
})