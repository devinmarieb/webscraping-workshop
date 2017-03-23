let Nightmare = require('nightmare')
let nightmare = Nightmare({ show: true })


nightmare
  .goto('https://www.dogfish.com/')
  .click('nav.core_utility a[href=\'/brewery/fishfinder\']')
  .wait('div.dialogbg')
  .select('select#edit-year[name=\'year\']', '1986')
  .wait(2000)
  .click('input#edit-submit--2[type=\'submit\'][name=\'op\'][value=\'Let Me In!\']')
  .wait(2000)
  .select('select#edit-brand[name=\'brand\']', '90 Minute IPA')
  .wait(2000)
  // .select('select#edit-storetype[name=\'storeType\']', 'Restaurants and bars only')
  // .wait(2000)
  .select('input#edit-zip[type=\'text\']', '80218')
  .wait(2000)
  .click('input#edit-submit--2[type=\'submit\']')
  .wait(10000)

.end()
.then(function (result) {
   console.log(result);
 })
.catch(function (error) {
  console.error('Search failed:', error);
})
