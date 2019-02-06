const BankKonto = require('./bankKonto');

class GiroKonto extends BankKonto {
    constructor(name, gebuehr, anfangsBestand) {
        super(name, anfangsBestand);
        this.gebuehr = gebuehr;
    }

    abheben(betrag) {
        this._kontoStand += betrag - this.gebuehr;
    }

    einzahlen(betrag) {
        this._kontoStand -= betrag + this.gebuehr;
    }
}

module.exports = GiroKonto;