<script>
    import nhost from "../routes/nhostConfig.js";
    import { goto } from "$app/navigation";
    import { propertyType } from "../routes/store.js";
    import gql from "graphql-tag";
    import { createEventDispatcher } from "svelte";
    import {
        Input,
        InputAddon,
        ButtonGroup,
        Button,
        Chevron,
        Dropdown,
        DropdownItem,
        Checkbox,
        Spinner,
    } from "flowbite-svelte";

    const dispatch = createEventDispatcher();
    var searchInput;

    var myTimeout;
    var isSearchLoading;
    var results = [];

    function onInputChange() {
        if (searchInput != "") {
            var query = gql`query MyQuery {
         District(where: {name: {_ilike: "%${searchInput}%"}}) {
               name
              id
                 } 
         City(where: {name: {_ilike: "%${searchInput}%"}}) {
               name
               id
             }
                }
                `;

            nhost.graphql.request(query).then((res) => {
                results = [];
                if (
                    res.data.City.length == 0 &&
                    res.data.District.length == 0
                ) {
                    results = ["No result found"];
                } else {
                    res.data.City.map((e) => {
                        results = [...results, e.name];
                    });
                    res.data.District.map((e) => {
                        results = [...results, e.name];
                    });
                }
            });
        } else isSearchLoading = false;
    }
</script>

<!-- <div
    class="Tab bg-white -mb-[1px] rounded-t-md border border-b-0 overflow-auto  border-[#d7d7d7] relative  text-gray-600 flex  w-fit"
>
    <button
        on:click={() => {
            $propertyType = "Flat";
        }}
        style={$propertyType == "Flat"
            ? "background-color:#fff;border-bottom:0"
            : ""}
    >
        <h1 class="">Flat</h1>
    </button>
    <button
        on:click={() => {
            $propertyType = "House";
        }}
        style={$propertyType == "House"
            ? "background-color:#fff;border-bottom:0"
            : ""}
    >
        <h1 class="">House</h1>
    </button>
    <button
        on:click={() => {
            $propertyType = "Plot";
        }}
        style={$propertyType == "Plot"
            ? "background-color:#fff;border-bottom:0"
            : ""}
    >
        <h1>Plot</h1>
    </button>
</div> -->

<div class="relative">
    <ButtonGroup class="w-full">
        <Button
            color="none"
            class="flex-shrink-0 text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white hover:bg-gray-200 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
            <Chevron>{$propertyType}</Chevron>
        </Button>
        <Dropdown>
            <DropdownItem on:click={() => ($propertyType = "Flat")}
                >Flat</DropdownItem
            >
            <DropdownItem on:click={() => ($propertyType = "House")}
                >House</DropdownItem
            >
            <DropdownItem on:click={() => ($propertyType = "Plot")}
                >Plot</DropdownItem
            >
        </Dropdown>
        <Input
            class="rounded-r-md"
            bind:value={searchInput}
            id="search"
            placeholder="Search"
            size="lg"
            on:keydown={() => {
                results = [];
                isSearchLoading = true;
                clearTimeout(myTimeout);
            }}
            on:keyup={() => {
                clearTimeout(myTimeout);
                myTimeout = setTimeout(onInputChange, 300);
            }}
        >
            <svg
                slot="left"
                aria-hidden="true"
                class="w-6 h-6 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                /></svg
            >
            <Button
                gradient
                color="blue"
                href={`/search/${$propertyType}?location=${searchInput}`}
                slot="right"
                size="md"
                type="submit">Search</Button
            >
        </Input>
    </ButtonGroup>
    {#if isSearchLoading}
        <div
            class="absolute rounded-md w-full  border border-t-0 border-[#d7d7d7] z-30   px-2  bg-white  rounded-b-md"
        >
            {#if results.length != 0}
                <div class="flex flex-col">
                    {#each results as result}
                        <button
                            on:click={() => {
                                if (results[0] != "No result found") {
                                    searchInput = result;
                                    isSearchLoading = false;
                                }
                            }}
                            class="text-gray-600 text-left rounded-sm hover:bg-slate-200 p-2 border-t cursor-pointer"
                        >
                            {result}
                        </button>
                    {/each}
                </div>
            {:else}
                <div class="h-14 flex justify-center items-center">
                    <div class="text-center"><Spinner /></div>
                </div>
            {/if}
        </div>
    {/if}
</div>

<!-- 

<div
    class="border  border-[#d7d7d7] bg-white flex items-center h-[45px] sm:h-[62px] w-full  rounded-lg rounded-tl-none  p-1 sm:p-2"
>
    <label for="search">
        <img class="h-5 sm:h-6 w-6 mr-4 " src="/location.svg" alt="" />
    </label>
    <div class="relative w-full">
        <input
            bind:value={searchInput}
            class="text-xl w-full pxs-2 py-1 outline-none"
            type="text"
            placeholder="Search Location"
            on:keydown={() => {
                results = [];
                isSearchLoading = true;
                clearTimeout(myTimeout);
            }}
            on:keyup={() => {
                clearTimeout(myTimeout);
                myTimeout = setTimeout(onInputChange, 300);
            }}
        />
        {#if isSearchLoading}
            <div
                class="border border-t-0 border-[#d7d7d7] z-30  absolute p-2 left-0 bg-white w-full rounded-b-md"
            >
                {#if results.length != 0}
                    <div class="flex flex-col">
                        {#each results as result}
                            <button
                                on:click={() => {
                                    if (results[0] != "No result found") {
                                        searchInput = result;
                                        isSearchLoading = false;
                                    }
                                }}
                                class="text-gray-600 text-left rounded-sm hover:bg-slate-200 p-2 border-t cursor-pointer"
                            >
                                {result}
                            </button>
                        {/each}
                    </div>
                {:else}
                    <div class="h-14 flex justify-center items-center">
                        <img class="h-10" src="/loading.svg" alt="" />
                    </div>
                {/if}
            </div>
        {/if}
    </div>

    <button
        on:click={() => {
            goto(`/search/${$propertyType}?location=${searchInput}`);
        }}
        class="bg-blue-500 justify-center h-full flex items-center gap-2 py-2 px-5 text-white text-lg rounded-md"
    >
        <img class="h-5" src="/search.svg" alt="" />
        <span class="hidden sm:block"> Search</span>
    </button>
</div> -->
<style>
    /* .Tab button {
        padding: 0.3rem 0.7rem;
        border-bottom: 1px solid #d7d7d7;
        background-color: rgb(229 231 235);
    } */
</style>
