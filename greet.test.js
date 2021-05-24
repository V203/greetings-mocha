describe("Greetings exercise setting and getting the valuess", function () {
    describe("Setting and getting the values", function () {



        it("Should set a name in the object array return the size of equal to 1", function () {
            let _grt = grt();
            _grt.setNames("Vuyisa")
            assert.equal(1, _grt.getGreetCtr());
        })
        it("Should set the same name twice and return return the size of equal to one", function () {
            let _grt = grt();
            _grt.setNames("Vuyisa")
            _grt.setNames("Vuyisa")
            assert.equal(1, _grt.getGreetCtr());

        })
        it("It should greet Vuyisa in Japanesse", function () {
            let _grt = grt()
            _grt.setNames("Vuyisa")
            assert.equal(_grt.action("japanese", "Vuyisa"), "Konnichiwa, Vuyisa");

        })
        it("It should greet Vuyisa in Latin", function () {
            let _grt = grt()
            _grt.setNames("vuyisa")
            assert.equal(_grt.action("latin", "Vuyisa"), "Salve, Vuyisa");

        })

        it("It should greet Vuyisa in venda", function () {
            let _grt = grt()
            _grt.setNames("vuyisa")
            assert.equal(_grt.action("venda", "Vuyisa"), "Ndaa, Vuyisa");

        })
        it("It should return keys and there values in the object array",function(){
            let _grt = grt()
            _grt.setNames("Jake")
            _grt.setNames("Mat")
            _grt.setNames("luke")
            assert.deepEqual(_grt.greeted(),{ Jake: 0, Mat: 0, luke: 0 } )
        })
        it("It should the list of all the people greeted eg. blake, sam, james",function(){
            let _grt = new grt();
            _grt.setNames("blake")
            _grt.setNames("sam")
            _grt.setNames("james")
            assert.equal(_grt.showAllGreets(),'You have greeted -->: blake,sam,james')



        })
     


    })
})

describe("User error detection ", function () {
    it("Should Warn the user if he/she greet's greets with typing in there name in the textfield", function () {
        let _grt = grt()
        let name = "";
        assert.equal(_grt.antiEmpty(name), "please enter your name please in text field eg. 'Sam'")
    })
    it("It should return true if Digits exist in the string name", function () {
        let _grt = grt();
        let numAlpha = "hello11"
        assert.equal(!!_grt.antiDigit(numAlpha),true)
    })
    it("It should return false if Digits do not exist in the string name", function () {
        let _grt = grt();
        let numAlpha = "hello"
        assert.equal(!!_grt.antiDigit(numAlpha),false)
    })

    it("It Should return three names object keys which are 'Sam', 'Samuel', 'Steve'",function(){
        let _grt= grt();
        _grt.setNames("Sam");
        _grt.setNames("Samuel");
        _grt.setNames("Steve");
     
        assert.deepEqual(_grt.getGreetKeys(),["Sam","Samuel","Steve"])

    })

        it("Should Warn the user if string is empty",function(){
            let _grt = grt()
            let str="";
            assert.equal(_grt.antiEmpty(str),"please enter your name please in text field eg. 'Sam'")
        })

        it("Should true if string is empty",function(){
            let _grt = grt()
            let str="";
            assert.equal(!!_grt.antiEmpty(str),true)
        })
        it("Should true if string is not empty",function(){
            let _grt = grt()
            let str="Jake";
            assert.equal(!_grt.antiEmpty(str),true)
        })
        it("It should return a warning message if user clicks the show all button with out greet first ",function(){
            let _grt = new grt();
            assert.equal(_grt.showAllGreets(),'First enter a name in the text field before hit display the names greeted ')
        })

})
