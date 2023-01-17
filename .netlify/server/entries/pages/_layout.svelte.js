import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const app = "";
const Navbar_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-p29c9i{box-shadow:0 1px 2px 0 rgb(0 0 0 / 24%), 0 1px 4px 0 rgb(0 0 0 / 12%)}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="${"fixed flex items-center z-30 bg-white border-b border-gray-400 w-full top-0 left-0 py-1 px-20 svelte-p29c9i"}"><a href="${"/"}"><img class="${"rounded-md h-10"}" src="${"/Navlogo.png"}" alt="${""}"></a>
</nav>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"relative mt-44 bg-gray-900 flex justify-between items-center h-[300px]"}"><img class="${"absolute w-full right-0 -top-[170px] left-0 "}" src="${"/waveFooter.svg"}" alt="${""}">
    <div class="${"mx-20 flex flex-1 gap-2 items-center"}"><div class="${"bg-white p-2 rounded-md"}"><img class="${"h-10 "}" src="${"/Navlogo.png"}" alt="${""}"></div></div>
    <div class="${"text-white flex justify-evenly flex-1"}"><div><h1 class="${"text-violet-600 text-xl font-semibold mb-5"}">Follow Us
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
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
<div class="${"mt-11"}">${slots.default ? slots.default({}) : ``}</div>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}

${``}`;
});
export {
  Layout as default
};
