import React, { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);



  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item !== product);
    setCart(updatedCart);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
  };

  const isHomePage = selectedCategory === null;
 

  function IletisimBilgileri() {
    return (
      <div className="iletisim-bilgileri">
        <h2>İletişim Bilgileri</h2>
        <p>
          <strong>Adres:</strong> Yenişehir Mah. Azerbaycan Cad. No: 5 42010 Meram / KONYA
        </p>
        <p>
          <strong>Telefon:</strong> 0332 320 10 00
        </p>
        <p>
          <strong>Eposta:</strong> bizimmeram@meram.bel.tr
        </p>
        <p>
          <strong>Kep Adresi:</strong> merambelediyesi@hs01.kep.tr
        </p>
        <p>
          <strong>E Tebligat:</strong> 35846-96487-38597
        </p>
        <p>
          <strong>IBAN:</strong> TR33 0001 2009 5240 0007 0000 02
        </p>
        <div className="social-links">
        <a href="https://www.facebook.com/mustafakavuss" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://www.instagram.com/mustafakavuss/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://twitter.com/MustafaKavus" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </div>
    </div>
  );
}
function IletisimSayfasi() {
  return (
    <main>
      <header>
        <h2>İletişim</h2>
      </header>
      <IletisimBilgileri />
    </main>
  );
}
return (
  <div className="App">
    <header className={`App-header ${isHomePage ? "home-header" : ""}`}>
      <div className="header-content">
        <h1>MERAM TAKI</h1>
        <div className="navigation">
          <div
            className={`nav-link ${isHomePage ? "selected" : ""}`}
            onClick={() => selectCategory(null)}
          >
            Ana Sayfa
          </div>
          <div
            className={`nav-link ${isHomePage ? "" : "selected"}`}
            onClick={() => selectCategory("kolye")}
          >
            Kolye
          </div>
          <div
            className={`nav-link ${isHomePage ? "" : "selected"}`}
            onClick={() => selectCategory("yuzuk")}
          >
            Yüzük
          </div>
          <div
            className={`nav-link ${isHomePage ? "" : "selected"}`}
            onClick={() => selectCategory("kupe")}
          >
            Küpe
          </div>
          <div
            className={`nav-link ${isHomePage ? "" : "selected"}`}
            onClick={() => selectCategory("iletisim")}
          >
            İletişim
          </div>
          <div className="cart-link" onClick={toggleCart}>
            Sepetim ({cart.length})
          </div>
        </div>
      </div>
    </header>
      {isHomePage && (
        <main>
          <div className="slideshow-container">
          <div className="mySlides fade">
  <img
    src="https://www.hayalgezgini.com/wp-content/uploads/2020/05/kum-boncuk-elisi-kolye_0330-3.jpg"
    alt="Ana Sayfa Resmi"
    className="full-width"
  />
  <div className="overlay-text">
    <h2>MERAM TAKI - El Yapımı Zarafet</h2>
    <p>
      Kalbinizdeki özel anları ve tarzınızı yansıtmak için tasarlanan takıları keşfedin. Her bir parça, özenle seçilmiş boncuklar ve el emeği ile hazırlanmaktadır.
    </p>
  </div>
</div>

          </div>
        </main>
      )}

{!isHomePage && selectedCategory === "iletisim" && <IletisimSayfasi />}


      {!isHomePage && selectedCategory !== "iletisim" && (
        <main>
          
          <section className="product-category">
            <h2>{selectedCategory}</h2>
            {selectedCategory === "kolye" && (
              <div className="product-cards">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div key={index} className="product-card">
                    <img
                      src={
                        index === 0
                          ? "https://i.pinimg.com/564x/e5/1b/54/e51b54b4568bf5c1ce1de2ef359d2dd3.jpg"
                          : index === 1
                          ? "https://i.pinimg.com/564x/31/67/b0/3167b0126c3d6596418abab7869e9c9d.jpg"
                          : index === 2
                          ? "https://d3hmqqgx76d63z.cloudfront.net/product_thumb/2002529886.jpg"
                          : index === 3
                          ? "https://i.pinimg.com/564x/78/d7/b0/78d7b0ab7888600d81b91bae884a46a2.jpg"
                          : index === 4
                          ? "https://i.pinimg.com/564x/ef/91/49/ef91497ed0a446e03d5958c4bcf1bd97.jpg"
                          : index === 5
                          ? "https://i.pinimg.com/564x/d5/f4/43/d5f44386c5909a362aab7b6603ce678d.jpg"
                          : index === 6
                          ? "https://www.takitasarimlarim.com/wp-content/uploads/2015/12/el-yapimi-kolyeler.jpg"
                          : index === 7
                          ? "https://i.pinimg.com/originals/62/27/3a/62273a1b2c7031466ec59e798150d200.jpg"
                          : index === 8
                          ? "https://i.pinimg.com/564x/f6/50/30/f65030a2ce545eb817250498b028eb11.jpg"
                          : index === 9
                          ? "https://www.takitasarimlarim.com/wp-content/uploads/2020/06/baharlik-boncuk-kolye-ve-kupe-yapimi.jpg"
                          : `https://example.com/kolye${index + 1}.jpg`
                      }
                      alt={`Kolye ${index + 1}`}
                      className="product-image"
                    />
                    <h3>Kolye {index + 1}</h3>
                    <p>Fiyat: ₺{20 + (index + 1) * 5}</p>
                    <button onClick={() => addToCart(`Kolye ${index + 1}`)}>
                      Sepete Ekle
                    </button>
                    <button onClick={() => removeFromCart(`Kolye ${index + 1}`)}>
                      Sepetten Sil
                    </button>
                  </div>
                ))}
              </div>
            )}
             {selectedCategory === "yuzuk" && (
              <div className="product-cards">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div key={index} className="product-card">
                    <img
                      src={
                        index === 0
                          ? "https://i.pinimg.com/564x/7d/84/6a/7d846a5e595e16b816c7b71babfeec4b.jpg"
                          : index === 1
                          ? "https://i.pinimg.com/564x/e8/e1/83/e8e1834c80df2506f9e04b319efaf157.jpg"
                          : index === 2
                          ? "https://i.pinimg.com/736x/16/7e/9f/167e9fcf92ce2abc1b2d5733cf660d6e.jpg"
                          : index === 3
                          ? "https://i.pinimg.com/564x/b6/94/f7/b694f7d60cc748f792c9ef7c46ce46f1.jpg"
                          : index === 4
                          ? "https://i.pinimg.com/564x/c6/ed/5d/c6ed5dd435ffcd67f05b3f9d4c9c7c25.jpg"
                          : index === 5
                          ? "https://i.pinimg.com/564x/3d/a2/3a/3da23a1a868568bc323aeec1fd753f66.jpg"
                          : index === 6
                          ? "https://i.pinimg.com/564x/39/04/d5/3904d50778ebea8e5efe26520a30b06e.jpg"
                          : index === 7
                          ? "https://i.pinimg.com/564x/b1/59/d3/b159d3a26a237fcc4522a034e428e676.jpg"
                          : index === 8
                          ? "https://i.pinimg.com/564x/72/43/81/724381a07878c3c1ef9444d6d9e4c95c.jpg"
                          : index === 9
                          ? "https://i.pinimg.com/736x/04/00/7d/04007df6728cd4f3f35b206157d1aa3d.jpg"
                          : `https://example.com/yuzuk${index + 1}.jpg`
                      }
                      alt={`Yüzük ${index + 1}`}
                      className="product-image"
                    />
                    <h3>Yüzük {index + 1}</h3>
                    <p>Fiyat: ₺{30 + (index + 1) * 7}</p>
                    <button onClick={() => addToCart(`Yüzük ${index + 1}`)}>
                      Sepete Ekle
                    </button>
                    <button onClick={() => removeFromCart(`Yüzük ${index + 1}`)}>
                      Sepetten Sil
                    </button>
                  </div>
                ))}
              </div>
            )}
            {selectedCategory === "kupe" && (
              <div className="product-cards">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div key={index} className="product-card">
                    <img
                      src={
                        index === 0
                          ? "https://i.pinimg.com/564x/ab/30/06/ab3006a80e3c06fd697c3b4e3928f87f.jpg"
                          : index === 1
                          ? "https://i.pinimg.com/564x/94/a1/77/94a177f420843b7cf930f5f917c7b87a.jpg"
                          : index === 2
                          ? "https://i.pinimg.com/736x/2f/ee/8a/2fee8ab8bce0438aae2cbe49346a12c9.jpg"
                          : index === 3
                          ? "https://i.pinimg.com/736x/ba/8c/52/ba8c52b79acdfe1033333d693ebb1345.jpg"
                          : index === 4
                          ? "https://i.pinimg.com/564x/2a/51/b7/2a51b72657ddee32e456e81d8648cce0.jpg"
                          : index === 5
                          ? "https://i.pinimg.com/564x/7f/f3/05/7ff30504e602dfb72d4f7a722bd3bd23.jpg"
                          : index === 6
                          ? "https://i.pinimg.com/564x/9d/bd/3c/9dbd3c72c8948d00ca36186b40cd8988.jpg"
                          : index === 7
                          ? "https://i.pinimg.com/564x/a4/aa/ca/a4aacaf05c7ef53cf67caf9081fe1bd5.jpg"
                          : index === 8
                          ? "https://i.pinimg.com/564x/38/76/4d/38764dc83e7107465cacbeccf1b215e9.jpg"
                          : index === 9
                          ? "https://i.pinimg.com/564x/4e/51/db/4e51dbf8829b318fd9a50be6cf8b1ddb.jpg"
                          : `https://example.com/kupe${index + 1}.jpg`
                      }
                      alt={`Küpe ${index + 1}`}
                      className="product-image"
                    />
                    <h3>Küpe {index + 1}</h3>
                    <p>Fiyat: ₺{15 + (index + 1) * 3}</p>
                    <button onClick={() => addToCart(`Küpe ${index + 1}`)}>
                      Sepete Ekle
                    </button>
                    <button onClick={() => removeFromCart(`Küpe ${index + 1}`)}>
                      Sepetten Sil
                    </button>
                  </div>
                ))}
              </div>
            )}
            {/* Diğer kategori kartları... */}
          </section>
        </main>
      )}

      {showCart && (
        <div className="cart-modal">
          <h2>Sepetim</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button onClick={toggleCart}>Kapat</button>
        </div>
      )}
    </div>
  );
            }
export default App;