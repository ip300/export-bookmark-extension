document.querySelector("#exportButton").addEventListener("click", () => {
  chrome.bookmarks.getTree().then((data) => exportFile(data));
});

function exportFile(jsonData) {
  var downloader = document.createElement("a");
  var vBlob = new Blob([JSON.stringify(jsonData, null, 4)], {
    type: "text/json",
  });
  downloader.setAttribute("href", window.URL.createObjectURL(vBlob));
  downloader.setAttribute(
    "download",
    `bookmark_${new Date().toISOString()}.json`
  );
  downloader.click();
}
