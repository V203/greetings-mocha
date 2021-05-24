function grt(existingNames) {

    var namesGreeted = existingNames || {}
  //  var grtCounter = 0;



    function action(checked,grtName_) {
      let  grtName = grtName_.charAt(0).toUpperCase() + grtName_.slice(1);

        if (checked === "japanese") {
            return "Konnichiwa, " + grtName;
        }
        else if (checked === "venda") {
            return "Ndaa, " + grtName
        }
        else if (checked === "latin") {
            return "Salve, " + grtName
        }
        
    }

    function setNames(name) {
        

        if (namesGreeted[name] === undefined) {
            namesGreeted[name] = 0;

        }
    }

    function antiEmpty(par) {
        if (par === "") {
            return "please enter your name please in text field eg. 'Sam'"
        }
        

    }

    function antiDigit(par) {
        var para = /[0-9]/;
        if (par.match(para)) {            
            return par;
        }


    }

    function getGreetCtr() {
       
        return Object.keys(namesGreeted).length
    }



    function greeted() {
        
        return namesGreeted
    }

   
    function getGreetKeys(){
        return Object.keys(namesGreeted)
    }
    function showAllGreets(){
      return  (getGreetCtr() > 0) ? "You have greeted -->: "+Object.keys(namesGreeted):"First enter a name in the text field before hit display the names greeted ";
    }
 




    return {
        setNames,
        action,
        getGreetCtr,
        greeted,
        antiEmpty,
        antiDigit,
        showAllGreets,
        getGreetKeys

    }
}