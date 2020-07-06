'use strict';

import pdfFont from 'pdfmake/build/vfs_fonts';
import pdfMake from 'pdfmake/build/pdfmake';

export const pdflib = {};

function setup() {
  pdflib.vfs = pdfFont.pdfMake.vfs;
  pdflib.createPdf = pdfMake.createPdf;
}

setup();