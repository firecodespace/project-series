// barcode_script.js
document.getElementById('generateButton').addEventListener('click', generateBarcode);
document.getElementById('copyButton').addEventListener('click', copyBarcode);
document.getElementById('printButton').addEventListener('click', printBarcode);
document.getElementById('downloadButton').addEventListener('click', downloadBarcode);

function generateBarcode() {
    const inputText = document.getElementById('inputText').value;
    const barcodeSVG = document.getElementById('barcodeSVG');

    JsBarcode(barcodeSVG, inputText, {
        format: "CODE128",
        width: 2,
        height: 100,
    });
}

function copyBarcode() {
    const barcodeSVG = document.getElementById('barcodeSVG');

    // Use html2canvas to capture the SVG as an image
    html2canvas(barcodeSVG).then(function(canvas) {
        const imgData = canvas.toDataURL('image/png');

        // Create a temporary element to display the image
        const tempImage = new Image();
        tempImage.src = imgData;

        // Create a temporary textarea to copy the image
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = imgData;
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextarea);
    });
}


function printBarcode() {
    const barcodeSVG = document.getElementById('barcodeSVG');
    const svgString = new XMLSerializer().serializeToString(barcodeSVG);
    const printWindow = window.open('', '', 'width=600,height=600');
    printWindow.document.open();
    printWindow.document.write('<html><body>');
    printWindow.document.write('<img src="data:image/svg+xml,' + encodeURIComponent(svgString) + '">');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.onload = function () {
        printWindow.print();
        setTimeout(() => {
            printWindow.close();
        }, 1000); // Adjust the delay (in milliseconds) as needed
    };
}


function downloadBarcode() {
    const barcodeSVG = document.getElementById('barcodeSVG');
    const svgString = new XMLSerializer().serializeToString(barcodeSVG);
    const a = document.getElementById('downloadButton');
    const url = "data:image/svg+xml," + encodeURIComponent(svgString);
    a.href = url;
}
