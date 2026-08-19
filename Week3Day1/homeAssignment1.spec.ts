import test from "@playwright/test";

test('Create a Lead using CSS Selectors',async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator("input[id=username]").fill('democsr2')
    await page.locator("input[id=password]").fill('crmsfa')
    await page.locator(".decorativeSubmit").click()
    await page.waitForTimeout(2000)
    await page.locator('img[src="/opentaps_images/integratingweb/crm.png"]').click()
    await page.waitForTimeout(2000)   
    await page.locator('a[href="/crmsfa/control/leadsMain"]').click()
    await page.waitForTimeout(3000)   
    await page.locator('a[href="/crmsfa/control/createLeadForm"]').click()
    await page.waitForTimeout(3000)  
    await page.locator("input[id=createLeadForm_companyName]").fill('Testleaf')
    await page.locator("input[id=createLeadForm_firstName]").fill('Test firstname')
    await page.locator("input[id=createLeadForm_lastName]").fill('Test lastname')
    await page.locator("input[id=createLeadForm_personalTitle]").fill('Mr.')
    await page.locator("input[id=createLeadForm_generalProfTitle]").fill('Functional tester')
    await page.locator("input[id=createLeadForm_annualRevenue]").fill('100000')
    await page.locator("input[id=createLeadForm_departmentName]").fill('Testing')  
    const options = page.locator("[id=createLeadForm_dataSourceId]")
    const count = await options.count();

    for (let i = 0; i < count; i++) {
    const text = await options.nth(i).innerText();
    console.log(text);
    }
    await page.locator("input[id=createLeadForm_primaryPhoneNumber]").fill('1234567890')  
    await page.locator("[name=submitButton]").click()
    await page.waitForTimeout(3000)
})
