<script>
    // @ts-nocheck

    function scrollClick(e, Direction) {
        console.log(e.path[2].scrollWidth);
        if (Direction == "right") e.path[2].scrollBy(350, 0);
        else e.path[2].scrollBy(-350, 0);
    }

    var searchInput;
</script>

<!-- home top container-->
<div class="relative flex h-[550px] ">
    <!-- navbar -->
    <nav
        class="absolute border-b border-gray-400 w-full top-0 left-0 py-3 px-20"
    >
        <h1 class="text-white text-2xl">Digicalestate</h1>
    </nav>
    <div class="flex-1 pt-20 pl-20 bg-[#050810]">
        <div class="w-[370px]">
            <h1 class="text-white text-6xl mt-3">
                Discover Most Suitable Property
            </h1>
            <p class="mt-5 text-gray-500">
                Find a variety of properties that suit you very easily. forgot
                all difficulties in finding a residence for you.
            </p>
        </div>

        <div
            class="bg-white flex items-center h-fit w-fit mt-4 rounded-lg p-2 "
        >
            <label for="search">
                <img class="h-6 w-6 mr-2" src="/location.svg" alt="" />
            </label>
            <input
                bind:value={searchInput}
                class="text-xl w-[400px] p-2 outline-none"
                type="text"
                placeholder="Search Location"
            />
            <a href={searchInput ? `/search?location=${searchInput}` : "/"}>
                <button
                    class="bg-indigo-600 flex items-center py-2 px-3 text-white text-lg rounded-md"
                >
                    <img class="mr-2" src="/search.svg" alt="" /> Search</button
                >
            </a>
        </div>
    </div>
    <div class="flex-1  home-center" />
</div>

<!-- home middle -->
<div class="mx-20">
    <div class="mb-10 mt-10">
        <h1 class="text-indigo-600 mb-1 font-semibold text-4xl">
            Populer Residences
        </h1>
        <div class="h-1 w-16 rounded-full bg-orange-400" />
    </div>
    <!-- Propuler Residence -->
    <div
        on:scroll={(e) => {
            console.log(e);
        }}
        class="relative mb-5"
    >
        <div
            class=" overflow-hidden rounded-md"
            style="scroll-behavior: smooth;"
        >
            <button
                class="absolute z-20 top-1/2 rounded-md bg-white -right-5"
                on:click={(e) => scrollClick(e, "right")}
            >
                <img class="h-10" src="/RightArrow.svg" alt="" />
            </button>
            <button
                class="absolute z-20 top-1/2 rotate-180 rounded-md bg-white -left-5"
                on:click={(e) => scrollClick(e, "left")}
            >
                <img class="h-10" src="/RightArrow.svg" alt="" />
            </button>

            <div class=" flex w-fit gap-3">
                <!-- cards -->
                {#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as options}
                    <div
                        class="card overflow-hidden  rounded-md border border-[#d7d7d7] w-72"
                    >
                        <div class="overflow-hidden">
                            <img
                                class="rounded-tl-md rounded-tr-md w-full"
                                style="transition: 0.4s ease;"
                                src="/images1.jpg"
                                alt=""
                            />
                        </div>
                        <div class="px-3 py-2">
                            <h1 class="text-lg mb-1">3 BHK flat</h1>
                            <h1 class="text-xl font-bold mb-1">₹ 40 Lac</h1>
                            <p>Maheshtala, Kolkata</p>
                        </div>
                    </div>
                {/each}
                <!-- cards -->
            </div>
        </div>
    </div>
    <!-- Propuler Residence -->
</div>

<style>
    .home-center {
        background-image: url("./home.jpg");

        background-repeat: no-repeat;
        background-size: cover;
    }
    .card:hover img {
        transform: scale(1.1);
    }
</style>
