let tblmenu = [
    {
        idmenu: 30, 
        idkategori: 28, 
        menu: "Apel Fuji", 
        gambar: "apelfuji.jpg",
        harga: 3000,
    }, 
    {
        idmenu: 31, 
        idkategori: 28, 
        menu: "Pisang", 
        gambar: "pisang.jpg",
        harga: 5000,
    }, 
    {
        idmenu: 32, 
        idkategori: 25, 
        menu: "Nasi Padang", 
        gambar: "nasipadang.jpg",
        harga: 20000,
    }, 
    {
        idmenu: 33, 
        idkategori: 25, 
        menu: "Nasi Ayam", 
        gambar: "nasiayam.jpg",
        harga: 15000,
    }, 
    {
        idmenu: 34, 
        idkategori: 26, 
        menu: "Es Teh Manis", 
        gambar: "estehmanis.jpg",
        harga: 7000,
    }, 
    {
        idmenu: 35, 
        idkategori: 26, 
        menu: "Es Jeruk Segar", 
        gambar: "esjeruksegar.jpg",
        harga: 7000,
    }, 
];

let tampil = tblmenu.map(function (kolom) {
    return `<div class="produk-content">
    <div class="image">
        <img src="images/${kolom.gambar}" alt="hp" />
    </div>
    <div class="titel">
        <h2>${kolom.menu}</h2>
    </div>
    <div class="harga">
        <h2>Rp. ${kolom.harga}</h2>
    </div>
    <div class="btn-beli">
        <button data-idmenu=${kolom.idmenu}>Beli</button>
    </div>
    </div>`;
})

let isi = document.querySelector(".produk");

isi.innerHTML = tampil

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
    btnbeli[index].onclick = function () {
        // console.log(btnbeli[index].dataset["idmenu"]);
        // cart.push(btnbeli[index].dataset["idmenu"]);

        tblmenu.filter(function (a) {
            if (a.idmenu == btnbeli[index].dataset["idmenu"]) {
                cart.push(a);
                console.log(cart);
            }
        })
    };
}

// console.log(cart);

