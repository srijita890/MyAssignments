function launchBrowser(browserName){
    if (browserName == 'chrome'){
        console.log ('Browser is lunched with '+ browserName)
    }else{
        console.log  ('Browser is lunched with '+ browserName)
    }
}
function runTests(testType){
    switch (testType) {
        case 'sanity':
            console.log('Test type is '+ testType)
            break;
        case 'regression':
            console.log('Test type is '+ testType)
            break;
        default:
            console.log('Test type is '+ testType)
            break;
    }
}
let browserName= 'chrome'
launchBrowser(browserName)

let testType= 'smoke'
runTests(testType)
