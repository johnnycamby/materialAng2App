"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Help entity */
var Help = (function () {
    function Help(email, sendCatalog, address, street, city, zip) {
        if (email === void 0) { email = ''; }
        if (sendCatalog === void 0) { sendCatalog = false; }
        if (address === void 0) { address = 'home'; }
        this.email = email;
        this.sendCatalog = sendCatalog;
        this.address = address;
        this.street = street;
        this.city = city;
        this.zip = zip;
    }
    return Help;
}());
exports.Help = Help;
//# sourceMappingURL=help.js.map