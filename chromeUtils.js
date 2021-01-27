
function onExtensionInstalled(listener) {
    chromeRuntimeOnInstalledAddListener(listener);
}

function setCurrentColor(color) {
    return chromeStorageLocalSet({ color: color });
}

function getCurrentColor() {
    return chromeStorageLocalGet("color");
}

// Api Chrome
function chromeRuntimeOnInstalledAddListener(listener) {
    chrome.runtime.onInstalled.addListener(listener);
}

function chromeStorageLocalGet(key) {
    return new Promise(resolve =>
        chrome.storage.local.get([key], result => {
            resolve(result[key]);
        })
    )
}

function chromeStorageLocalSet(obj) {
    return new Promise(resolve => chrome.storage.local.set(obj, resolve));
}