const browserVersion= "chrome";
function getBrowserVersion() {
    
    if(browserVersion == "chrome")
    {
        let browserVersion = 'edge';
    console.log ('Accessing local variable inside block  ' , browserVersion);
    }
  console.log ('Accessing local variable outside block ' , browserVersion);  
}

getBrowserVersion()
