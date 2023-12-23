async function getKeyInfo(keyCode, key) {
    return new Promise((resolve) => {
        // Simulate an asynchronous operation (e.g., fetching data from an API)
        setTimeout(() => {
            if (key === "Alt") {
                resolve(`Key${key}`);
            } else {
                resolve(`Key${key.toUpperCase()}`);
            }
        }, 1000);
    });
}

document.addEventListener('keydown', async function(event) {
    const keyTable = document.getElementById('keyTable').getElementsByTagName('tbody')[0];
    const row = keyTable.insertRow(0);

    const keyCell = row.insertCell(0);
    const keyCodeCell = row.insertCell(1);
    const codeCell = row.insertCell(2);

    keyCell.textContent = event.key;
    keyCodeCell.textContent = event.keyCode;

    const keyInfo = await getKeyInfo(event.keyCode, event.key);
    codeCell.textContent = keyInfo;
});
