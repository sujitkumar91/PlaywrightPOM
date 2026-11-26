import{test} from'@playwright/test'

test.beforeEach('navigate to demosite',async({page})=>{

    await page.goto('file:///C:/Users/admin/Downloads/locators-practice%20(1).html')
})
test('textbox',async({page})=>{
    await page.getByPlaceholder('First Name').fill('sujit');
    await page.getByPlaceholder('Tell us about yourself...').fill('sample');
})
test('Checkbox',async({page})=>{
    await page.getByRole('checkbox',{name:" Automation"}).click();
})