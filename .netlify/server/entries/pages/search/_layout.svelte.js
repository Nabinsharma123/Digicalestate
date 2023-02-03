import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { S as Search } from "../../../chunks/Search.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"mt-16"}"><div class="${"flex w-full justify-center"}"><div class="${"w-full max-w-[600px]"}">${validate_component(Search, "Search").$$render($$result, {}, {}, {})}</div></div>
    ${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
