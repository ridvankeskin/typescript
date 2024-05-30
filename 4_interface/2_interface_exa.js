// Yukarıdaki tipe göre bir veri oluşturalım
var faruk = {
    id: 1,
    firstname: "Faruk",
    lastname: "Kaya",
    age: 45,
    adress: {
        city: "İstanbul",
        street: "4545sk",
        zipCode: 35560,
    },
    education: {
        degree: "56",
        school: "İstanbul Üni",
        gradutionYear: 2023,
        isGraduated: true,
    },
    jobs: [
        {
            company: "X Şirketi",
            startDate: new Date(),
            title: "Frontend",
        },
    ],
    sayHello: function () {
        return "Merhabalar Ben " + this.firstname + " " + this.lastname;
    },
};
console.log(faruk.sayHello());
var spotify = {
    api: "www.spotify.com",
    play: function (song) {
        console.log("spotifydan veri çekiliyor");
        console.log(song + " çalıyor");
    },
    pause: function () {
        console.log("Çalan şarkı durduruldu");
    },
};
// Class tanımı yaparken interface kullanılım
var AppleMusic = /** @class */ (function () {
    function AppleMusic() {
        this.api = "www.apple.com";
    }
    AppleMusic.prototype.play = function (song) {
        console.log("apple müzikten veri çekiliyorçç");
        console.log(song + " çalıyor");
    };
    AppleMusic.prototype.pause = function () {
        console.log("Çalan şarkı durduruldu");
    };
    return AppleMusic;
}());
