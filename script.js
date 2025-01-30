// Function to generate the invoice on the canvas
function generateInvoice() {
    const companyName = document.getElementById('company-name').value;
    const clientName = document.getElementById('client-name').value;
    const items = document.getElementById('invoice-items').value;
    const amount = document.getElementById('amount').value;

    const canvas = document.getElementById('invoice-canvas');
    const ctx = canvas.getContext('2d');

    // Clear previous drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set font for invoice text
    ctx.font = '16px Arial';
    ctx.fillStyle = '#000';

    // Draw the header
    ctx.fillText(`Invoice`, 20, 30);
    ctx.fillText(`Company: ${companyName}`, 20, 60);
    ctx.fillText(`Client: ${clientName}`, 20, 90);
    ctx.fillText(`Items: ${items}`, 20, 120);
    ctx.fillText(`Total Amount: $${amount}`, 20, 150);

    // Draw a line separator
    ctx.beginPath();
    ctx.moveTo(20, 170);
    ctx.lineTo(canvas.width - 20, 170);
    ctx.stroke();
}

// Function to download the invoice as a PDF
function downloadPDF() {
    const canvas = document.getElementById('invoice-canvas');
    const pdf = new jsPDF();

    // Convert canvas content to image and add it to PDF
    const imgData = canvas.toDataURL('image/png');
    pdf.addImage(imgData, 'PNG', 10, 10, 180, 160);

    // Save the PDF
    pdf.save('invoice.pdf');
}
