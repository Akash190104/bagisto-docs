/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "9641f915177761e9e94f613f9967d27b"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "2c7668230fdb3e5e4027d18e761ee6a0"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "d934137f4dfffd06abb9b22c8640f71f"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "26e57ec9364f16952e9f154e29ef9979"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "f1eb71975b328c71a10219f614a46d15"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "5884f05a149e2701463a497aa5d615df"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "8cec7361925cfcfd5099b386eb6f95c0"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "45102103d5487781f8362ed11cc83cac"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "9b4afab63c2eff3e15af89d632331f56"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "2f63cc3990fe5fe3833054468ea95ffb"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "460b5b49f1c414d4a2dd239605fb0c73"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "6ba6aa71268d75d3781abf39fa8ec8b8"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "82924a64d24137fcb774fb70ebe4daef"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "1d36691d496f934d79ee6056c854d8bc"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "cf81c355d45f7bdd4b238d705e447628"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "9607829f90f760d6c85eb8f09dc70ad9"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "347df3c7995fb358092b6bad5fcd28d7"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "0630d3185e9352697f352b908c4d2628"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "48345a5249b3518c6820da26c0154771"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "c5cbadeefb036b1f34df08b9585b6062"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "0339640783e09c58b9cd4e8dcba0a8d5"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "bb85e22d725fe195d5bd2a5289ab59e5"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "151a1140c0b35376ec05bc47c866802c"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "a4f8052b70d0af384051225d4e4a3883"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "5b6cf7021b3347f8534b0e02bc54f69d"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "f8b26b91eb0425b9a4439af7f8cc0e8e"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "0d6a88c83f66599c3aa7d63e5a820cd4"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "3acec4fc90fd8e37a73313938a37b46d"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "0414bf38d9cf752ea82f3765adae2f20"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "9f62bf72613979cae3107464f7832ff8"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "e87f793dda7750ea3c9b9e42afa90161"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "cdece2c520ffe7ba11966057c0de4f1d"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "0d01070265be3d51d71f8379c2541934"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "5bc517a4f83fe80eeb2f240aedc5d79e"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "2f1297fa9ead501de4af1500447dbb61"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "b24b5dfa92620eda8628cde7d2d8e50e"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "85879cd37997fe53a422f3f2c5cfd061"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "8263a4fbc187381837dfa3db0c4b800d"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "4741b1857896c55a8805a6b7955a6345"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "8dbfe3f3e518692b4d9d64dd4f4128a0"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "7a208b7baa251c2cbfe2395f8b2cd778"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "1ebe78d741df94c4cc2789cc4cbef85f"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "3f896ee954c97daf13e07422a28f7d58"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "b7acac635ca8d5279feb00e83b18c7d4"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "6f9cb5aa4a962e49e83a6ada45195eb4"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "efac2d4e655104f84b174bd5e5be3992"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "ccf475aef87e020e4f7445ca5b1ea757"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "7d74a13cfe7c1f847d1aa747e89ac11d"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "33df24628600dfa4d169208d6b12c9f8"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "421e49578f2635bb2bce7e5c63a66b52"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "ed38565fd68676734728aac70e02bfdc"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "bcd4fae6dcdfab9c45e33e69f5f1c352"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "e50a37f20e8bf85b89c1cf1afb621aeb"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "090a8246a9dc453abda226d199620d2d"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "1c88a8eb6a6764cd5396acf4e0cd27b4"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "1c07d91de4cce1842471952582f5c899"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "b180c49c8ae5e2492d8f56ac8a78fa6c"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "238f65e9535f2a5800357e93e062e866"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "673150edd56a6ec66db32b0496e31b4e"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "57aa968dc694810255699096b9665e17"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "3cc1a37a4b4fb3de6660368a86a09e13"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "e7b978d6645d75252eec63a58ea63f20"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "d97596f8d715104f55c0f7f8957c21f0"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "ee5ce78322f6bc27d999a037c1457a44"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "9836a4ec3d5d817b79ccbc676514e926"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "4ace4d126d651281a8f3292a418778ef"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "81bf7e628390ea635abadb986203d78d"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "1af862554e2738ef4bc65f69fd91bdde"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "69c02a4982e0a339008c38f9e0c7b270"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "830e2e0b03eac7286fd882434136652a"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "1df8b2be7364613c8b7dac29881ab555"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "01d99ade14a6b1fa8911a7b079edbb4d"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "4510c3bd42c28dc6bf4066fd3a063a7d"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "4cf3a88494c36d2b054144bfefb56b0a"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "f9bdca93c08c123a93e204e533ca77cf"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "2afa38194b3ebdbd23dcaffcf377cc82"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "a678a5315b229e6de20028322a44a0a8"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "8dad703345d045c90e876ebb6d5d45a2"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "e8063dbc5dbbdb00c91492453e7cef42"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "7717f8be90299ff958342e2e4d852c7d"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "aa4c2f24b839478494471045edc8b0bf"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "e1a0ee84039e13c837ff5893c4639f9b"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "6603d7777020982435b9458670451fca"
  },
  {
    "url": "404.html",
    "revision": "2393e371ddef6da4e8f83ddf0fb1ba2c"
  },
  {
    "url": "assets/css/0.styles.7e612dfc.css",
    "revision": "0e21ce67186e610f5bda9a9fadded9d7"
  },
  {
    "url": "assets/img/add-locale-bagisto.b2e2cfb9.png",
    "revision": "b2e2cfb94cf27c4c873e38113fa70aaf"
  },
  {
    "url": "assets/img/admin_social_auth.1f906bf7.png",
    "revision": "1f906bf7aaadd3d1ffa9d1f2a1ecb564"
  },
  {
    "url": "assets/img/admin-acl-output.33cbb854.png",
    "revision": "33cbb8542307d97dce7e411f4e1ffee2"
  },
  {
    "url": "assets/img/admin-custom-config-output.ad6536ab.png",
    "revision": "ad6536ab0b05048c23992f08943b6d1d"
  },
  {
    "url": "assets/img/admin-menu-output.a5949c80.png",
    "revision": "a5949c80bf47f4a37c0f8d330f1f139c"
  },
  {
    "url": "assets/img/arrabic-attribute.4d7a4275.png",
    "revision": "4d7a4275690cfe606cdb2f1babf87cc5"
  },
  {
    "url": "assets/img/bagisto_add_info.78af382e.jpg",
    "revision": "78af382e00c5ed610f08e7dcb25de296"
  },
  {
    "url": "assets/img/bagisto_attribute.a6fc572b.jpg",
    "revision": "a6fc572b5095c9086b4b9594c7627dbb"
  },
  {
    "url": "assets/img/bagisto_cart_add.63562e08.jpg",
    "revision": "63562e08b02018b7b6a8826f9bb124f6"
  },
  {
    "url": "assets/img/bagisto_cart_guest.d853001d.jpg",
    "revision": "d853001da175e958725f6cf956e31e84"
  },
  {
    "url": "assets/img/bagisto_cart_remove_item.3b5df823.jpg",
    "revision": "3b5df82328f5369892e46b182c1fb326"
  },
  {
    "url": "assets/img/bagisto_cart_update.3b860220.jpg",
    "revision": "3b860220a366af90e600fd35c087d67b"
  },
  {
    "url": "assets/img/bagisto_cart.3cc30a8b.jpg",
    "revision": "3cc30a8be1ec377e6a4aa9c4bb1cc4d5"
  },
  {
    "url": "assets/img/bagisto_config_attr.83af48dd.jpg",
    "revision": "83af48ddf4fc985007f39acec9cc37e3"
  },
  {
    "url": "assets/img/bagisto_config.325d4e50.jpg",
    "revision": "325d4e50a5fd49d4ec8a9c447f21a6e6"
  },
  {
    "url": "assets/img/bagisto_move_to_wishlist.092fc8ae.jpg",
    "revision": "092fc8ae6b7ce543f91fcbcb840ebd82"
  },
  {
    "url": "assets/img/bagisto_orders_id.47d67a0d.jpg",
    "revision": "47d67a0d48c7eb4471788608a266ebd0"
  },
  {
    "url": "assets/img/bagisto_orders_no_pag.eb8fd609.jpg",
    "revision": "eb8fd6090b445f1a375c41d22bdb9405"
  },
  {
    "url": "assets/img/bagisto_prod_color.54846a87.jpg",
    "revision": "54846a878f4e58126066ca83a1f698e4"
  },
  {
    "url": "assets/img/bagisto_prod_price_config.1c3285d1.jpg",
    "revision": "1c3285d10a818abb2dca20a777b79258"
  },
  {
    "url": "assets/img/bagisto_prod_price_simple.78ef8f5a.jpg",
    "revision": "78ef8f5ac73bae616e5e0794dfeb7f42"
  },
  {
    "url": "assets/img/bagisto_prod_size.2fdc1d32.jpg",
    "revision": "2fdc1d32ecc5200a7a65d99b44e600fb"
  },
  {
    "url": "assets/img/bagisto_save_address.633cf573.jpg",
    "revision": "633cf57391403cf1df62f8dfe80d6661"
  },
  {
    "url": "assets/img/bagisto_save_order.c2fab81f.jpg",
    "revision": "c2fab81f906b0dda24ab128e2100f0e3"
  },
  {
    "url": "assets/img/bagisto_save_payment.99edb31c.jpg",
    "revision": "99edb31ca6dbf31d3261d528d48f120f"
  },
  {
    "url": "assets/img/bagisto_save_shipping.6c8d23d1.jpg",
    "revision": "6c8d23d1f29b3905c0742e6fe9dc2a03"
  },
  {
    "url": "assets/img/bagisto_ship_order_id.367b77a9.jpg",
    "revision": "367b77a9b47802107f443338b7ff1cfe"
  },
  {
    "url": "assets/img/bagisto_shipments.e6134a4b.jpg",
    "revision": "e6134a4b8b604b1756ab3ef108884406"
  },
  {
    "url": "assets/img/bagisto_wishlist_page.de525699.jpg",
    "revision": "de5256999417cca7f6ab7503a5b109d1"
  },
  {
    "url": "assets/img/catageory-in-arabic.4b55c745.png",
    "revision": "4b55c745b858c4aac3044fa348caf6a7"
  },
  {
    "url": "assets/img/channel-setting-in-bagisto.a7a72cb5.png",
    "revision": "a7a72cb5af650f7e582f8deae80e4f99"
  },
  {
    "url": "assets/img/default-location-calculation-config.ea4a469a.png",
    "revision": "ea4a469a4371daea67d8d9dc060dc002"
  },
  {
    "url": "assets/img/front-end-in-arabic.f7c759e0.png",
    "revision": "f7c759e055265bf9ebd9df156e22c9ab"
  },
  {
    "url": "assets/img/front-end.9aaeb0de.png",
    "revision": "9aaeb0de8e5707aa4afa1845e2fa1f4d"
  },
  {
    "url": "assets/img/github-OAuth-step1.e74d8be1.png",
    "revision": "e74d8be18d45562391def8eabc3f9f05"
  },
  {
    "url": "assets/img/github-OAuth-step3.1c5347e7.png",
    "revision": "1c5347e798d2d4e9f232e821b30a0d71"
  },
  {
    "url": "assets/img/google-OAuth-step1.cdeb34e7.png",
    "revision": "cdeb34e75d4109dc8c732cb2a41f7149"
  },
  {
    "url": "assets/img/google-OAuth-step10.7cf440b2.png",
    "revision": "7cf440b27afcc28b91d0569d0e0574dd"
  },
  {
    "url": "assets/img/google-OAuth-step2.33d3b5d7.png",
    "revision": "33d3b5d7d306652f9ad8145885649684"
  },
  {
    "url": "assets/img/google-OAuth-step3.7cfab527.png",
    "revision": "7cfab527afc801407b13bb1c0080502c"
  },
  {
    "url": "assets/img/google-OAuth-step4.58f07d86.png",
    "revision": "58f07d861b92fdf12e966ef8ec0a2f7d"
  },
  {
    "url": "assets/img/google-OAuth-step6.feabd47b.png",
    "revision": "feabd47b9a5af05843c2bb60b8226e37"
  },
  {
    "url": "assets/img/google-OAuth-step7.21f7d9f6.png",
    "revision": "21f7d9f6ff6babc41c0e032cf963356c"
  },
  {
    "url": "assets/img/google-OAuth-step8.c2178472.png",
    "revision": "c21784723f5897170c0780d4307dbbb1"
  },
  {
    "url": "assets/img/google-OAuth-step9.83e7862b.png",
    "revision": "83e7862bd3d9aa050b4dbd2bded3fec7"
  },
  {
    "url": "assets/img/hello-world-package-output.2f3c248f.png",
    "revision": "2f3c248fcf0bcdb3a497646485084147"
  },
  {
    "url": "assets/img/helloworld-admin-browser-output.58d525cb.png",
    "revision": "58d525cbaf78c5763ac8f557cdd31e9f"
  },
  {
    "url": "assets/img/helloworld-shop-browser-output.036ed5d9.png",
    "revision": "036ed5d98b58f5887a0cde7d6a874bd5"
  },
  {
    "url": "assets/img/installed-elastic-info.46e47fde.png",
    "revision": "46e47fde533d4982324a07b091943503"
  },
  {
    "url": "assets/img/language-changes.a799195d.png",
    "revision": "a799195df5c2def1f7798b6296eb0659"
  },
  {
    "url": "assets/img/limiting-error-messages.5887bc7c.png",
    "revision": "5887bc7c25f56a6e4e03ead32f873720"
  },
  {
    "url": "assets/img/locale-setup.a0047ee5.png",
    "revision": "a0047ee598bf517ca89e565539e444cc"
  },
  {
    "url": "assets/img/locale-trans.eed57105.png",
    "revision": "eed57105bf11bb1ad460c9e09ec9e207"
  },
  {
    "url": "assets/img/locale.b190a2d4.png",
    "revision": "b190a2d4e2ed61a1a75b829f6af4bdcf"
  },
  {
    "url": "assets/img/mail-sample.6aa3d730.png",
    "revision": "6aa3d7304bd852564b76860b7117bdb7"
  },
  {
    "url": "assets/img/product-in-arabic.e634c43f.png",
    "revision": "e634c43ff0331dcf5ff91211017c6f1f"
  },
  {
    "url": "assets/img/product-index.a45ce729.png",
    "revision": "a45ce7297692b3170774154331aa5911"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/translation.96b21cfa.png",
    "revision": "96b21cfa473af2e88086d0ccdebb40e4"
  },
  {
    "url": "assets/js/10.50a5c549.js",
    "revision": "9c25ab9595cefab21ff57c213257f559"
  },
  {
    "url": "assets/js/11.e7e65149.js",
    "revision": "8f028e8e1a2467c8abbcba4e9c0d596c"
  },
  {
    "url": "assets/js/12.976ddd2f.js",
    "revision": "55031fcec70997070ae053a18151bf3e"
  },
  {
    "url": "assets/js/13.4c0080fc.js",
    "revision": "8c0c489abace693f1b94a4f6d4901a32"
  },
  {
    "url": "assets/js/14.86ed2001.js",
    "revision": "a5c40c855a80c0d9e969b2c433e1adf5"
  },
  {
    "url": "assets/js/15.30bc4b0f.js",
    "revision": "55e535b8153b477be3d7c8b58f6aef88"
  },
  {
    "url": "assets/js/16.6e033a0e.js",
    "revision": "d0d34a88ccdf675270e81436f2dd4196"
  },
  {
    "url": "assets/js/17.09a67b45.js",
    "revision": "dcedbdd0a6af97e1b15adf3e1140d295"
  },
  {
    "url": "assets/js/18.89d146cb.js",
    "revision": "f39bdeaffb6bca7ebd94424eb0dd25c8"
  },
  {
    "url": "assets/js/19.38e05591.js",
    "revision": "6d4cbab2dee1a65a70ae6219fd73c4fa"
  },
  {
    "url": "assets/js/2.c632e24b.js",
    "revision": "b5f03c7139e287fec1b4d4557c51bbcd"
  },
  {
    "url": "assets/js/20.7799c16d.js",
    "revision": "fe38bcbcf3a439e7c1972ed5771c4324"
  },
  {
    "url": "assets/js/21.b4b4e608.js",
    "revision": "a2461b9cf6853acc3c01575e1c406f1e"
  },
  {
    "url": "assets/js/22.bef0e034.js",
    "revision": "c736b21454a1f4448a69638f2e16913c"
  },
  {
    "url": "assets/js/23.b728c087.js",
    "revision": "f7ecfe0cb68fc9cf4ba37c5e02df9a5b"
  },
  {
    "url": "assets/js/24.e8ee4d40.js",
    "revision": "90a66a55d7e576b8864e23203b868623"
  },
  {
    "url": "assets/js/25.ff8f0161.js",
    "revision": "2ed8e1e30c67a58908ecaceebfe310fd"
  },
  {
    "url": "assets/js/26.a5c34563.js",
    "revision": "c40930ea344418c53062a2fb7247f8f9"
  },
  {
    "url": "assets/js/27.78d94058.js",
    "revision": "aabf969f88d27f4f0ff4314597f88c43"
  },
  {
    "url": "assets/js/28.948f3086.js",
    "revision": "5091725335397186633fa4b8257ad3ff"
  },
  {
    "url": "assets/js/29.e384e6e1.js",
    "revision": "e4e02a34066c9b79942613475a26ca95"
  },
  {
    "url": "assets/js/3.0abd1b0c.js",
    "revision": "b4fd16da7e316c9f9c156bfc224ad85c"
  },
  {
    "url": "assets/js/30.a1e05aa4.js",
    "revision": "f4f505363d1d6aacab3e0bfa79b945b5"
  },
  {
    "url": "assets/js/31.d8794216.js",
    "revision": "d8a7e403cc3d978e91f6a84fd4d8a0b9"
  },
  {
    "url": "assets/js/32.4b0abd3a.js",
    "revision": "2804e3c5a2a1364472fd5efd816f2b0d"
  },
  {
    "url": "assets/js/33.a235c262.js",
    "revision": "6426fa77ed11c63a7f538575fd0be61b"
  },
  {
    "url": "assets/js/34.292c45e3.js",
    "revision": "339c1f4498ff4971bce936f98b05d268"
  },
  {
    "url": "assets/js/35.2cc724c0.js",
    "revision": "4a95a59fcf8b7068e57c8371b85c07a1"
  },
  {
    "url": "assets/js/36.58c05e36.js",
    "revision": "45b1d7a697a4e9d62d7161c7b2cd01fc"
  },
  {
    "url": "assets/js/37.5fee0d83.js",
    "revision": "415e3e9bb49782c3a15eb095b311101e"
  },
  {
    "url": "assets/js/38.7ae6c3ef.js",
    "revision": "b98ddfc36940cb6924a875fb5eeef863"
  },
  {
    "url": "assets/js/39.14f92134.js",
    "revision": "c49db3001de6e0cc8b775aa86c490ae2"
  },
  {
    "url": "assets/js/4.b8b1e4ef.js",
    "revision": "f0cdcae6ec893d2f1f3c8beb5a4a4f34"
  },
  {
    "url": "assets/js/40.79b0fc46.js",
    "revision": "dcfe4b2be333aec0d5d9194e304bb9c3"
  },
  {
    "url": "assets/js/41.33e847e0.js",
    "revision": "ddb6eb9be89a07860e93b9aca90fac3c"
  },
  {
    "url": "assets/js/42.eb762c9b.js",
    "revision": "53c99d50ef66569f4e6a1c78e7f1cfea"
  },
  {
    "url": "assets/js/43.01f56a6a.js",
    "revision": "5c709abb2e4fdfcb50cf9e3527579170"
  },
  {
    "url": "assets/js/44.2da3fc52.js",
    "revision": "2ba75428a7b3ef5571989240606b1200"
  },
  {
    "url": "assets/js/45.d2d8b441.js",
    "revision": "25fd491977b3549b9f3ddb96be28e35d"
  },
  {
    "url": "assets/js/46.d8ed30ff.js",
    "revision": "2aad0dc18c6f748f0941cac5fc26cfcb"
  },
  {
    "url": "assets/js/47.5720eca7.js",
    "revision": "bc4c25ea857a17d91e33d86a47b9e13d"
  },
  {
    "url": "assets/js/48.f1e43222.js",
    "revision": "4f853122d69c92575637bac5822f4aab"
  },
  {
    "url": "assets/js/49.87d7dbe1.js",
    "revision": "8c70989dc7c54685e82198179104873c"
  },
  {
    "url": "assets/js/5.545e765b.js",
    "revision": "3d98477f303de355a69e1de394c35da5"
  },
  {
    "url": "assets/js/50.bf0fc331.js",
    "revision": "7a13e59b5bbe7f1e7560146c531d40f7"
  },
  {
    "url": "assets/js/51.b809cf7c.js",
    "revision": "c8fbd59dfa246abcd1e5bb6a67bec9f0"
  },
  {
    "url": "assets/js/52.2ef45697.js",
    "revision": "97c236e78b0619c717e5c4a726848748"
  },
  {
    "url": "assets/js/53.e480fbd9.js",
    "revision": "f82b889e1f3ed1792eb843d2f49677de"
  },
  {
    "url": "assets/js/54.757c8e51.js",
    "revision": "376ec7bbdadbd74c384b0aecaf819984"
  },
  {
    "url": "assets/js/55.e3c1e8da.js",
    "revision": "ed7401881f7e2d601402198cca17051a"
  },
  {
    "url": "assets/js/56.5dac5f73.js",
    "revision": "7852fd498a023b093c10e25c1805d570"
  },
  {
    "url": "assets/js/57.1821765c.js",
    "revision": "fcb45f5a777716844a98f0766f92e384"
  },
  {
    "url": "assets/js/58.97295058.js",
    "revision": "02a3a15395df6edd09927634f57f03b8"
  },
  {
    "url": "assets/js/59.93f42920.js",
    "revision": "ddf9c7bdfa64083e5e5637cf9da53ab1"
  },
  {
    "url": "assets/js/6.c06010f5.js",
    "revision": "a5850f7cb7de13793030c593b513e78a"
  },
  {
    "url": "assets/js/60.361ecd0b.js",
    "revision": "3edcb1a2af55f437f41a8154d0a12069"
  },
  {
    "url": "assets/js/61.ac839a68.js",
    "revision": "66dde3a31a20065711b0bfe30e0b2380"
  },
  {
    "url": "assets/js/62.fe6affc4.js",
    "revision": "fd593ce3a5eeed8ad6542ae5ee234ed1"
  },
  {
    "url": "assets/js/63.5e5500fe.js",
    "revision": "8161e7a446379d20164d49cc58bd1f6b"
  },
  {
    "url": "assets/js/64.9308db41.js",
    "revision": "e39036983e063744b904a7adf850fd0e"
  },
  {
    "url": "assets/js/65.eb36721f.js",
    "revision": "158d4b8c667f6033255f2bfc6a2479a9"
  },
  {
    "url": "assets/js/66.be5b2fc2.js",
    "revision": "a7be66f9563d82306189a7cfc709db3b"
  },
  {
    "url": "assets/js/67.db03f900.js",
    "revision": "6040bf440b3c905ab667b3b7e5e79e5e"
  },
  {
    "url": "assets/js/68.859c3266.js",
    "revision": "944b0cbb5cd9bba1fbfcd18b37d48618"
  },
  {
    "url": "assets/js/69.ff6ce3c4.js",
    "revision": "337be963dd5ea4033b4b2a3cf1ae4bbe"
  },
  {
    "url": "assets/js/7.f6581774.js",
    "revision": "0450e0a952dde10d2c89a6853b7ab5bd"
  },
  {
    "url": "assets/js/70.9c684d20.js",
    "revision": "b427a2e9ba0e32c77020645397c35618"
  },
  {
    "url": "assets/js/71.252b1cd4.js",
    "revision": "cdca030dc626e7680f35053fe5b87cd4"
  },
  {
    "url": "assets/js/72.44e0bebe.js",
    "revision": "b7867267f259631061affb1569bd4e1a"
  },
  {
    "url": "assets/js/73.ab8e3ebf.js",
    "revision": "0c3f2159171fb81ff11d50e8183104e9"
  },
  {
    "url": "assets/js/74.57ee1b59.js",
    "revision": "8faa17ff33da916a2498c47ce8482f90"
  },
  {
    "url": "assets/js/75.32836a75.js",
    "revision": "0df1284f2a8cd0efddfa2dffd0396a11"
  },
  {
    "url": "assets/js/76.756959b1.js",
    "revision": "6e1ba8ab7b2bc83c166aa925f1e32480"
  },
  {
    "url": "assets/js/77.db9a4348.js",
    "revision": "e822f2f2e02396030dc0dbbfc616fc89"
  },
  {
    "url": "assets/js/78.9e729c80.js",
    "revision": "9f7fbc5bb7ea9b12741feac25113d97c"
  },
  {
    "url": "assets/js/79.774ab318.js",
    "revision": "f6666c501de8c971425c270b120b659d"
  },
  {
    "url": "assets/js/8.c87ac0b4.js",
    "revision": "488047a7c7535c98a4cc19b7e2bed462"
  },
  {
    "url": "assets/js/80.2b0af538.js",
    "revision": "fcd6e64411d4837eddc8c19f0c173fe5"
  },
  {
    "url": "assets/js/81.aa4b10d4.js",
    "revision": "14c2a32369ad06ea68756115745b0e70"
  },
  {
    "url": "assets/js/82.020c6cf6.js",
    "revision": "33ee59d3c55a288fdc7ea51bd8febc79"
  },
  {
    "url": "assets/js/83.1ac77e58.js",
    "revision": "8b347879f08147696505403c7d57790e"
  },
  {
    "url": "assets/js/84.dfff7e26.js",
    "revision": "c536df25cef60a734544bbbc730c0f98"
  },
  {
    "url": "assets/js/85.2409957e.js",
    "revision": "ef6fe194ecc747e22010785872323955"
  },
  {
    "url": "assets/js/86.86ada0b0.js",
    "revision": "b11f8691e62ef504f2024d9c15c89ebb"
  },
  {
    "url": "assets/js/87.2315d550.js",
    "revision": "697b66f0bb7f23e53ebaed80bcfa8c2d"
  },
  {
    "url": "assets/js/88.df45bf3b.js",
    "revision": "5f3d72bc130d49abb5ac764d5dd0cac0"
  },
  {
    "url": "assets/js/89.c352b3f8.js",
    "revision": "d6c2d2880af2538f556c95f1203c74ed"
  },
  {
    "url": "assets/js/9.ae7f2b99.js",
    "revision": "5425b38b6408dfbec9060ee7ded83830"
  },
  {
    "url": "assets/js/90.b6950466.js",
    "revision": "dbbca41fbdb5e6a008bf7631c25e6559"
  },
  {
    "url": "assets/js/app.6b9674d5.js",
    "revision": "94a3c7aa180f41a2abaddfdb0a1101a9"
  },
  {
    "url": "index.html",
    "revision": "e582467b70466ce9cd2c41d465508059"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
