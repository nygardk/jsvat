var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Italy VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVAT('IT00000010215')).to.be.true;
        expect(VatChecker.checkVAT('IT00079760328')).to.be.true;
        expect(VatChecker.checkVAT('IT00140390501')).to.be.true;
        expect(VatChecker.checkVAT('IT00144659992')).to.be.true;
        expect(VatChecker.checkVAT('IT00224320234')).to.be.true;
        expect(VatChecker.checkVAT('IT00383590486')).to.be.true;
        expect(VatChecker.checkVAT('IT00453840357')).to.be.true;
        expect(VatChecker.checkVAT('IT00488410010')).to.be.true;
        expect(VatChecker.checkVAT('IT00502591209')).to.be.true;
        expect(VatChecker.checkVAT('IT00697300150')).to.be.true;
        expect(VatChecker.checkVAT('IT00754150100')).to.be.true;
        expect(VatChecker.checkVAT('IT00820340966')).to.be.true;
        expect(VatChecker.checkVAT('IT00902170018')).to.be.true;
        expect(VatChecker.checkVAT('IT01021630668')).to.be.true;
        expect(VatChecker.checkVAT('IT01044120358')).to.be.true;
        expect(VatChecker.checkVAT('IT01114601006')).to.be.true;
        expect(VatChecker.checkVAT('IT01219560800')).to.be.true;
        expect(VatChecker.checkVAT('IT01390230462')).to.be.true;
        expect(VatChecker.checkVAT('IT01654960473')).to.be.true;
        expect(VatChecker.checkVAT('IT02118311006')).to.be.true;
        expect(VatChecker.checkVAT('IT02121151001')).to.be.true;
        expect(VatChecker.checkVAT('IT02458160245')).to.be.true;
        expect(VatChecker.checkVAT('IT07234250962')).to.be.true;
        expect(VatChecker.checkVAT('IT03084300171')).to.be.true;
        expect(VatChecker.checkVAT('IT05067600154')).to.be.true;
        expect(VatChecker.checkVAT('IT06363391001')).to.be.true;
        expect(VatChecker.checkVAT('IT06515871009')).to.be.true;
        expect(VatChecker.checkVAT('IT06631330963')).to.be.true;
        expect(VatChecker.checkVAT('IT06895721006')).to.be.true;
        expect(VatChecker.checkVAT('IT07129470014')).to.be.true;
        expect(VatChecker.checkVAT('IT08146570018')).to.be.true;
        expect(VatChecker.checkVAT('IT08792831003')).to.be.true;
        expect(VatChecker.checkVAT('IT10000100015')).to.be.true;
        expect(VatChecker.checkVAT('IT10000200013')).to.be.true;
        expect(VatChecker.checkVAT('IT10000300011')).to.be.true;
        expect(VatChecker.checkVAT('IT10000500016')).to.be.true;
        expect(VatChecker.checkVAT('IT10000600014')).to.be.true;
        expect(VatChecker.checkVAT('IT10000700012')).to.be.true;
        expect(VatChecker.checkVAT('IT10000900018')).to.be.true;
        expect(VatChecker.checkVAT('IT10001000016')).to.be.true;
        expect(VatChecker.checkVAT('IT10001100014')).to.be.true;
        expect(VatChecker.checkVAT('IT10001300010')).to.be.true;
        expect(VatChecker.checkVAT('IT10001400018')).to.be.true;
        expect(VatChecker.checkVAT('IT10001500015')).to.be.true;
        expect(VatChecker.checkVAT('IT10001700011')).to.be.true;
        expect(VatChecker.checkVAT('IT10001708881')).to.be.true;
        expect(VatChecker.checkVAT('IT10001701209')).to.be.true;
        expect(VatChecker.checkVAT('IT10001701217')).to.be.true;
        expect(VatChecker.checkVAT('IT10001709996')).to.be.true;
        expect(VatChecker.checkVAT('IT10001800019')).to.be.true;
        expect(VatChecker.checkVAT('IT10001900017')).to.be.true;
        expect(VatChecker.checkVAT('IT11005760159')).to.be.true;
        expect(VatChecker.checkVAT('IT12066470159')).to.be.true;
        expect(VatChecker.checkVAT('IT12286350157')).to.be.true;
        expect(VatChecker.checkVAT('IT12683790153')).to.be.true;
        expect(VatChecker.checkVAT('IT13378520152')).to.be.true;
        expect(VatChecker.checkVAT('IT05142860484')).to.be.true;
        expect(VatChecker.checkVAT('IT01709820995')).to.be.true;
    });

    it("Invalid VAT", function () {
        expect(VatChecker.checkVAT('IT00000010210')).to.be.false;
        expect(VatChecker.checkVAT('IT10000100010')).to.be.false;
        expect(VatChecker.checkVAT('IT10000200010')).to.be.false;
        expect(VatChecker.checkVAT('IT0000300010')).to.be.false;
        expect(VatChecker.checkVAT('IT10001900010')).to.be.false;
        expect(VatChecker.checkVAT('IT10000500010')).to.be.false;
        expect(VatChecker.checkVAT('IT10000600010')).to.be.false;
        expect(VatChecker.checkVAT('IT10001708882')).to.be.false;
        expect(VatChecker.checkVAT('IT10001701202')).to.be.false;
        expect(VatChecker.checkVAT('IT10001701216')).to.be.false;
        expect(VatChecker.checkVAT('IT10001709997')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVAT('IT00 90217 0018')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVAT('IT009-02-170018')).to.be.true;
    });
});