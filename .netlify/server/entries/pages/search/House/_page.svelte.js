import { c as create_ssr_component, b as subscribe, e as escape, o as each, d as add_attribute } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/stores.js";
import { n as nhost } from "../../../../chunks/nhostConfig.js";
import gql from "graphql-tag";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".boxShadowElement.svelte-1wwsznj{transition:0.3s ease;box-shadow:0 1px 2px 0 rgb(0 0 0 / 24%), 0 1px 4px 0 rgb(0 0 0 / 12%)}.boxShadowElement.svelte-1wwsznj:hover{border:1px solid transparent;box-shadow:0 8px 20px 0 rgb(0 0 0 / 10%), 0 2px 8px 0 rgb(0 0 0 / 12%)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  var propertyDiscription = [];
  var results = [];
  var isSearchLoading;
  var searchLocation = $page.url.searchParams.get("location");
  function DiscriptionShorter() {
    propertyDiscription.map((Discription) => {
      if (Discription.innerHTML.length > 100) {
        Discription.innerHTML = Discription.innerHTML.slice(0, 100) + "...";
      }
    });
  }
  async function onSearch() {
    isSearchLoading = true;
    results = [];
    searchLocation = $page.url.searchParams.get("location");
    var query = gql`
            query MyQuery {
                District(where: { name: { _eq: "${searchLocation}" } }) {
                    Estate {
                        name
                        price
                        status
                        mainImage_id
                       
                        id
                        discription
                    }
                }
                City(where: { name: { _eq: "${searchLocation}" } }) {
                    Estate {
                        name
                        price
                        status
                        mainImage_id
                     
                        id
                        discription
                    }
                }
            }
        `;
    var res = await nhost.graphql.request(query);
    if (res.data.City.length != 0) {
      res.data.City[0].Estate.map((e) => {
        results = [...results, e];
      });
    }
    if (res.data.District.length != 0) {
      res.data.District[0].Estate.map((e) => {
        results = [...results, e];
      });
    }
    isSearchLoading = false;
    return results;
  }
  $$result.css.add(css);
  {
    if ($page.url.searchParams.get("location")) {
      onSearch().then(() => {
        DiscriptionShorter();
      });
    }
  }
  $$unsubscribe_page();
  return `<div><h1 class="${"text-2xl mt-5"}">Search results for <strong>&quot;${escape(searchLocation)}&quot;</strong></h1>

    <div class="${"mt-8 flex justify-center"}">${isSearchLoading ? `<div class="${"h-[400px] w-full flex justify-center items-center"}"><img class="${"h-14"}" src="${"/loading.svg"}" alt="${""}"></div>` : `${!isSearchLoading && results.length == 0 ? `<div class="${"w-full h-[100px] items-center flex justify-center"}"><h1 class="${"font-semibold text-2xl"}">☹ No result found</h1></div>` : ``}

            <div class="${"w-full "}">${each(results, (result) => {
    return `<a${add_attribute("href", `/${result.id}`, 0)}><div class="${"gap-3 cursor-pointer boxShadowElement flex mb-3 p-3 border border-[#d7d7d7] rounded-lg  svelte-1wwsznj"}"><div class="${"flex-1 rounded-md "}">
                                <img class="${"h-28 w-28 object-cover rounded-md"}"${add_attribute("src", `/images2.jpg`, 0)} alt="${""}">
                                <h2 class="${"text-sm text-center"}">${escape(result.name)}
                                </h2></div>

                            <div class="${"flex-[2]"}"><h1 class="${"text-lg font-semibold"}">₹${escape(result.price)}</h1>

                                <h2 class="${"text-sm text-gray-600"}">Plot/Land for Sale in Action Area 3,
                                    Rajarhat Newtown
                                </h2>

                                <div><h1>Plot Area</h1></div>

                                </div>

                            </div>
                    </a>`;
  })}</div>`}</div>
</div>`;
});
export {
  Page as default
};
