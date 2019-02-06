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
fuehreBuchungenDurch(BUCHUNGSDATEI);
schreibeKontoStandInDatei(ERGEBNISDATEI);

function erstelleKonten(filename) {
    fs.readFile(filename, {encoding: 'utf8'}, (err, data) => {
        if (err) {
            console.error(err.message);
        } else {
            let lines = data.split('\n');

            for (let i = 1; i < lines.length; i++) {
                let values = lines[i].split(';');

                if (values[0] === 'SparKonto') {
                    konten.push(new SparKonto(values[1], ZINSSATZ, parseFloat(values[2])));
                } else {
                    konten.push(new GiroKonto(values[1], GEBUEHR, parseFloat(values[2])));
                }
            }
        }
    });
}

function fuehreBuchungenDurch(filename) {
    fs.readFile(filename, {encoding: 'utf8'}, (err, data) => {
        if (err) {
            console.log(err.message);
        } else {
            let lines = data.split('\n');

            for (let i = 1; i < lines.length; i++) {
                let values = lines[i].split(';');

                findeKontoPerName(values[0]).einzahlen(values[2]);
                findeKontoPerName(values[1]).abheben(values[2]);
            }
        }
    });
}

function findeKontoPerName(name) {
    for (let konto of konten) {
        if (konto.getName() === name) {
            return konto;
        }
    }

    return null;
}

function schreibeKontoStandInDatei(filename) {
    let content = 'name;kontotyp;kontostand';
    for (let konto of konten) {
        content += `\n${konto.toString()}`;
    }

    fs.writeFile(filename, content, (err) => {
        if (err) {
            console.error(err.message);
        }
    });
}