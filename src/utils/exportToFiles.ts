import { jsPDF } from 'jspdf';

const doc = new jsPDF();

export default async function exportToPDF(data: any) {
  if (typeof data === 'object') {
    doc.text('Hello world!', 10, 10);
  }

  doc.save('a4.pdf');
}
