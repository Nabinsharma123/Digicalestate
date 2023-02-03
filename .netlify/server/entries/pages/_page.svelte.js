import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
import { S as Search } from "../../chunks/Search.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.home-center.svelte-1pgsci9{background-image:url("/home7.jpg");background-position:70%;background-repeat:no-repeat;background-size:cover}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `
<div class="${"sm:hidden mt-20 mb-10"}"><div class="${""}"><h1 class="${"text-4xl font-semibold text-center text-gray-700 mt-3"}">Discover Most <span class="${"text-blue-500"}">Suitable</span> Property
        </h1>
        <p class="${"mt-5 text-slate-400 font-semibold"}">Find a variety of properties that suit you very easily. forgot all
            difficulties in finding a residence for you.
        </p></div></div>



<div class="${"relative home-center flex justify-center items-center sm:block rounded-lg sm:rounded-none p-5 sm:p-20 sm:-mx-20 h-[350px] sm:h-[600px]  svelte-1pgsci9"}"><div class="${"w-[400px] sm:w-[600px] "}"><div class="${"hidden mb-6 sm:block w-[370px]"}"><h1 class="${"text-white text-6xl mt-3"}">Discover Most <span class="${"text-blue-500"}">Suitable</span> Property
            </h1>
            <p class="${"mt-5 text-slate-400 font-semibold"}">Find a variety of properties that suit you very easily. forgot
                all difficulties in finding a residence for you.
            </p></div>
        ${validate_component(Search, "Search").$$render($$result, {}, {}, {})}</div>
    <div class="${"-mx-20 hidden sm:block left-0 right-0"}"><img class="${"w-full"}" src="${"/wave.svg"}" alt="${""}"></div></div>


<div class="${"relative mt-10"}"><div class="${"flex gap-5 justify-between items-center"}"><div class="${"relative hidden sm:flex flex-1 justify-center"}"><img class="${"absolute rounded-md top-0 left-14 "}" src="${"/whatIsDigicalestate3.jpg"}" alt="${""}">
            <img class="${"my-10 rounded-md h-[500px] z-10"}" src="${"/whatIsDigicalestate2.jpg"}" alt="${""}">
            <img class="${"absolute rounded-md z-10 bottom-0 right-10 h-[200px]"}" src="${"/whatIsDigicalestate.jpg"}" alt="${""}"></div>
        <div class="${"flex-1 flex flex-col "}"><h1 class="${"mt-10 mb-5 text-center text-blue-500 text-4xl font-semibold"}">What is Digicalestate?
            </h1>
            <p class="${"font-semibold text-center text-lg"}">Our website is dedicated to helping you find your dream home,
                whether you&#39;re a first-time buyer, seasoned investor, or anyone
                in between. We understand that the process of buying or selling
                a home can be overwhelming, which is why we&#39;ve created a
                one-stop-shop for all your real estate needs.
            </p></div></div>
    
    <div class="${"flex flex-col mt-36 items-center"}"><h1 class="${"text-4xl text-blue-500 font-semibold"}">Why choose Us?</h1>
        <div class="${"w-full grid gap-4 mt-5"}" style="${"grid-template-columns:repeat(auto-fit,minmax(230px,1fr)) ;"}"><div class="${"relative flex-1 rounded-lg p-2 border border-black"}"><div class="${"w-fit mb-2 rounded-full "}"><img class="${"h-8 "}" src="${"/whyus1.svg"}" alt="${""}"></div>

                <h1 class="${"text-lg font-semibold"}">Wide selection of properties
                </h1>
                <p>We have a diverse range of properties available, so you&#39;re
                    sure to find something that fits your needs and budget.
                </p></div>
            <div class="${"relative flex-1 h-[200px] rounded-lg p-2 border border-black"}"><div class="${"w-fit rounded-full "}"><img class="${"h-10 "}" src="${"/whyus2.svg"}" alt="${""}"></div>
                <h1 class="${"text-lg font-semibold"}">Expert team</h1>
                <p>Our team of real estate professionals has years of
                    experience and expertise, so you can trust that you&#39;re in
                    good hands.
                </p></div>
            <div class="${"relative flex-1 h-[200px] rounded-lg p-2 border border-black"}"><div class="${"w-fit rounded-full "}"><img class="${"h-10 "}" src="${"/whyus3.svg"}" alt="${""}"></div>
                <h1 class="${"text-lg font-semibold"}">Convenient resources</h1>
                <p>We offer a range of resources and tools to make the process
                    of buying or selling a home as easy as possible.
                </p></div>
            <div class="${"relative flex-1 h-[200px] rounded-lg p-2 border border-black"}"><div class="${"w-fit rounded-full "}"><img class="${"h-10 "}" src="${"/whyus4.svg"}" alt="${""}"></div>
                <h1 class="${"text-lg font-semibold"}">Exceptional customer service
                </h1>
                <p>We prioritize customer satisfaction and are dedicated to
                    providing you with the best possible experience.
                </p></div></div></div>
    

    
    
</div>`;
});
export {
  Page as default
};
