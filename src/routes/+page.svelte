<script>
    import Search from "$lib/Search.svelte";

    import { Heading, P, A, Mark, Secondary, Span } from "flowbite-svelte";

    var scrollerMenu = [];

    function scrollClick(index, Direction) {
        if (Direction == "right") scrollerMenu[index].scrollBy(300, 0);
        else scrollerMenu[index].scrollBy(-300, 0);
    }
</script>

<!-- for mobile -->
<div class="sm:hidden mt-20  mb-10">
    <div class="">
        <Heading class="text-4xl font-semibold text-center text-gray-700 mt-3">
            Discover Most <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"
                >Suitable</span
            > Property
        </Heading>
        <P size="xl" class="mt-5 text-center text-slate-400 font-semibold">
            Find a variety of properties that suit you very easily. forgot all
            difficulties in finding a residence for you.
        </P>
    </div>
</div>

<!-- home top container-->

<div
    class="relative home-center flex justify-center items-center sm:block rounded-lg sm:rounded-none p-5 sm:p-20 sm:-mx-20 h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
>
    <div class=" w-[400px] sm:w-[600px]">
        <div class="hidden mb-6 sm:block sm:w-[370px] md:w-[500px]">
            <Heading
                color="text-white"
                customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
                class=" mt-3"
            >
                Discover Most <span
                    class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"
                    >Suitable</span
                > Property
            </Heading>
            <P
                size="xl"
                space="tighter"
                class="mt-5 text-slate-400 font-semibold"
            >
                Find a variety of properties that suit you very easily. forgot
                all difficulties in finding a residence for you.
            </P>
        </div>
        <Search />
    </div>
    <div class="-mx-20 hidden sm:block ">
        <img class="w-full" src="/wave.svg" alt="" />
    </div>
</div>

<!-- home middle -->
<div class="relative mt-10">
    <div class=" flex gap-5 justify-between items-center">
        <div class="relative hidden sm:flex flex-1 justify-center">
            <img
                class="absolute rounded-md top-0 left-14 "
                src="/whatIsDigicalestate3.jpg"
                alt=""
            />
            <img
                class="my-10 rounded-md h-[500px] z-10"
                src="/whatIsDigicalestate2.jpg"
                alt=""
            />
            <img
                class="absolute rounded-md z-10 bottom-0 right-10 h-[200px]"
                src="/whatIsDigicalestate.jpg"
                alt=""
            />
        </div>
        <div class="flex-1 flex flex-col ">
            <Heading
                class="mt-10 mb-5 text-center text-blue-500 text-4xl font-semibold"
            >
                What is Digicalestate?
            </Heading>
            <P weight="bold" class=" text-center text-lg">
                Our website is dedicated to helping you find your dream home,
                whether you're a first-time buyer, seasoned investor, or anyone
                in between. We understand that the process of buying or selling
                a home can be overwhelming, which is why we've created a
                one-stop-shop for all your real estate needs.
            </P>
        </div>
    </div>
    <!-- why choose us -->
    <div class="flex flex-col mt-36 items-center">
        <Heading class="text-4xl text-center text-blue-500 font-semibold"
            >Why choose Us?</Heading
        >
        <div
            class=" w-full grid gap-4 mt-5"
            style="grid-template-columns:repeat(auto-fit,minmax(230px,1fr)) ;"
        >
            <div class="relative flex-1  rounded-lg p-2 border border-black">
                <div class="w-fit mb-2 rounded-full ">
                    <img class="h-8  " src="/whyus1.svg" alt="" />
                </div>

                <h1 class="text-lg font-semibold">
                    Wide selection of properties
                </h1>
                <p>
                    We have a diverse range of properties available, so you're
                    sure to find something that fits your needs and budget.
                </p>
            </div>
            <div
                class="relative flex-1 h-[200px] rounded-lg p-2 border border-black"
            >
                <div class="w-fit rounded-full ">
                    <img class="h-10  " src="/whyus2.svg" alt="" />
                </div>
                <h1 class="text-lg font-semibold">Expert team</h1>
                <p>
                    Our team of real estate professionals has years of
                    experience and expertise, so you can trust that you're in
                    good hands.
                </p>
            </div>
            <div
                class="relative flex-1 h-[200px] rounded-lg p-2 border border-black"
            >
                <div class="w-fit rounded-full ">
                    <img class="h-10  " src="/whyus3.svg" alt="" />
                </div>
                <h1 class="text-lg font-semibold">Convenient resources</h1>
                <p>
                    We offer a range of resources and tools to make the process
                    of buying or selling a home as easy as possible.
                </p>
            </div>
            <div
                class="relative flex-1 h-[200px] rounded-lg p-2 border border-black"
            >
                <div class="w-fit rounded-full ">
                    <img class="h-10  " src="/whyus4.svg" alt="" />
                </div>
                <h1 class="text-lg font-semibold">
                    Exceptional customer service
                </h1>
                <p>
                    We prioritize customer satisfaction and are dedicated to
                    providing you with the best possible experience.
                </p>
            </div>
        </div>
    </div>
    <!-- Propuler Residence -->

    <!-- <div class="mb-10 mt-32">
        <h1 class="text-blue-500  mb-1 font-semibold text-4xl">
            Populer Residences
        </h1>
        <div class="h-1 w-16 rounded-full bg-orange-400" />
    </div>
    <div class="relative mb-5">
        <div
            bind:this={scrollerMenu[0]}
            class=" overflow-hidden rounded-md"
            style="scroll-behavior: smooth;"
        >
            <button
                class="absolute z-20 top-1/2 rounded-md bg-white -right-5"
                on:click={() => scrollClick(0, "right")}
            >
                <img class="h-10" src="/RightArrow.svg" alt="" />
            </button>
            <button
                class="absolute z-20 top-1/2 rotate-180 rounded-md bg-white -left-5"
                on:click={() => scrollClick(0, "left")}
            >
                <img class="h-10" src="/RightArrow.svg" alt="" />
            </button>

            <div class=" flex w-fit gap-3">
                
                {#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as options}
                    <a href="/123">
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
                                <h1 class="text-xl font-bold mb-1">??? 40 Lac</h1>
                                <p>Maheshtala, Kolkata</p>
                            </div>
                        </div>
                    </a>
                {/each}
                
            </div>
        </div>
    </div> -->
    <!-- Propuler Residence -->
</div>

<style>
    .home-center {
        background-image: url("/home7.jpg");
        background-position: 70%;
        background-repeat: no-repeat;
        background-size: cover;
    }
    /* .card:hover img {
        transform: scale(1.1);
    } */
</style>
