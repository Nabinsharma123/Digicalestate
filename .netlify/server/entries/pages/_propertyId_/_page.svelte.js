import { c as create_ssr_component, d as add_attribute, e as escape, o as each } from "../../../chunks/index2.js";
import { n as nhost } from "../../../chunks/nhostConfig.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  var propertyData = data.post;
  var scrollerMenu = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${""}"><div class="${"flex gap-5 p-5 rounded-lg border border-[#d7d7d7]"}"><div class="${"flex-1 "}"><div class="${"w-96 h-96 rounded-md"}"${add_attribute(
    "style",
    `background-image: url('${nhost.storage.getPublicUrl({ fileId: propertyData.mainImage_id })}');
              background-position: center;
             background-repeat: no-repeat;
             background-size: cover;
            `,
    0
  )}></div></div>
        <div class="${"flex flex-[2] w-full"}"><div class="${"flex-[3]"}"><h1 class="${"text-3xl font-semibold"}">${escape(propertyData.name)}</h1>
                <div class="${"grid grid-cols-3 mt-2 gap-y-4"}"><div><h1 class="${"text-[#606060]"}">Configuration</h1>
                        <h2>3 BHK</h2></div>
                    <div><h1 class="${"text-[#606060]"}">Bathroom</h1>
                        <h2>1</h2></div>
                    <div><h1 class="${"text-[#606060]"}">kitchen</h1>
                        <h2>1</h2></div>
                    <div><h1 class="${"text-[#606060]"}">Furnishing</h1>
                        <h2>Unfurnished</h2></div>
                    <div><h1 class="${"text-[#606060]"}">Status</h1>
                        ${propertyData.status ? `<h2>Ready to move</h2>` : `<h2>Solded</h2>`}</div></div>
                <p class="${"mt-2 text-[#606060]"}">${escape(propertyData.discription)}</p></div>
            <div class="${"flex-1 p-5 flex flex-col items-center justify-between rounded-md bg-neutral-200 "}"><h1 class="${"text-2xl font-semibold"}">₹${escape(propertyData.price)}</h1>
                <button class="${"bg-blue-500 mt-3 p-2 rounded-lg border-2 text-white border-blue-500 font-semibold hover:text-blue-500 hover:bg-white"}">Contact Dealer</button></div></div></div>

    <div class="${"mb-10 mt-10"}"><h1 class="${"text-blue-500 mb-1 font-semibold text-4xl"}">Images</h1>
        <div class="${"h-1 w-16 rounded-full bg-orange-400"}"></div></div>

    <div class="${"relative"}"><div style="${"scroll-behavior: smooth;"}" class="${"mt-8 overflow-scroll "}"${add_attribute("this", scrollerMenu[0], 0)}><button class="${"absolute z-20 top-1/2 rounded-md bg-white -right-5"}"><img class="${"h-10"}" src="${"/RightArrow.svg"}" alt="${""}"></button>
            <button class="${"absolute z-20 top-1/2 rotate-180 rounded-md bg-white -left-5"}"><img class="${"h-10"}" src="${"/RightArrow.svg"}" alt="${""}"></button>
            <div class="${"flex w-fit gap-5"}">${each(propertyData.images_id, (id) => {
    return `<img class="${"image rounded-md h-[300px]"}"${add_attribute("src", `${nhost.storage.getPublicUrl({ fileId: id })}`, 0)} alt="${""}">`;
  })}</div></div></div>
</div>`;
});
export {
  Page as default
};
