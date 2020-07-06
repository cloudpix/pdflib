'use strict';

const pdfFont = require('pdfmake/build/vfs_fonts');
const pdfMake = require('pdfmake/build/pdfmake');

module.exports = {
  vfs: pdfFont.pdfMake.vfs,
  createPdf: pdfMake.createPdf
};