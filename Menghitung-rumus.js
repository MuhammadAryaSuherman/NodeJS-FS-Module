module.exports = {
    luasPersegi: function (sisi) {
        return sisi * sisi;
    },
    kelilingPersegi: function (sisi) {
        return 4 * sisi;
    },
    luasPersegiPanjang: function (panjang, lebar) {
        return panjang * lebar;
    },
    kelilingPersegiPanjang: function (panjang, lebar) {
        return 2 * (panjang + lebar);
    }
};
