const BankKonto = require('./bankKonto');

class SparKonto extends BankKonto {
    constructor(name, zinsSatz, anfangsBestand) {
        super(name, anfangsBestand);
        this.zinsSatz = zinsSatz;
    }

    zinsenAnrechnen() {
        this._kontoStand *= this.zinsSatz / 100 + 1;
    }
}

module.exports = SparKonto;