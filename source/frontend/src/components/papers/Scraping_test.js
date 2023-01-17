const fs = require("fs");

const { Builder, By, until } = require("selenium-webdriver");
require("chromedriver");

var list_of_Publication = [];
var list_of_href = [];
async function getCitation() {
  let driver = new Builder().forBrowser("chrome").build();

  await driver.get(
    "https://scholar.google.com/citations?user=jLMJr90AAAAJ&hl=en&oi=ao"
  );

  await driver.findElement(By.css("button#gsc_bpf_more")).click();
  await driver.wait(until.elementLocated(By.css("span#gsc_a_nn")), 5000);
  const iframe = await driver.findElement(By.css("span#gsc_a_nn"));
  await driver.actions().scroll(0, 0, 0, 0, iframe).perform();
  await driver.manage().setTimeouts({ implicit: 10000 });
  console.log("displayed!");
  await driver.wait(until.elementLocated(By.css("a.gsc_a_at")), 10000);
  await driver.sleep(5000);
  let publications = await driver.findElements(By.css("a.gsc_a_at"));

  for (let publication of publications) {
    // console.log(await e.getText());
    list_of_Publication.push(await publication.getText());
    list_of_href.push(await publication.getAttribute("href"));
  }

  let dict_of_citation = {};
  let j = 0;
  //console.log(list_of_href);
  for (let url of list_of_href) {
    await driver.get(url);
    //console.log(url);
    await driver.manage().setTimeouts({ implicit: 10000 });
    let elements = await driver.findElements(By.css("div.gsc_oci_field"));
    let citation = {};

    let i = 0;
    for (let element of elements) {
      let x = await driver.findElements(By.css("div.gsc_oci_value"));
      citation["Title"] = await driver
        .findElement(By.css("div#gsc_oci_title"))
        .getText();
      citation["URL"] = url;
      citation[await element.getText()] = await x[i].getText();
      i = i + 1;
      delete citation["Description"];
      // delete citation["Total citations"];
      delete citation["Scholar articles"];
    }
    dict_of_citation[j] = citation;
    j = j + 1;
  }

  const jsonString = JSON.stringify(dict_of_citation);

  fs.writeFile("file.json", jsonString, "utf8", (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("The file was saved!");
    }
  });
}

(async () => {
  console.log(await getCitation());
})();
