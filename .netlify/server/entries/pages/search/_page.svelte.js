import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape, f as each } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".boxShadowElement.svelte-1wwsznj{transition:0.3s ease;box-shadow:0 1px 2px 0 rgb(0 0 0 / 24%), 0 1px 4px 0 rgb(0 0 0 / 12%)}.boxShadowElement.svelte-1wwsznj:hover{border:1px solid transparent;box-shadow:0 8px 20px 0 rgb(0 0 0 / 10%), 0 2px 8px 0 rgb(0 0 0 / 12%)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  var searchInput;
  var propertyDiscription = [];
  var searchLocation = $page.url.searchParams.get("location");
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div><div class="${"flex justify-center"}"><div class="${"border border-[#d7d7d7] flex items-center h-fit w-fit mt-4 rounded-lg p-2 "}"><label for="${"search"}"><img class="${"h-6 w-6 mr-2"}" src="${"/location.svg"}" alt="${""}"></label>
            <input id="${"search"}" class="${"text-xl w-[400px] p-2 outline-none"}" type="${"text"}" placeholder="${"Search Location"}"${add_attribute("value", searchInput, 0)}>
            <a${add_attribute("href", "", 0)}><button class="${"bg-blue-500 flex items-center py-2 px-3 text-white text-lg rounded-md"}"><img class="${"mr-2"}" src="${"/search.svg"}" alt="${""}"> Search</button></a></div></div>
    <h1 class="${"text-2xl mt-5"}">Search results for <strong>&quot;${escape(searchLocation)}&quot;</strong></h1>

    <div class="${"mt-8 flex"}"><div class="${"flex-[3]"}">${each([1, 2, 3, 4], (id) => {
    return `<a href="${"/123"}"><div class="${"cursor-pointer boxShadowElement flex gap-4 mb-3 p-3 border border-[#d7d7d7] rounded-lg  svelte-1wwsznj"}"><div class="${"h-60 w-60 rounded-md flex-[2]"}"${add_attribute(
      "style",
      `background-image: url("./images${id}.jpg");
                          background-position: center;
                         background-repeat: no-repeat;
                         background-size: cover;
                        `,
      0
    )}></div>
                        <div class="${"flex flex-[5] w-full"}"><div class="${"flex-[3]"}"><h1 class="${"text-xl font-semibold"}">Joyville Western Heights
                                </h1>
                                <div class="${"grid grid-cols-3 mt-2 gap-y-4"}"><div><h1 class="${"text-[#606060]"}">Configuration
                                        </h1>
                                        <h2>3 BHK</h2></div>
                                    <div><h1 class="${"text-[#606060]"}">Bathroom</h1>
                                        <h2>1</h2></div>
                                    <div><h1 class="${"text-[#606060]"}">kitchen</h1>
                                        <h2>1</h2></div>
                                    <div><h1 class="${"text-[#606060]"}">Furnishing
                                        </h1>
                                        <h2>Unfurnished</h2></div>
                                    <div><h1 class="${"text-[#606060]"}">Status</h1>
                                        <h2>Ready to move</h2>
                                    </div></div>
                                <p class="${"mt-2 text-[#606060]"}"${add_attribute("this", propertyDiscription[id], 0)}>Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Tempore, minima dolorem
                                    consequatur labore architecto at quaerat
                                    saepe voluptas veniam, atque tempora ad
                                    magni repellendus nostrum ea eum, laboriosam
                                    quas a.
                                </p></div>
                            <div class="${"flex-1 flex flex-col items-center rounded-md bg-neutral-200 "}"><h1 class="${"mt-3 text-lg font-semibold"}">₹39 Lac
                                </h1>
                                <button class="${"bg-blue-500 mt-3 p-2 rounded-lg border-2 text-white border-blue-500 font-semibold hover:text-blue-500 hover:bg-white"}">Contact Dealer</button></div>
                        </div></div>
                </a>`;
  })}</div>
        <div class="${"flex-1"}"></div></div>
</div>`;
});
export {
  Page as default
};
