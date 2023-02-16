<script>
    import { onMount } from "svelte";
    import nhost from "../../nhostConfig";
    import { Button, Heading } from "flowbite-svelte";
    import ZoomMedia from "../../../lib/ZoomMedia.svelte";
    import PlayFilled from "carbon-icons-svelte/lib/PlayFilled.svelte";

    export let data;
    var propertyData = data.post;

    var scrollerMenu;
    var isOverflow;

    var zoomMedia = false;

    function scrollClick(index, Direction) {
        if (Direction == "right") scrollerMenu.scrollBy(360, 0);
        else scrollerMenu.scrollBy(-360, 0);
    }

    function isOverflowX() {
        return (
            scrollerMenu.scrollWidth !=
            Math.max(scrollerMenu.offsetWidth, scrollerMenu.clientWidth)
        );
    }
    onMount(() => {
        isOverflow = isOverflowX();
        console.log(isOverflow);
    });
</script>

<div
    class="flex flex-col -mx-3 sm:flex-row justify-center  gap-5 sm:p-2 sm:rounded-lg sm:border sm:border-[#d7d7d7]"
>
    <div class="flex-1  w-full ">
        <img
            class="sm:rounded-md  w-full h-full max-h-[500px] object-cover"
            src={`${nhost.storage.getPublicUrl({
                fileId: propertyData.mainImage_id,
            })}`}
            alt=""
        />
    </div>
    <div class="flex flex-col  sm:flex-row flex-[2] w-full">
        <div class="flex-[3] mx-3 mb-5 text-lg sm:text-xl">
            <div class=" font-semibold">
                <span class="font-semibold ">Name : </span>
                {propertyData.name || "--"}
            </div>

            <div class="">
                <span class="font-semibold ">Address : </span>
                {propertyData.address || "--"}
            </div>

            <div>
                <span class="font-semibold ">Super Area : </span>
                {propertyData.super_area || "--"}
            </div>
            <div>
                <span class="font-semibold ">BHK : </span>
                {propertyData.BHK || "--"}
            </div>
            <div>
                <span class="font-semibold ">Furnishing : </span>
                {propertyData.Furnishing || "--"}
            </div>
            <div>
                <span class="font-semibold ">Discription : </span>
                {propertyData.discription || "--"}
            </div>
        </div>
        <div
            class="flex-1 p-5 flex flex-col items-center justify-between rounded-md bg-neutral-200 "
        >
            <h1 class=" text-2xl font-semibold">₹{propertyData.price}</h1>
            <Button gradient color="blue">Contact Dealer</Button>
        </div>
    </div>
</div>

<div class="mb-10 mt-10">
    <Heading class="text-blue-500  mb-1 font-semibold text-4xl">Images</Heading>
    <div class="h-1 w-16 rounded-full bg-orange-400" />
</div>

<div class="relative">
    <div bind:this={scrollerMenu} class=" mt-8  ">
        <div class="w-full">
            {#each propertyData.images_id.video as id}
                <button
                    class="relative cursor-zoom-in mr-3 mb-3"
                    on:click={() => {
                        zoomMedia = {
                            id: id,
                            type: "Video",
                        };
                    }}
                >
                    <div
                        class="absolute h-full w-full top-0 left-0 flex justify-center items-center"
                    >
                        <div class="w-10 h-10 rounded-full bg-white ">
                            <svg
                                fill="#000000"
                                height="40px"
                                width="40px"
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 60 60"
                                xml:space="preserve"
                            >
                                <g>
                                    <path
                                        d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30
		c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15
		C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"
                                    />
                                    <path
                                        d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
		S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"
                                    />
                                </g>
                            </svg>
                        </div>
                    </div>

                    <video class="image rounded-md h-[300px]" muted>
                        <track kind="captions" />
                        <source
                            src={`${nhost.storage.getPublicUrl({
                                fileId: id,
                            })}`}
                            type="video/mp4"
                        />
                    </video>
                </button>
            {/each}
            {#each propertyData.images_id.image as id}
                <button
                    class="cursor-zoom-in mr-3 mb-3"
                    on:click={() => {
                        zoomMedia = {
                            id: id,
                            type: "Image",
                        };
                    }}
                >
                    <img
                        class="image rounded-md h-[300px]"
                        src={`${nhost.storage.getPublicUrl({
                            fileId: id,
                        })}`}
                        alt=""
                    />
                </button>
            {/each}
        </div>
    </div>
</div>
{#if zoomMedia}
    <ZoomMedia
        id={zoomMedia.id}
        type={zoomMedia.type}
        on:close={() => (zoomMedia = false)}
    />
{/if}

<style>
    /* .image {
        transition: ease 0.4s;
    }
    .image:nth-child(even) {
        border: 2px solid black;
    } */
</style>
