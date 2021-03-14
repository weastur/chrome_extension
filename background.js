function getAllUrls() {
  chrome.tabs.query({}, function (tabs) {
    console.log("\n/////////////////////\n");
    tabs.forEach(function (tab) {
      console.log(tab.url);
    });
  });
}

setInterval(getAllUrls, 5000);



