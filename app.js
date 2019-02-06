const fs = require('fs');
const BankKonto = require('./bankKonto');
const SparKonto = require('./sparKonto');
const GiroKonto = require('./giroKonto');

const GEBUEHR = 0.002;
const ZINSSATZ = 3.0;

const KONTENDATEI = 'erstellung.csv';
const BUCHUNGSDATEI = 'buchungen.csv';
const ERGEBNISDATEI = 'ergebnis.csv';

let konten = [];

erstelleKonten(KONTENDATEI);
//fuehreBuchungenDurch(BUCHUNGSDATEI);
//schreibeKontoStandInDatei(ERGEBNISDATEI);

function erstelleKonten(filename) {
    fs.readFile(filename, {encoding: 'utf8'}, (err, data) => {
        if (err) {
            console.error(err.message);
        } else {
            let lines = data.split('\n');
        }
    });
}