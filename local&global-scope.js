// global scope ot bonuwa variable jodi var keyword ere bonuwa hoi tenete ee local scopotu ake thakibo, haikarone var use kora tu avoid koribo lage 

// global scopot bonuwa variable block scope ba local scope use koribo pare kin2 block scopor ba local scopor vitorot thoka variable global scope access koribo nuware




function one() {
    const username = "durlov";

    function two() {
        const website = "youtube";
        console.log(username);
        console.log(website);
    }
    // console.log(website); //ee errpr dibo karon childrenor pora ami bos2 lobo nuwaru

    two();
}
one();