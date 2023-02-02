<script>
    // @ts-nocheck
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import nhost from "../../nhostConfig";
    import { gql } from "@apollo/client/core";

    var propertyDiscription = [];
    var results = [];
    var isSearchLoading;
    var searchLocation = $page.url.searchParams.get("location");

    $: if ($page.url.searchParams.get("location")) {
        onSearch().then(() => {
            DiscriptionShorter();
        });
    }

    function DiscriptionShorter() {
        propertyDiscription.map((Discription) => {
            if (Discription.innerHTML.length > 100) {
                Discription.innerHTML =
                    Discription.innerHTML.slice(0, 100) + "...";
            }
        });
    }

    async function onSearch() {
        isSearchLoading = true;
        results = [];
        searchLocation = $page.url.searchParams.get("location");
        var query = gql`
            query MyQuery {
                District(where: {name: {_ilike: ""}}) {
                        Plot {
                            id
                            name
                            plot_area
                            price
                            address
                        }
                    }

                City(where: {name: {_ilike: "${searchLocation}"}}) {
                     Plot {
                            id
                            name
                            plot_area
                            price
                            address
                     }
                     }
            }
        `;

        var res = await nhost.graphql.request(query);

        if (res.data.City.length != 0) {
            res.data.City[0].Plot.map((e) => {
                results = [...results, e];
            });
        }
        if (res.data.District.length != 0) {
            res.data.District[0].Plot.map((e) => {
                results = [...results, e];
            });
        }

        isSearchLoading = false;
        return results;
    }
</script>

<div>
    <h1 class="text-xl mt-5">
        Search results for Plots in <strong>"{searchLocation}"</strong>
    </h1>

    <div class="mt-8 -mx-3 sm:-mx-0 flex ">
        {#if isSearchLoading}
            <div class="h-[400px] w-full flex justify-center items-center">
                <img class="h-14" src="/loading.svg" alt="" />
            </div>
        {:else}
            {#if !isSearchLoading && results.length == 0}
                <div class="w-full h-[100px] items-center flex justify-center">
                    <h1 class="font-semibold text-2xl">☹ No result found</h1>
                </div>
            {/if}

            <div class=" w-full">
                {#each results as result}
                    <a href={`/${result.id}`}>
                        <div
                            class=" gap-3 cursor-pointer boxShadowElement flex mb-3 p-3 border border-[#d7d7d7]  rounded-lg "
                        >
                            <div class="relative flex-[2] rounded-md ">
                                <!-- https://iiteddaobnfvbttwwwgi.nhost.run/v1/storage/files/${result.mainImage_id}?w=400 -->
                                <img
                                    class="w-full h-28 object-cover rounded-md"
                                    src={`/images2.jpg`}
                                    alt=""
                                />
                                <div
                                    class="absolute bottom-0 text-white bg-slate-600/70 w-full text-sm text-center"
                                >
                                    {result.name}
                                </div>
                            </div>

                            <div class="flex-[3]">
                                <h1 class="  text-lg font-semibold">
                                    ₹{result.price}
                                </h1>

                                <h1 class="text-sm text-gray-600">
                                    {result.address}
                                </h1>

                                <div class="mt-2">
                                    <h1 class="text-sm text-gray-600">
                                        Plot Area
                                    </h1>
                                    <h1 class="text-sm">
                                        {result.plot_area}
                                    </h1>
                                </div>
                            </div>

                            <!-- <div
                                class="flex-1 p-3 flex flex-col justify-between items-center rounded-md bg-neutral-200 "
                            >
                                <h1 class="  text-lg font-semibold">
                                    ₹{result.price}
                                </h1>
                                <button
                                    class="bg-blue-500   p-2 rounded-lg border-2 text-white
                                 border-blue-500 font-semibold hover:text-blue-500 hover:bg-white"
                                    >Contact Dealer</button
                                >
                            </div> -->
                        </div>
                    </a>
                {/each}
            </div>
        {/if}
    </div>
</div>

<style>
    .boxShadowElement {
        transition: 0.3s ease;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 24%), 0 1px 4px 0 rgb(0 0 0 / 12%);
    }
    .boxShadowElement:hover {
        border: 1px solid transparent;
        box-shadow: 0 8px 20px 0 rgb(0 0 0 / 10%), 0 2px 8px 0 rgb(0 0 0 / 12%);
    }
</style>
