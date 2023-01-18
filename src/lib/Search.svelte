<script>
    // @ts-nocheck
    import nhost from "../routes/nhostConfig.js";
    import { gql } from "@apollo/client/core";
    var searchInput;
    var myTimeout;
    var isSearchLoading;
    var results = [];

    function onInputChange() {
        results = [];
        if (searchInput != "") {
            var query = gql`query MyQuery {
         District(where: {name: {_ilike: "%${searchInput}%"}}) {
               name
              id
                 }
                }`;

            nhost.graphql.request(query).then((res) => {
                res.data.District.map((e) => {
                    results = [...results, e.name];
                });
            });
        } else isSearchLoading = false;
    }
</script>

<div
    class="border border-[#d7d7d7] bg-white flex items-center h-fit w-fit mt-4 rounded-lg p-2 "
>
    <label for="search">
        <img class="h-6 w-6 mr-2" src="/location.svg" alt="" />
    </label>
    <div class="relative">
        <input
            bind:value={searchInput}
            class="text-xl w-[400px] p-2 outline-none"
            type="text"
            placeholder="Search Location"
            on:keydown={() => {
                isSearchLoading = true;
                clearTimeout(myTimeout);
            }}
            on:keyup={() => {
                clearTimeout(myTimeout);
                myTimeout = setTimeout(onInputChange, 300);
            }}
        />
        {#if results.length != 0}
            <div
                class="border border-t-0 border-[#d7d7d7] absolute p-2 left-0 bg-white w-full rounded-b-md"
            >
                {#each results as result}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <h1
                        on:click={() => {
                            searchInput = result;
                            results = [];
                        }}
                        class="text-gray-600 mb-2"
                    >
                        {result}
                    </h1>
                {/each}
            </div>
        {/if}
    </div>
    <a href={searchInput ? `/search?location=${searchInput}` : "/"}>
        <button
            class="bg-blue-500 flex items-center py-2 px-3 text-white text-lg rounded-md"
        >
            <img class="mr-2" src="/search.svg" alt="" /> Search</button
        >
    </a>
</div>
