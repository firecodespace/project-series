document.getElementById('generateButton').addEventListener('click', generateQRCode);
document.getElementById('copyButton').addEventListener('click', copyQRCode);
document.getElementById('downloadButton').addEventListener('click', downloadQRCode);

let qr;

function generateQRCode() {
    const inputText = document.getElementById('inputText').value;
    const qrCodeCanvas = document.getElementById('qrCodeCanvas');
    qr = new QRious({
        element: qrCodeCanvas,
        value: inputText,
        size: 150
    });
}

function copyQRCode() {
    const canvas = document.getElementById('qrCodeCanvas');
    canvas.toBlob((blob) => {
        const item = new ClipboardItem({ "image/png": blob });
        navigator.clipboard.write([item]);
    });
}

function downloadQRCode() {
    const canvas = document.getElementById('qrCodeCanvas');
    const url = canvas.toDataURL("image/png");
    const a = document.getElementById('downloadButton');
    a.href = url;
}
