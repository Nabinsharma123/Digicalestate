import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape, f as compute_rest_props, g as spread, h as escape_attribute_value, i as escape_object, j as createEventDispatcher, v as validate_component, k as set_store_value } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const app$1 = "";
var authStatus = writable(false);
var userAuthData = writable();
const firebaseConfig = {
  apiKey: "AIzaSyDrI4C5pgg7qylW1bZDY-n8aQ712iWcynA",
  authDomain: "digicalestate.firebaseapp.com",
  projectId: "digicalestate",
  storageBucket: "digicalestate.appspot.com",
  messagingSenderId: "163845315513",
  appId: "1:163845315513:web:f6b9126278788af722f468",
  measurementId: "G-8GZXHYFFDD"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
getFirestore(app);
getStorage(app);
const Navbar_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-p29c9i{box-shadow:0 1px 2px 0 rgb(0 0 0 / 24%), 0 1px 4px 0 rgb(0 0 0 / 12%)}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStatus, $$unsubscribe_authStatus;
  let $userAuthData, $$unsubscribe_userAuthData;
  $$unsubscribe_authStatus = subscribe(authStatus, (value) => $authStatus = value);
  $$unsubscribe_userAuthData = subscribe(userAuthData, (value) => $userAuthData = value);
  $$result.css.add(css);
  $$unsubscribe_authStatus();
  $$unsubscribe_userAuthData();
  return `<nav class="${"fixed flex justify-between items-center z-30 bg-white border-b border-gray-400 w-full top-0 left-0 py-1 px-3 sm:px-10 lg:px-20 svelte-p29c9i"}"><a href="${"/"}"><img class="${"rounded-md h-7 sm:h-10"}" src="${"/Navlogo.png"}" alt="${""}"></a>
    ${$authStatus ? `<div class="${"flex items-center gap-2"}"><img class="${"h-9 rounded-full border border-gray-700"}"${add_attribute("src", `https://avatars.dicebear.com/api/micah/${$userAuthData.phoneNumber}.svg`, 0)} alt="${""}">
            <h1 class="${"font-semibold"}">${escape($userAuthData.phoneNumber)}</h1>
            <button class="${"border-2 border-black font-semibold rounded-md p-1"}">SignOut</button></div>` : ``}
</nav>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"mt-12"}"><div class="${"-mx-20 -mb-1 hidden sm:block"}"><img class="${"w-full "}" src="${"/waveFooter.svg"}" alt="${""}"></div></div>

<footer class="${"relative -mx-3 sm:-mx-20 bg-gray-900 flex flex-col sm:flex-row justify-between items-center h-[250px] sm:h-[300px]"}"><div class="${"sm:mx-20 flex flex-1 gap-2 items-center"}"><div class="${"bg-white p-2 rounded-md"}"><img class="${"h-6 sm:h-10 "}" src="${"/Navlogo.png"}" alt="${""}"></div></div>
    <div class="${"text-white flex gap-4 justify-evenly flex-1"}"><div><h1 class="${"text-violet-600 text-xl font-semibold mb-5"}">Follow Us
            </h1>
            <ul><li>Facebook</li>
                <li>Instagram</li>
                <li>Linkdin</li></ul></div>
        <div><h1 class="${"text-violet-600 text-xl font-semibold mb-5"}">Support</h1>
            <ul><li>Contact</li>
                <li>FAQ</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li></ul></div></div></footer>`;
});
const Close = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="${"M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"}"></path></svg>`;
});
const WelcomePopUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  var phoneNumber = "";
  var errorMessage = "";
  return `<div class="${"fixed flex justify-center items-end sm:items-center h-screen w-screen z-50 top-0 left-0"}" style="${"background-color: rgba(0, 0, 0, 0.5);"}"><div class="${"relative bg-white p-4 w-screen h-[450px] sm:h-[400px] sm:w-[600px] rounded-md"}"><button class="${"absolute flex justify-center items-center bg-white top-2 sm:-top-4 right-2 sm:-right-4 h-10 w-10 rounded-full border-2 border-gray-800"}">${validate_component(Close, "Close").$$render($$result, { size: 32 }, {}, {})}</button>
        <div class="${"flex mt-6 sm:mt-0 gap-8 flex-col items-center"}"><h1 class="${"text-3xl font-mono font-semibold"}">Welcome to Digicalestate
            </h1>
            <div class="${"text-7xl"}">🙏🏻</div></div>

        <div class="${"flex gap-3 flex-col mt-14 items-center w-full "}">${`<label class="${"font-semibold text-xl"}" for="${"phone"}">Please enter your phone number</label>

                <div class="${"flex items-center gap-3"}"><div class="${"flex gap-1 font-semibold text-lg border-2 rounded-md p-2 border-gray-700"}"><h1 class="${"flex pr-1 items-center border-r border-gray-600"}">+91
                        </h1>

                        <input class="${"focus:outline-none w-36"}" type="${"text"}" id="${"phone"}" maxlength="${"10"}" oninput="${"this.value = this.value.replace(/[^0-9]/g, '').replace(/(\\..*)\\./g, '$1');"}"${add_attribute("value", phoneNumber, 0)}></div>
                    <button ${phoneNumber.length != 10 ? "disabled" : ""} class="${"disabled:opacity-50 transition-transform bg-blue-600 rounded-md text-lg font-semibold text-white px-3 py-2"}">Verify</button></div>`}
            <h1 class="${"text-red-500"}">${escape(errorMessage)}</h1></div>
        <div id="${"recaptcha-container"}"></div></div>
</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStatus, $$unsubscribe_authStatus;
  let $userAuthData, $$unsubscribe_userAuthData;
  $$unsubscribe_authStatus = subscribe(authStatus, (value) => $authStatus = value);
  $$unsubscribe_userAuthData = subscribe(userAuthData, (value) => $userAuthData = value);
  var welcomePopUp = false;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      set_store_value(authStatus, $authStatus = true, $authStatus);
      set_store_value(userAuthData, $userAuthData = user, $userAuthData);
    } else {
      set_store_value(authStatus, $authStatus = false, $authStatus);
      welcomePopUp = true;
    }
  });
  $$unsubscribe_authStatus();
  $$unsubscribe_userAuthData();
  return `${welcomePopUp ? `${validate_component(WelcomePopUp, "WelcomePopUp").$$render($$result, {}, {}, {})}` : ``}
<div class="${"mt-11 mx-3 sm:mx-10 lg:mx-20"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
    ${slots.default ? slots.default({}) : ``}
    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
