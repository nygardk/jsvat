var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Ireland VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVAT('IE0000002D')).to.be.true;
        expect(VatChecker.checkVAT('IE0000003F')).to.be.true;
        expect(VatChecker.checkVAT('IE0000004H')).to.be.true;
        expect(VatChecker.checkVAT('IE0000020F')).to.be.true;
        expect(VatChecker.checkVAT('IE0000006L')).to.be.true;
        expect(VatChecker.checkVAT('IE0000007N')).to.be.true;
        expect(VatChecker.checkVAT('IE0000008P')).to.be.true;
        expect(VatChecker.checkVAT('IE0000010C')).to.be.true;
        expect(VatChecker.checkVAT('IE0000011E')).to.be.true;
        expect(VatChecker.checkVAT('IE0000012G')).to.be.true;
        expect(VatChecker.checkVAT('IE0000014K')).to.be.true;
        expect(VatChecker.checkVAT('IE0000015M')).to.be.true;
        expect(VatChecker.checkVAT('IE0000016O')).to.be.true;
        expect(VatChecker.checkVAT('IE0000018S')).to.be.true;
        expect(VatChecker.checkVAT('IE0000019U')).to.be.true;
        expect(VatChecker.checkVAT('IE0000020F')).to.be.true;
        expect(VatChecker.checkVAT('IE0000000W')).to.be.true;
        expect(VatChecker.checkVAT('IE1409095C')).to.be.true;
        expect(VatChecker.checkVAT('IE4748790P')).to.be.true;
        expect(VatChecker.checkVAT('IE4749148U')).to.be.true;
        expect(VatChecker.checkVAT('IE4816785B')).to.be.true;
        expect(VatChecker.checkVAT('IE4873338U')).to.be.true;
        expect(VatChecker.checkVAT('IE6323439A')).to.be.true;
        expect(VatChecker.checkVAT('IE6336982T')).to.be.true;
        expect(VatChecker.checkVAT('IE6343933U')).to.be.true;
        expect(VatChecker.checkVAT('IE6344439R')).to.be.true;
        expect(VatChecker.checkVAT('IE6346967G')).to.be.true;
        expect(VatChecker.checkVAT('IE6334989A')).to.be.true;
        expect(VatChecker.checkVAT('IE6378801A')).to.be.true;
        expect(VatChecker.checkVAT('IE6387098K')).to.be.true;
        expect(VatChecker.checkVAT('IE6398832A')).to.be.true;
        expect(VatChecker.checkVAT('IE6409194V')).to.be.true;
        expect(VatChecker.checkVAT('IE6411364J')).to.be.true;
        expect(VatChecker.checkVAT('IE6426706T')).to.be.true;
        expect(VatChecker.checkVAT('IE6517909Q')).to.be.true;
        expect(VatChecker.checkVAT('IE6517957E')).to.be.true;
        expect(VatChecker.checkVAT('IE6555698U')).to.be.true;
        expect(VatChecker.checkVAT('IE6556973V')).to.be.true;
        expect(VatChecker.checkVAT('IE6562942T')).to.be.true;
        expect(VatChecker.checkVAT('IE6570116F')).to.be.true;
        expect(VatChecker.checkVAT('IE8O47531K')).to.be.true;
        expect(VatChecker.checkVAT('IE8213349C')).to.be.true;
        expect(VatChecker.checkVAT('IE8218007W')).to.be.true;
        expect(VatChecker.checkVAT('IE8223184C')).to.be.true;
        expect(VatChecker.checkVAT('IE8226748O')).to.be.true;
        expect(VatChecker.checkVAT('IE8232698L')).to.be.true;
        expect(VatChecker.checkVAT('IE8252557F')).to.be.true;
        expect(VatChecker.checkVAT('IE8E86432H')).to.be.true;
        expect(VatChecker.checkVAT('IE8Z49289F')).to.be.true;
        expect(VatChecker.checkVAT('IE9578054E')).to.be.true;
        expect(VatChecker.checkVAT('IE9674450W')).to.be.true;
        expect(VatChecker.checkVAT('IE9694881P')).to.be.true;
        expect(VatChecker.checkVAT('IE9698969D')).to.be.true;
        expect(VatChecker.checkVAT('IE9700053D')).to.be.true;
        expect(VatChecker.checkVAT('IE9779244F')).to.be.true;
        expect(VatChecker.checkVAT('IE9800871V')).to.be.true;
        expect(VatChecker.checkVAT('IE9973740B')).to.be.true;
        expect(VatChecker.checkVAT('IE9E61585W')).to.be.true;
        expect(VatChecker.checkVAT('IE9F51232R')).to.be.true;
        expect(VatChecker.checkVAT('IE9F70164P')).to.be.true;
        expect(VatChecker.checkVAT('IE2984579BH')).to.be.true;
        expect(VatChecker.checkVAT('IE1113778LH')).to.be.true;
        expect(VatChecker.checkVAT('IE1113011UH')).to.be.true;
        expect(VatChecker.checkVAT('IE1113202EH')).to.be.true;
        expect(VatChecker.checkVAT('IE1113258IH')).to.be.true;
        expect(VatChecker.checkVAT('IE1113571MH')).to.be.true;
        expect(VatChecker.checkVAT('IE2973912UH')).to.be.true;
        expect(VatChecker.checkVAT('IE2974611LH')).to.be.true;
        expect(VatChecker.checkVAT('IE2974901UH')).to.be.true;
        expect(VatChecker.checkVAT('IE3200115LH')).to.be.true;
        expect(VatChecker.checkVAT('IE3206791MH')).to.be.true;
        expect(VatChecker.checkVAT('IE3208913KH')).to.be.true;
        expect(VatChecker.checkVAT('IE3214048CH')).to.be.true;
    });

    it("Invalid VAT", function () {
        expect(VatChecker.checkVAT('IE87654321SA')).to.be.false;
        expect(VatChecker.checkVAT('IE8Z49289A')).to.be.false;
        expect(VatChecker.checkVAT('IE0000002A')).to.be.false;
        expect(VatChecker.checkVAT('IE0000003A')).to.be.false;
        expect(VatChecker.checkVAT('IE0000004A')).to.be.false;
        expect(VatChecker.checkVAT('IE0000020A')).to.be.false;
        expect(VatChecker.checkVAT('IE0000006A')).to.be.false;
        expect(VatChecker.checkVAT('IE0000007A')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVAT('IE0 00000 8P')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVAT('IE0-000008-P')).to.be.true;
    });
});