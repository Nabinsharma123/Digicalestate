<script>
    // @ts-nocheck
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    var searchInput;
    var propertyDiscription = [];
    var searchLocation = $page.url.searchParams.get("location");
    onMount(() => {
        propertyDiscription.map((Discription) => {
            if (Discription.innerHTML.length > 300) {
                Discription.innerHTML =
                    Discription.innerHTML.slice(0, 300) + "...";
            }
        });
    });
</script>

<div>
    <div class="flex justify-center">
        <div
            class=" border border-[#d7d7d7]  flex items-center h-fit w-fit mt-4 rounded-lg p-2 "
        >
            <label for="search">
                <img class="h-6 w-6 mr-2" src="/location.svg" alt="" />
            </label>
            <input
                bind:value={searchInput}
                id="search"
                class="text-xl w-[400px] p-2 outline-none"
                type="text"
                placeholder="Search Location"
            />
            <a href={searchInput ? `/search?location=${searchInput}` : ""}>
                <button
                    class="bg-blue-500 flex items-center py-2 px-3 text-white text-lg rounded-md"
                >
                    <img class="mr-2" src="/search.svg" alt="" /> Search</button
                >
            </a>
        </div>
    </div>
    <h1 class="text-2xl mt-5">
        Search results for <strong>"{searchLocation}"</strong>
    </h1>

    <div class="mt-8 flex">
        <div class="flex-[3]">
            {#each [1, 2, 3, 4] as id}
                <div
                    class=" cursor-pointer boxShadowElement flex gap-4 mb-3 p-3 border border-[#d7d7d7]  rounded-lg "
                >
                    <div
                        class="h-60 w-60 rounded-md flex-[2]"
                        style={`background-image: url("./images${id}.jpg");
                          background-position: center;
                         background-repeat: no-repeat;
                         background-size: cover;
                        `}
                    />
                    <div class="  flex flex-[5] w-full">
                        <div class="flex-[3]">
                            <h1 class="text-xl font-semibold">
                                Joyville Western Heights
                            </h1>
                            <div class="grid grid-cols-3 mt-2 gap-y-4">
                                <div>
                                    <h1 class="text-[#606060]">
                                        Configuration
                                    </h1>
                                    <h2>3 BHK</h2>
                                </div>
                                <div>
                                    <h1 class="text-[#606060]">Bathroom</h1>
                                    <h2>1</h2>
                                </div>
                                <div>
                                    <h1 class="text-[#606060]">kitchen</h1>
                                    <h2>1</h2>
                                </div>
                                <div>
                                    <h1 class="text-[#606060]">Furnishing</h1>
                                    <h2>Unfurnished</h2>
                                </div>
                                <div>
                                    <h1 class="text-[#606060]">Status</h1>
                                    <h2>Ready to move</h2>
                                </div>
                            </div>
                            <p
                                bind:this={propertyDiscription[id]}
                                class="mt-2 text-[#606060]"
                            >
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Tempore, minima dolorem
                                consequatur labore architecto at quaerat saepe
                                voluptas veniam, atque tempora ad magni
                                repellendus nostrum ea eum, laboriosam quas a.
                            </p>
                        </div>
                        <div
                            class="flex-1 flex flex-col items-center rounded-md bg-neutral-200 "
                        >
                            <h1 class="mt-3  text-lg font-semibold">₹39 Lac</h1>
                            <button
                                class="bg-blue-500 mt-3  p-2 rounded-lg border-2 text-white
                                 border-blue-500 font-semibold hover:text-blue-500 hover:bg-white"
                                >Contact Dealer</button
                            >
                        </div>
                    </div>
                </div>
            {/each}
        </div>
        <div class="flex-1" />
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
