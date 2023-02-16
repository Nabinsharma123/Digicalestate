<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import nhost from "../../nhostConfig";
    import gql from "graphql-tag";
    import { Heading, P, Button, Spinner, Img } from "flowbite-svelte";

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
                Flat(
                    where: {
                        _or: [
                            { City: { name: { _ilike: "${searchLocation}" } } }
                            { District: { name: { _ilike: "${searchLocation}" } } }
                        ]
                    }
                ) {
                    id
                    BHK
                    address
                    mainImage_id
                    name
                    price
                    status
                    super_area
                }
            }
        `;

        var res = await nhost.graphql.request(query);

        res.data.Flat.map((e) => {
            results = [...results, e];
        });

        isSearchLoading = false;
        return results;
    }
</script>

<div>
    <h1 class="text-xl mt-5">
        Search results for Plots in <strong>"{searchLocation}"</strong>
    </h1>

    <div class="mt-8 -mx-3 sm:-mx-0  ">
        {#if isSearchLoading}
            <div class="h-[400px] w-full flex justify-center items-center">
                <div class="text-center"><Spinner size={10} /></div>
            </div>
        {:else}
            {#if !isSearchLoading && results.length == 0}
                <div class="w-full h-[100px] items-center flex justify-center">
                    <h1 class="font-semibold text-2xl">☹ No result found</h1>
                </div>
            {/if}

            <div class=" w-full ">
                {#each results as result}
                    <!--  -->
                    <a class="w-fit" href={`/property/Flat?id=${result.id}`}>
                        <div
                            class="boxShadowElement border border-[#d7d7d7]  rounded-lg flex flex-col sm:flex-row  sm:w-[600px] h-[200px] md:w-[700px] md:h-[200px] lg:w-[900px] lg-h[250px]"
                        >
                            <div class="flex" style="flex: 3;">
                                <div class=" relative" style="flex:2;">
                                    <img
                                        class="w-full h-[150px] sm:h-full object-cover rounded-md"
                                        src={`https://iiteddaobnfvbttwwwgi.nhost.run/v1/storage/files/${result.mainImage_id}?w=400`}
                                        alt=""
                                    />
                                    <div
                                        class="absolute bottom-0 text-white bg-slate-600/70 w-full text-sm text-center"
                                    >
                                        {result.name || ""}
                                    </div>
                                </div>

                                <div class="p-4" style="flex:3;">
                                    <Heading
                                        customSize="text-sm sm:text-lg "
                                        class=" font-semibold"
                                    >
                                        {result.address}
                                    </Heading>

                                    <div
                                        class="mt-2 grid gap-2 sm:gap-3"
                                        style="grid-template-columns: repeat(auto-fit,minmax(50px,1fr));"
                                    >
                                        <div>
                                            <Heading
                                                customSize="text-xs sm:text-base"
                                                color=" text-gray-600"
                                            >
                                                BHK
                                            </Heading>
                                            <h1 class="text-xs sm:text-sm">
                                                {result.BHK}
                                            </h1>
                                        </div>
                                        <div>
                                            <Heading
                                                customSize="text-xs sm:text-base"
                                                color=" text-gray-600"
                                            >
                                                Super_area
                                            </Heading>
                                            <h1 class="text-xs sm:text-sm">
                                                {result.super_area || "--"}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class=" flex sm:flex-col p-2  justify-around items-center bg-neutral-200 "
                                style="flex: 1;"
                            >
                                <h1 class="text-md sm:text-lg  font-semibold">
                                    ₹{result.price || ""}
                                </h1>

                                <Button gradient color="blue"
                                    >Contact Dealer</Button
                                >
                            </div>
                        </div>
                    </a>
                    <!--  -->
                    <!-- <a class="w-fit" href={`/property/Flat?id=${result.id}`}>
                        <div
                            class=" sm:w-[600px] h-[150px] md:w-[700px] md:h-[200px] lg:w-[900px] lg-h[250px] gap-2 sm:gap-3 cursor-pointer boxShadowElement flex mb-3 sm:p-1 md:p-3 border border-[#d7d7d7]  rounded-lg "
                        >
                            <div
                                class="relative w-full flex-shrink-0 flex-[2] rounded-md "
                            >
                                
                                <img
                                    class="w-full h-full object-cover rounded-md"
                                    src={`https://iiteddaobnfvbttwwwgi.nhost.run/v1/storage/files/${result.mainImage_id}?w=400`}
                                    alt=""
                                />

                                <div
                                    class="absolute bottom-0 text-white bg-slate-600/70 w-full text-sm text-center"
                                >
                                    {result.name || ""}
                                </div>
                            </div>

                            <div class=" flex-[3]   p-2">
                                <Heading
                                    customSize="text-sm sm:text-lg "
                                    class=" font-semibold"
                                >
                                    {result.address}
                                </Heading>

                                <div
                                    class="mt-2 grid gap-2 sm:gap-3"
                                    style="grid-template-columns: repeat(auto-fit,minmax(50px,1fr));"
                                >
                                    <div>
                                        <Heading
                                            customSize="text-xs sm:text-base"
                                            color=" text-gray-600"
                                        >
                                            BHK
                                        </Heading>
                                        <h1 class="text-xs sm:text-sm">
                                            {result.BHK}
                                        </h1>
                                    </div>
                                    <div>
                                        <Heading
                                            customSize="text-xs sm:text-base"
                                            color=" text-gray-600"
                                        >
                                            Super_area
                                        </Heading>
                                        <h1 class="text-xs sm:text-sm">
                                            {result.super_area || "--"}
                                        </h1>
                                    </div>
                                </div>
                            </div>

                            <div
                                class="flex-[2] p-3  text-sm sm:text-md flex flex-col justify-between items-center sm:rounded-md bg-neutral-200 "
                            >
                                <h1 class="text-md sm:text-lg  font-semibold">
                                    ₹{result.price || ""}
                                </h1>

                                <Button gradient color="blue"
                                    >Contact Dealer</Button
                                >
                            </div>
                        </div>
                    </a> -->
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
