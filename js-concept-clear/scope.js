//var declare korle right side er kno value main declaration er ayge  first a paoy jay na.. declaration er niche paoya jay
//but left side er variable poya jay.. & setar value = undefined 

function PatriChai(age, earning) {
    // console.log(trueAge);
    var decision = canMarry(15000);
    console.log(decision);
    console.log(age);
    console.log(earning);

    // var trueAge = age + 7;
    const trueAge = age + 7;

    function canMarry(expenses) {
        const remaining = earning - expenses;
        if (remaining > 1000) {
            const showing = 500;
            console.log(showing);
            return true;
        }
        else {
            return false;
        }
    }
}
PatriChai(21, 50000);