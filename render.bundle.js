"use strict";
(self["webpackChunktop_restaurant_page"] = self["webpackChunktop_restaurant_page"] || []).push([["render"],{

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const updatePageView = (() => {
  const updateToMainHTML = () => {
      document.body.insertAdjacentHTML("afterbegin", 
            `<header>
            <div class="logo">
            </div>
            <div class="nav-container">
              <div class="toggle-nav-btn-container">
                <button class="toggle-nav-btn" id="toggle-nav-btn">
                  <span class="toggle-nav-open"></span>
                  <span class="toggle-nav-close hidden"></span>
                </button>
              </div>
              <ul class="main-nav" id="main-nav" data-visible="false">
                <li class="go-to-main"><a class="main-nav-links go-to-main" href="#">Main</a></li>
                <li class="go-to-menu"><a class="main-nav-links go-to-menu" href="#">Menu</a></li>
                <li class="go-to-about"><a class="main-nav-links go-to-about" href="#">About</a></li>
                <li class="go-to-location"><a class="main-nav-links go-to-location" href="#">Location</a></li>
              </ul>
            </div>
          </header>
          <main>
            <div class="title-main-grab">
              <div class="main-title-container">
                <h1 class="main-title">GiLLiGAN’s</h1>
                <p class="main-sub-title">Sandwich Shop</p>
                <p class="main-sub-title-two">Morro Bay, CA</p>
              </div>
            </div>
            <section class="main-section-container">
              <div class="main-section-title">
                
              </div>
              <div class="main-section">
                <div class="cards-left">
                  <div class="shop-text left-top">
                  </div>
                  <div class="shop-text left-bottom">
                    <p>Enjoy sandwiches by the sea from our wide selection of sandwiches!</p>
                  </div>
                </div>
                <div class="cards-right">
                  <div class="shop-text right-top">
                    <p>Come on in for a soup, salad, hot sandwiches, melts or one of our signature subs!</p>
                  </div>
                  <div class="shop-text right-bottom">
                  </div>
                </div>
              </div>

              <div class="section-two-container">
                <div class="section-two-title">
                
                </div>
                <div class="section-two">
                  <div class="contact-card">
                    <div class="contact-address">
                      <h4>Location</h4>
                      <p>480 Morro Bay Blvd</p>
                      <p>Morro Bay</p>
                      <p>CA 93442</p>
                    </div>
                    <div class="contact-phone">
                      <h4>Give Us a Call</h4>
                      <p>(805) 225-1320</p>
                    </div>
                    <div class="contact-email">
                      <h4>Reach Us by Email</h4>
                      <p>gilligans_sandwich@yahoo.com</p>
                  </div>
                  </div>
                  <div class="hours-card">
                    <h4>Business Hours</h4>
                    <ol class="ol-days">
                      <li>Monday</li>
                      <li>Tuesday</li>
                      <li>Wednesday</li>
                      <li>Thursday</li>
                      <li>Friday</li>
                      <li>Saturday</li>
                      <li>Sunday</li>
                    </ol>
                    <ol class="ol-hours">
                      <li>11AM - 5PM</li>
                      <li>11AM - 5PM</li>
                      <li>11AM - 5PM</li>
                      <li>11AM - 5PM</li>
                      <li>11AM - 5PM</li>
                      <li>11AM - 5PM</li>
                      <li>11AM - 5PM</li>
                    </ol>
                  </div>
                </div>


              </div>

            </section>

          </main>
          <footer>
            <div class="designer-info-container">
              <p>Designed by <a href="https://github.com/NighIsTheEnd">NighIsTheEnd</a></p>
            </div>
          </footer>`);
    }
    
  const updateToMenuHTML = () => {
    document.body.insertAdjacentHTML("afterbegin", 
    `<header>
      <div class="logo">
      </div>
      <div class="nav-container">
        <div class="toggle-nav-btn-container">
          <button class="toggle-nav-btn" id="toggle-nav-btn">
          <span class="toggle-nav-open"></span>
          <span class="toggle-nav-close hidden"></span>
        </button>
      </div>
      <ul class="main-nav" id="main-nav" data-visible="false">
        <li class="go-to-main"><a class="main-nav-links go-to-main" href="#">Main</a></li>
        <li class="go-to-menu"><a class="main-nav-links go-to-menu" href="#">Menu</a></li>
        <li class="go-to-about"><a class="main-nav-links go-to-about" href="#">About</a></li>
        <li class="go-to-location"><a class="main-nav-links go-to-location" href="#">Location</a></li>
      </ul>
      </div>
    </header>
    <main>
      <div class="title-main-grab title-main-grab-menu">
        <div class="main-title-container main-title-container-menu">
          <h1 class="main-title main-title-menu">MENU</h1>
        </div>
      </div>
      <div class="main-section-breakline">

      </div>
      <section class="menu-container">
          <div class="menu-left-container">
              <div class="menu-type signature-subs">
                  <div class="menu-type-title signature-subs">
                      <h3>Signature Subs</h3>
                      <p>Choice of: French, Duch Crunch, or Wheat Roll</p>
                  </div>
                  <div class="menu-type-card-container signature-subs">
                      <div class="menu-type-card signature-subs">
                          <h6>Club Sub <span>$13</span></h6>
                          <p>Turkey, Ham, Bacon, Amarican Cheese, Mayo, Mustard, Lettuce, Red Onion, Tomato, Pepperoncini, Vinegar & Oil w/ Seasoning</p>
                      </div>
                      <div class="menu-type-card signature-subs">
                          <h6>Italian Sub <span>$13</span></h6>
                          <p>Ham, Salami, Provolone, Mayo, Mustard, Lettuce, Red Onion, Tomato, Pepperoncini, Vinegar & Oil w/ Seasoning</p>
                      </div>
                      <div class="menu-type-card signature-subs">
                          <h6>B.L.A.T. <span>$12</span></h6>
                          <p>Bacon, Lettuce, Mayo, Avocado, Tomato, vinegar & Oil w/ Seasoning</p>
                      </div>
                      <div class="menu-type-card signature-subs">
                          <h6>Veggie Sub <span>$12</span></h6>
                          <p>Cheese, Lettuce, Tomato, Cuccumber, Onion, Pickles, Vinegar & Oil w/ Seasoning</p>
                      </div>
                  </div>
              </div>
              <div class="menu-type hot-sandwiches">
                  <div class="menu-type-title hot-sandwiches">
                      <h3>Hot Sandwiches</h3>
                  </div>
                  <div class="menu-type-card-container hot-sandwiches">
                      <div class="menu-type-card hot-sandwiches">
                          <h6>Killer Pastrami <span>$15</span></h6>
                          <p>Pastrami, Pepper-Jack Cheese, Mayo, Mustard, Pickles, Pepperoncini</p>
                      </div>
                      <div class="menu-type-card hot-sandwiches">
                          <h6>Roast Beef <span>$15</span></h6>
                          <p>Roast Beef, Swiss Cheese, Mayo, Dijon Mustard, Lettuce, Onion, Tomato</p>
                      </div>
                      <div class="menu-type-card hot-sandwiches">
                          <h6>Philly Cheesesteak <span>$15</span></h6>
                          <p>Steak, Provolone Cheese, Bell Peppers, Onion, Mayo</p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="menu-right-container">
              <div class="menu-type melts">
                  <div class="menu-type-title melts">
                      <h3>Melts</h3>
                      <p>Choice of: Sourdough, Thick White, or Rye</p>
                  </div>
                  <div class="menu-type-card-container melts">
                      <div class="menu-type-card melts">
                          <h6>Tuna Melt <span>$10</span></h6>
                          <p>Tuna, Cheddar Cheese, Mayo</p>
                      </div>
                      <div class="menu-type-card melts">
                          <h6>Ham & Cheese <span>$10</span></h6>
                          <p>Ham, Swiss Cheese, Mayo, Dijon Mustard</p>
                      </div>
                      <div class="menu-type-card melts">
                          <h6>Turkey Melt <span>$12</span></h6>
                          <p>Turkey, Bacon, Cheddar Cheese, Mayo, Tomato</p>
                      </div>
                      <div class="menu-type-card melts">
                          <h6>The Ruben <span>$12</span></h6>
                          <p>Pastrami, Swiss Cheese, Sauerkraut, Thousand Island</p>
                      </div>
                  </div>
              </div>
              <div class="menu-type soup">
                  <div class="menu-type-title soup">
                      <h3>Soup of The Day</h3>
                  </div>
                  <div class="menu-type-card-container soup">
                      <div class="menu-type-card soup">
                          <h6>Cup <span>$4</span></h6>
                          <h6>Bowl <span>$6</span></h6>
                      </div>
                  </div>
              </div>
              <div class="menu-type drinks">
                  <div class="menu-type-title drinks">
                      <h3>Drinks & Snacks</h3>
                  </div>
                  <div class="menu-type-card-container drinks">
                      <div class="menu-type-card drinks">
                          <p>Water Bottle $1.50</p>
                          <p>Canned Drinks $2.00</p>
                          <p>Bottled Drinks $2.50</p>
                          <p>Brownies & Cookies $2.50</p>
                          <p>Chips $2.00</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <aside class="build-your-own-model">
          <button class="build-your-own-popup-btn" id="build-your-own-popup-btn">Build Your Own Sandwich<span>$13</span></button>
          <dialog class="build-your-own-popup" id="build-your-own-popup">
              <div class="build-your-own-container">
                  <div class="build-your-own-header-container">
                      <div class="build-option-title build-your-own-title-container">
                          <h3>Build Your Own <span>$13</span></h3>
                          <p>Choice of: French Roll, Duch Crunch, Wheat Roll, Thick White, Rye, or Sourdough</p>
                      </div>
                      <button class="close-btn" id="close-btn">
                          <span class="close-btn-span"></span>
                      </button>
                  </div>
                  <div class="menu-type-card-container build-your-own-options-container">
                      <div class="build-option-left">
                          <div class="build-option-card meat">
                              <h6>Meats:</h6>
                              <p>Tuna</p>
                              <p>Ham</p>
                              <p>Turkey</p>
                              <p>Salami</p>
                              <p>Roast Beef <span>+$2</span></p>
                              <p>Pastrami <span>+$2</span></p>
                          </div>
                          <div class="build-option-card cheese">
                              <h6>Cheese:</h6>
                              <p>American</p>
                              <p>Swiss</p>
                              <p>Pepper-Jack</p>
                              <p>Cheddar</p>
                              <p>Provolone</p>
                              <p>Blue Cheese</p>
                          </div>
                      </div>
                      <div class="build-option-right">
                          <div class="build-option-card veggies">
                              <h6>Veggies:</h6>
                              <p>Lettuce</p>
                              <p>Spring Greens</p>
                              <p>Pepperoncini</p>
                              <p>Pickles</p>
                              <p>Cuccumbers</p>
                              <p>Red Onion</p>
                              <p>Tomato</p>
                          </div>
                          <div class="build-option-card condiments">
                              <h6>Condiments:</h6>
                              <p>Mayo</p>
                              <p>Mustard</p>
                              <p>Dijon Mustard</p>
                              <p>Ranch</p>
                              <p>Oil & Vinegar</p>
                              <p>w/ Seasoning</p>
                          </div>
                      </div>
                  </div>  
                  <div class="extra-options-container">
                      <div class="build-option-card build-option-extra">
                          <h6>Extras</h6>
                          <p>Bacon <span>+$2</span></p>
                          <p>Avocado <span>+$2</span></p>
                          <p>Extra Cheese <span>+$2</span></p>
                          <p>Extra Meat <span>+$2</span></p>
                      </div>
                  </div>
              </div>
          </dialog>
      </aside>
    </main>
    <footer>
      <div class="designer-info-container">
          <p>Designed by <a href="https://github.com/NighIsTheEnd">NighIsTheEnd</a></p>
      </div>
    </footer>`
    );
  }

  const updateToAboutHTML = () => {
    document.body.insertAdjacentHTML("afterbegin", 
      `<header>
        <div class="logo">
        </div>
        <div class="nav-container">
          <div class="toggle-nav-btn-container">
            <button class="toggle-nav-btn" id="toggle-nav-btn">
            <span class="toggle-nav-open"></span>
            <span class="toggle-nav-close hidden"></span>
          </button>
        </div>
        <ul class="main-nav" id="main-nav" data-visible="false">
            <li class="go-to-main"><a class="main-nav-links go-to-main" href="#">Main</a></li>
            <li class="go-to-menu"><a class="main-nav-links go-to-menu" href="#">Menu</a></li>
            <li class="go-to-about"><a class="main-nav-links go-to-about" href="#">About</a></li>
            <li class="go-to-location"><a class="main-nav-links go-to-location" href="#">Location</a></li>
          </ul>
        </div>
      </header>
      <main>
        <div class="main-section-breakline about-breakline">
      
        </div>
        <section class="main-section-container location-background about-background">
            <div class="section-two-container location-section-container about-section-container">
                <p>Under Construction</p>
            </div>
            
        </section>
      </main>
      <footer>
        <div class="designer-info-container">
          <p>Designed by <a href="https://github.com/NighIsTheEnd">NighIsTheEnd</a></p>
        </div>
      </footer>`);
  } 
  const updateToLocationHTML = () => {
    document.body.insertAdjacentHTML("afterbegin", 
      `<header>
        <div class="logo">
        </div>
        <div class="nav-container">
          <div class="toggle-nav-btn-container">
            <button class="toggle-nav-btn" id="toggle-nav-btn">
            <span class="toggle-nav-open"></span>
            <span class="toggle-nav-close hidden"></span>
          </button>
        </div>
        <ul class="main-nav" id="main-nav" data-visible="false">
            <li class="go-to-main"><a class="main-nav-links go-to-main" href="#">Main</a></li>
            <li class="go-to-menu"><a class="main-nav-links go-to-menu" href="#">Menu</a></li>
            <li class="go-to-about"><a class="main-nav-links go-to-about" href="#">About</a></li>
            <li class="go-to-location"><a class="main-nav-links go-to-location" href="#">Location</a></li>
          </ul>
        </div>
      </header>
      <main>
        <div class="main-section-breakline">
      
        </div>
        <section class="main-section-container location-background">
          <div class="section-two-container location-section-container">
            <div class="section-two">
              <div class="contact-card">
                <div class="contact-address">
                  <h4>Location</h4>
                  <p>480 Morro Bay Blvd</p>
                  <p>Morro Bay</p>
                  <p>CA 93442</p>
                </div>
                <div class="contact-phone">
                  <h4>Give Us a Call</h4>
                  <p>(805) 225-1320</p>
                </div>
                <div class="contact-email">
                    <h4>Reach Us by Email</h4>
                    <p>gilligans_sandwich@yahoo.com</p>
                </div>

              </div>
              <div class="hours-card">
                <h4>Business Hours</h4>
                <ol class="ol-days">
                  <li>Monday</li>
                  <li>Tuesday</li>
                  <li>Wednesday</li>
                  <li>Thursday</li>
                  <li>Friday</li>
                  <li>Saturday</li>
                  <li>Sunday</li>
                </ol>
                <ol class="ol-hours">
                  <li>11AM - 5PM</li>
                  <li>11AM - 5PM</li>
                  <li>11AM - 5PM</li>
                  <li>11AM - 5PM</li>
                  <li>11AM - 5PM</li>
                  <li>11AM - 5PM</li>
                  <li>11AM - 5PM</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div class="designer-info-container">
          <p>Designed by <a href="https://github.com/NighIsTheEnd">NighIsTheEnd</a></p>
        </div>
      </footer>`);
  }
    return {
      updateToMainHTML,
      updateToMenuHTML,
      updateToAboutHTML,
      updateToLocationHTML,
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updatePageView);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/render.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcmVuZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHVwZGF0ZVBhZ2VWaWV3ID0gKCgpID0+IHtcbiAgY29uc3QgdXBkYXRlVG9NYWluSFRNTCA9ICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBcbiAgICAgICAgICAgIGA8aGVhZGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZ2dsZS1uYXYtYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0b2dnbGUtbmF2LWJ0blwiIGlkPVwidG9nZ2xlLW5hdi1idG5cIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9nZ2xlLW5hdi1vcGVuXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b2dnbGUtbmF2LWNsb3NlIGhpZGRlblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1haW4tbmF2XCIgaWQ9XCJtYWluLW5hdlwiIGRhdGEtdmlzaWJsZT1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZ28tdG8tbWFpblwiPjxhIGNsYXNzPVwibWFpbi1uYXYtbGlua3MgZ28tdG8tbWFpblwiIGhyZWY9XCIjXCI+TWFpbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImdvLXRvLW1lbnVcIj48YSBjbGFzcz1cIm1haW4tbmF2LWxpbmtzIGdvLXRvLW1lbnVcIiBocmVmPVwiI1wiPk1lbnU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJnby10by1hYm91dFwiPjxhIGNsYXNzPVwibWFpbi1uYXYtbGlua3MgZ28tdG8tYWJvdXRcIiBocmVmPVwiI1wiPkFib3V0PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZ28tdG8tbG9jYXRpb25cIj48YSBjbGFzcz1cIm1haW4tbmF2LWxpbmtzIGdvLXRvLWxvY2F0aW9uXCIgaHJlZj1cIiNcIj5Mb2NhdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGUtbWFpbi1ncmFiXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLXRpdGxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm1haW4tdGl0bGVcIj5HaUxMaUdBTuKAmXM8L2gxPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWFpbi1zdWItdGl0bGVcIj5TYW5kd2ljaCBTaG9wPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWFpbi1zdWItdGl0bGUtdHdvXCI+TW9ycm8gQmF5LCBDQTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibWFpbi1zZWN0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1zZWN0aW9uLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRzLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaG9wLXRleHQgbGVmdC10b3BcIj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNob3AtdGV4dCBsZWZ0LWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5FbmpveSBzYW5kd2ljaGVzIGJ5IHRoZSBzZWEgZnJvbSBvdXIgd2lkZSBzZWxlY3Rpb24gb2Ygc2FuZHdpY2hlcyE8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZHMtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaG9wLXRleHQgcmlnaHQtdG9wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNvbWUgb24gaW4gZm9yIGEgc291cCwgc2FsYWQsIGhvdCBzYW5kd2ljaGVzLCBtZWx0cyBvciBvbmUgb2Ygb3VyIHNpZ25hdHVyZSBzdWJzITwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNob3AtdGV4dCByaWdodC1ib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi10d28tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tdHdvLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tdHdvXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWFkZHJlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDQ+TG9jYXRpb248L2g0PlxuICAgICAgICAgICAgICAgICAgICAgIDxwPjQ4MCBNb3JybyBCYXkgQmx2ZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5Nb3JybyBCYXk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+Q0EgOTM0NDI8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1waG9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoND5HaXZlIFVzIGEgQ2FsbDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+KDgwNSkgMjI1LTEzMjA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1lbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoND5SZWFjaCBVcyBieSBFbWFpbDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+Z2lsbGlnYW5zX3NhbmR3aWNoQHlhaG9vLmNvbTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG91cnMtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+QnVzaW5lc3MgSG91cnM8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3M9XCJvbC1kYXlzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPk1vbmRheTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlR1ZXNkYXk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5XZWRuZXNkYXk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5UaHVyc2RheTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPkZyaWRheTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlNhdHVyZGF5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+U3VuZGF5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzPVwib2wtaG91cnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+MTFBTSAtIDVQTTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjExQU0gLSA1UE08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT4xMUFNIC0gNVBNPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+MTFBTSAtIDVQTTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjExQU0gLSA1UE08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT4xMUFNIC0gNVBNPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+MTFBTSAtIDVQTTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNpZ25lci1pbmZvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8cD5EZXNpZ25lZCBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL05pZ2hJc1RoZUVuZFwiPk5pZ2hJc1RoZUVuZDwvYT48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvb3Rlcj5gKTtcbiAgICB9XG4gICAgXG4gIGNvbnN0IHVwZGF0ZVRvTWVudUhUTUwgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIFxuICAgIGA8aGVhZGVyPlxuICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm5hdi1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRvZ2dsZS1uYXYtYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0b2dnbGUtbmF2LWJ0blwiIGlkPVwidG9nZ2xlLW5hdi1idG5cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvZ2dsZS1uYXYtb3BlblwiPjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvZ2dsZS1uYXYtY2xvc2UgaGlkZGVuXCI+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsIGNsYXNzPVwibWFpbi1uYXZcIiBpZD1cIm1haW4tbmF2XCIgZGF0YS12aXNpYmxlPVwiZmFsc2VcIj5cbiAgICAgICAgPGxpIGNsYXNzPVwiZ28tdG8tbWFpblwiPjxhIGNsYXNzPVwibWFpbi1uYXYtbGlua3MgZ28tdG8tbWFpblwiIGhyZWY9XCIjXCI+TWFpbjwvYT48L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJnby10by1tZW51XCI+PGEgY2xhc3M9XCJtYWluLW5hdi1saW5rcyBnby10by1tZW51XCIgaHJlZj1cIiNcIj5NZW51PC9hPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cImdvLXRvLWFib3V0XCI+PGEgY2xhc3M9XCJtYWluLW5hdi1saW5rcyBnby10by1hYm91dFwiIGhyZWY9XCIjXCI+QWJvdXQ8L2E+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwiZ28tdG8tbG9jYXRpb25cIj48YSBjbGFzcz1cIm1haW4tbmF2LWxpbmtzIGdvLXRvLWxvY2F0aW9uXCIgaHJlZj1cIiNcIj5Mb2NhdGlvbjwvYT48L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICAgIDxtYWluPlxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLW1haW4tZ3JhYiB0aXRsZS1tYWluLWdyYWItbWVudVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi10aXRsZS1jb250YWluZXIgbWFpbi10aXRsZS1jb250YWluZXItbWVudVwiPlxuICAgICAgICAgIDxoMSBjbGFzcz1cIm1haW4tdGl0bGUgbWFpbi10aXRsZS1tZW51XCI+TUVOVTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibWFpbi1zZWN0aW9uLWJyZWFrbGluZVwiPlxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwibWVudS1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1sZWZ0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlIHNpZ25hdHVyZS1zdWJzXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlLXRpdGxlIHNpZ25hdHVyZS1zdWJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzPlNpZ25hdHVyZSBTdWJzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5DaG9pY2Ugb2Y6IEZyZW5jaCwgRHVjaCBDcnVuY2gsIG9yIFdoZWF0IFJvbGw8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUtY2FyZC1jb250YWluZXIgc2lnbmF0dXJlLXN1YnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlLWNhcmQgc2lnbmF0dXJlLXN1YnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkNsdWIgU3ViIDxzcGFuPiQxMzwvc3Bhbj48L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UdXJrZXksIEhhbSwgQmFjb24sIEFtYXJpY2FuIENoZWVzZSwgTWF5bywgTXVzdGFyZCwgTGV0dHVjZSwgUmVkIE9uaW9uLCBUb21hdG8sIFBlcHBlcm9uY2luaSwgVmluZWdhciAmIE9pbCB3LyBTZWFzb25pbmc8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZS1jYXJkIHNpZ25hdHVyZS1zdWJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5JdGFsaWFuIFN1YiA8c3Bhbj4kMTM8L3NwYW4+PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SGFtLCBTYWxhbWksIFByb3ZvbG9uZSwgTWF5bywgTXVzdGFyZCwgTGV0dHVjZSwgUmVkIE9uaW9uLCBUb21hdG8sIFBlcHBlcm9uY2luaSwgVmluZWdhciAmIE9pbCB3LyBTZWFzb25pbmc8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZS1jYXJkIHNpZ25hdHVyZS1zdWJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5CLkwuQS5ULiA8c3Bhbj4kMTI8L3NwYW4+PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QmFjb24sIExldHR1Y2UsIE1heW8sIEF2b2NhZG8sIFRvbWF0bywgdmluZWdhciAmIE9pbCB3LyBTZWFzb25pbmc8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZS1jYXJkIHNpZ25hdHVyZS1zdWJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5WZWdnaWUgU3ViIDxzcGFuPiQxMjwvc3Bhbj48L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DaGVlc2UsIExldHR1Y2UsIFRvbWF0bywgQ3VjY3VtYmVyLCBPbmlvbiwgUGlja2xlcywgVmluZWdhciAmIE9pbCB3LyBTZWFzb25pbmc8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUgaG90LXNhbmR3aWNoZXNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUtdGl0bGUgaG90LXNhbmR3aWNoZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDM+SG90IFNhbmR3aWNoZXM8L2gzPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlLWNhcmQtY29udGFpbmVyIGhvdC1zYW5kd2ljaGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZS1jYXJkIGhvdC1zYW5kd2ljaGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5LaWxsZXIgUGFzdHJhbWkgPHNwYW4+JDE1PC9zcGFuPjwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBhc3RyYW1pLCBQZXBwZXItSmFjayBDaGVlc2UsIE1heW8sIE11c3RhcmQsIFBpY2tsZXMsIFBlcHBlcm9uY2luaTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlLWNhcmQgaG90LXNhbmR3aWNoZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlJvYXN0IEJlZWYgPHNwYW4+JDE1PC9zcGFuPjwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJvYXN0IEJlZWYsIFN3aXNzIENoZWVzZSwgTWF5bywgRGlqb24gTXVzdGFyZCwgTGV0dHVjZSwgT25pb24sIFRvbWF0bzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlLWNhcmQgaG90LXNhbmR3aWNoZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlBoaWxseSBDaGVlc2VzdGVhayA8c3Bhbj4kMTU8L3NwYW4+PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U3RlYWssIFByb3ZvbG9uZSBDaGVlc2UsIEJlbGwgUGVwcGVycywgT25pb24sIE1heW88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtcmlnaHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUgbWVsdHNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUtdGl0bGUgbWVsdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDM+TWVsdHM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPkNob2ljZSBvZjogU291cmRvdWdoLCBUaGljayBXaGl0ZSwgb3IgUnllPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlLWNhcmQtY29udGFpbmVyIG1lbHRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZS1jYXJkIG1lbHRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5UdW5hIE1lbHQgPHNwYW4+JDEwPC9zcGFuPjwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlR1bmEsIENoZWRkYXIgQ2hlZXNlLCBNYXlvPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUtY2FyZCBtZWx0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+SGFtICYgQ2hlZXNlIDxzcGFuPiQxMDwvc3Bhbj48L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5IYW0sIFN3aXNzIENoZWVzZSwgTWF5bywgRGlqb24gTXVzdGFyZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlLWNhcmQgbWVsdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlR1cmtleSBNZWx0IDxzcGFuPiQxMjwvc3Bhbj48L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UdXJrZXksIEJhY29uLCBDaGVkZGFyIENoZWVzZSwgTWF5bywgVG9tYXRvPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUtY2FyZCBtZWx0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+VGhlIFJ1YmVuIDxzcGFuPiQxMjwvc3Bhbj48L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QYXN0cmFtaSwgU3dpc3MgQ2hlZXNlLCBTYXVlcmtyYXV0LCBUaG91c2FuZCBJc2xhbmQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUgc291cFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZS10aXRsZSBzb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzPlNvdXAgb2YgVGhlIERheTwvaDM+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUtY2FyZC1jb250YWluZXIgc291cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUtY2FyZCBzb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5DdXAgPHNwYW4+JDQ8L3NwYW4+PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkJvd2wgPHNwYW4+JDY8L3NwYW4+PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZSBkcmlua3NcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUtdGl0bGUgZHJpbmtzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzPkRyaW5rcyAmIFNuYWNrczwvaDM+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXR5cGUtY2FyZC1jb250YWluZXIgZHJpbmtzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtdHlwZS1jYXJkIGRyaW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XYXRlciBCb3R0bGUgJDEuNTA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNhbm5lZCBEcmlua3MgJDIuMDA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJvdHRsZWQgRHJpbmtzICQyLjUwPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ccm93bmllcyAmIENvb2tpZXMgJDIuNTA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNoaXBzICQyLjAwPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGFzaWRlIGNsYXNzPVwiYnVpbGQteW91ci1vd24tbW9kZWxcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnVpbGQteW91ci1vd24tcG9wdXAtYnRuXCIgaWQ9XCJidWlsZC15b3VyLW93bi1wb3B1cC1idG5cIj5CdWlsZCBZb3VyIE93biBTYW5kd2ljaDxzcGFuPiQxMzwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgICA8ZGlhbG9nIGNsYXNzPVwiYnVpbGQteW91ci1vd24tcG9wdXBcIiBpZD1cImJ1aWxkLXlvdXItb3duLXBvcHVwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZC15b3VyLW93bi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZC15b3VyLW93bi1oZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1aWxkLW9wdGlvbi10aXRsZSBidWlsZC15b3VyLW93bi10aXRsZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkJ1aWxkIFlvdXIgT3duIDxzcGFuPiQxMzwvc3Bhbj48L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DaG9pY2Ugb2Y6IEZyZW5jaCBSb2xsLCBEdWNoIENydW5jaCwgV2hlYXQgUm9sbCwgVGhpY2sgV2hpdGUsIFJ5ZSwgb3IgU291cmRvdWdoPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZS1idG5cIiBpZD1cImNsb3NlLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlLWJ0bi1zcGFuXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS10eXBlLWNhcmQtY29udGFpbmVyIGJ1aWxkLXlvdXItb3duLW9wdGlvbnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1aWxkLW9wdGlvbi1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZC1vcHRpb24tY2FyZCBtZWF0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+TWVhdHM6PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlR1bmE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5IYW08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UdXJrZXk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TYWxhbWk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Sb2FzdCBCZWVmIDxzcGFuPiskMjwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QYXN0cmFtaSA8c3Bhbj4rJDI8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1aWxkLW9wdGlvbi1jYXJkIGNoZWVzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkNoZWVzZTo8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QW1lcmljYW48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Td2lzczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBlcHBlci1KYWNrPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2hlZGRhcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlByb3ZvbG9uZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJsdWUgQ2hlZXNlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnVpbGQtb3B0aW9uLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZC1vcHRpb24tY2FyZCB2ZWdnaWVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+VmVnZ2llczo8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TGV0dHVjZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNwcmluZyBHcmVlbnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QZXBwZXJvbmNpbmk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QaWNrbGVzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q3VjY3VtYmVyczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJlZCBPbmlvbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRvbWF0bzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZC1vcHRpb24tY2FyZCBjb25kaW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+Q29uZGltZW50czo8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TWF5bzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk11c3RhcmQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EaWpvbiBNdXN0YXJkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UmFuY2g8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5PaWwgJiBWaW5lZ2FyPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+dy8gU2Vhc29uaW5nPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXh0cmEtb3B0aW9ucy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnVpbGQtb3B0aW9uLWNhcmQgYnVpbGQtb3B0aW9uLWV4dHJhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5FeHRyYXM8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5CYWNvbiA8c3Bhbj4rJDI8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Bdm9jYWRvIDxzcGFuPiskMjwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkV4dHJhIENoZWVzZSA8c3Bhbj4rJDI8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FeHRyYSBNZWF0IDxzcGFuPiskMjwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaWFsb2c+XG4gICAgICA8L2FzaWRlPlxuICAgIDwvbWFpbj5cbiAgICA8Zm9vdGVyPlxuICAgICAgPGRpdiBjbGFzcz1cImRlc2lnbmVyLWluZm8tY29udGFpbmVyXCI+XG4gICAgICAgICAgPHA+RGVzaWduZWQgYnkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9OaWdoSXNUaGVFbmRcIj5OaWdoSXNUaGVFbmQ8L2E+PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+YFxuICAgICk7XG4gIH1cblxuICBjb25zdCB1cGRhdGVUb0Fib3V0SFRNTCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgXG4gICAgICBgPGhlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRvZ2dsZS1uYXYtYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRvZ2dsZS1uYXYtYnRuXCIgaWQ9XCJ0b2dnbGUtbmF2LWJ0blwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b2dnbGUtbmF2LW9wZW5cIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvZ2dsZS1uYXYtY2xvc2UgaGlkZGVuXCI+PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzPVwibWFpbi1uYXZcIiBpZD1cIm1haW4tbmF2XCIgZGF0YS12aXNpYmxlPVwiZmFsc2VcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImdvLXRvLW1haW5cIj48YSBjbGFzcz1cIm1haW4tbmF2LWxpbmtzIGdvLXRvLW1haW5cIiBocmVmPVwiI1wiPk1haW48L2E+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImdvLXRvLW1lbnVcIj48YSBjbGFzcz1cIm1haW4tbmF2LWxpbmtzIGdvLXRvLW1lbnVcIiBocmVmPVwiI1wiPk1lbnU8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImdvLXRvLWFib3V0XCI+PGEgY2xhc3M9XCJtYWluLW5hdi1saW5rcyBnby10by1hYm91dFwiIGhyZWY9XCIjXCI+QWJvdXQ8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImdvLXRvLWxvY2F0aW9uXCI+PGEgY2xhc3M9XCJtYWluLW5hdi1saW5rcyBnby10by1sb2NhdGlvblwiIGhyZWY9XCIjXCI+TG9jYXRpb248L2E+PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLXNlY3Rpb24tYnJlYWtsaW5lIGFib3V0LWJyZWFrbGluZVwiPlxuICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm1haW4tc2VjdGlvbi1jb250YWluZXIgbG9jYXRpb24tYmFja2dyb3VuZCBhYm91dC1iYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi10d28tY29udGFpbmVyIGxvY2F0aW9uLXNlY3Rpb24tY29udGFpbmVyIGFib3V0LXNlY3Rpb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHA+VW5kZXIgQ29uc3RydWN0aW9uPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9tYWluPlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRlc2lnbmVyLWluZm8tY29udGFpbmVyXCI+XG4gICAgICAgICAgPHA+RGVzaWduZWQgYnkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9OaWdoSXNUaGVFbmRcIj5OaWdoSXNUaGVFbmQ8L2E+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9vdGVyPmApO1xuICB9IFxuICBjb25zdCB1cGRhdGVUb0xvY2F0aW9uSFRNTCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgXG4gICAgICBgPGhlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRvZ2dsZS1uYXYtYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRvZ2dsZS1uYXYtYnRuXCIgaWQ9XCJ0b2dnbGUtbmF2LWJ0blwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b2dnbGUtbmF2LW9wZW5cIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvZ2dsZS1uYXYtY2xvc2UgaGlkZGVuXCI+PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzPVwibWFpbi1uYXZcIiBpZD1cIm1haW4tbmF2XCIgZGF0YS12aXNpYmxlPVwiZmFsc2VcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImdvLXRvLW1haW5cIj48YSBjbGFzcz1cIm1haW4tbmF2LWxpbmtzIGdvLXRvLW1haW5cIiBocmVmPVwiI1wiPk1haW48L2E+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImdvLXRvLW1lbnVcIj48YSBjbGFzcz1cIm1haW4tbmF2LWxpbmtzIGdvLXRvLW1lbnVcIiBocmVmPVwiI1wiPk1lbnU8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImdvLXRvLWFib3V0XCI+PGEgY2xhc3M9XCJtYWluLW5hdi1saW5rcyBnby10by1hYm91dFwiIGhyZWY9XCIjXCI+QWJvdXQ8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImdvLXRvLWxvY2F0aW9uXCI+PGEgY2xhc3M9XCJtYWluLW5hdi1saW5rcyBnby10by1sb2NhdGlvblwiIGhyZWY9XCIjXCI+TG9jYXRpb248L2E+PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLXNlY3Rpb24tYnJlYWtsaW5lXCI+XG4gICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibWFpbi1zZWN0aW9uLWNvbnRhaW5lciBsb2NhdGlvbi1iYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tdHdvLWNvbnRhaW5lciBsb2NhdGlvbi1zZWN0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tdHdvXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1hZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICA8aDQ+TG9jYXRpb248L2g0PlxuICAgICAgICAgICAgICAgICAgPHA+NDgwIE1vcnJvIEJheSBCbHZkPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+TW9ycm8gQmF5PC9wPlxuICAgICAgICAgICAgICAgICAgPHA+Q0EgOTM0NDI8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtcGhvbmVcIj5cbiAgICAgICAgICAgICAgICAgIDxoND5HaXZlIFVzIGEgQ2FsbDwvaDQ+XG4gICAgICAgICAgICAgICAgICA8cD4oODA1KSAyMjUtMTMyMDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1lbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+UmVhY2ggVXMgYnkgRW1haWw8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8cD5naWxsaWdhbnNfc2FuZHdpY2hAeWFob28uY29tPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG91cnMtY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxoND5CdXNpbmVzcyBIb3VyczwvaDQ+XG4gICAgICAgICAgICAgICAgPG9sIGNsYXNzPVwib2wtZGF5c1wiPlxuICAgICAgICAgICAgICAgICAgPGxpPk1vbmRheTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+VHVlc2RheTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+V2VkbmVzZGF5PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5UaHVyc2RheTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+RnJpZGF5PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5TYXR1cmRheTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+U3VuZGF5PC9saT5cbiAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgIDxvbCBjbGFzcz1cIm9sLWhvdXJzXCI+XG4gICAgICAgICAgICAgICAgICA8bGk+MTFBTSAtIDVQTTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+MTFBTSAtIDVQTTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+MTFBTSAtIDVQTTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+MTFBTSAtIDVQTTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+MTFBTSAtIDVQTTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+MTFBTSAtIDVQTTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+MTFBTSAtIDVQTTwvbGk+XG4gICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9tYWluPlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRlc2lnbmVyLWluZm8tY29udGFpbmVyXCI+XG4gICAgICAgICAgPHA+RGVzaWduZWQgYnkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9OaWdoSXNUaGVFbmRcIj5OaWdoSXNUaGVFbmQ8L2E+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9vdGVyPmApO1xuICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZVRvTWFpbkhUTUwsXG4gICAgICB1cGRhdGVUb01lbnVIVE1MLFxuICAgICAgdXBkYXRlVG9BYm91dEhUTUwsXG4gICAgICB1cGRhdGVUb0xvY2F0aW9uSFRNTCxcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlUGFnZVZpZXc7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9