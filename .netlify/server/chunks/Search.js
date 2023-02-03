import { c as create_ssr_component, j as createEventDispatcher, d as add_attribute } from "./index2.js";
import "./nhostConfig.js";
const Search_svelte_svelte_type_style_lang = "";
const css = {
  code: ".Tab.svelte-1ywi7qn button.svelte-1ywi7qn{padding:0.3rem 0.7rem;border-bottom:1px solid #d7d7d7;background-color:rgb(229 231 235)}",
  map: null
};
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  var searchInput;
  $$result.css.add(css);
  return `<div class="${"Tab bg-white -mb-[1px] rounded-t-md border border-b-0 overflow-auto border-[#d7d7d7] relative text-gray-600 flex w-fit svelte-1ywi7qn"}"><button class="${" svelte-1ywi7qn"}"${add_attribute(
    "style",
    "background-color:#fff;border-bottom:0",
    0
  )}><h1 class="${""}">Flat</h1></button>
    <button class="${" svelte-1ywi7qn"}"${add_attribute(
    "style",
    "",
    0
  )}><h1 class="${""}">House</h1></button>
    <button class="${" svelte-1ywi7qn"}"${add_attribute(
    "style",
    "",
    0
  )}><h1>Plot</h1></button></div>

<div class="${"border border-[#d7d7d7] bg-white flex items-center h-[45px] sm:h-[62px] w-full rounded-lg rounded-tl-none p-1 sm:p-2"}"><label for="${"search"}"><img class="${"h-5 sm:h-6 w-6 mr-2 "}" src="${"/location.svg"}" alt="${""}"></label>
    <div class="${"relative w-full"}"><input class="${"text-xl w-full px-2 py-1 outline-none"}" type="${"text"}" placeholder="${"Search Location"}"${add_attribute("value", searchInput, 0)}>
        ${``}</div>

    <button class="${"bg-blue-500 justify-center h-full flex items-center gap-2 py-2 px-5 text-white text-lg rounded-md"}"><img class="${"h-5"}" src="${"/search.svg"}" alt="${""}">
        <span class="${"hidden sm:block"}">Search</span></button>
</div>`;
});
export {
  Search as S
};
