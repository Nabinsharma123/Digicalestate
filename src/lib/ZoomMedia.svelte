<script>
    import nhost from "../routes/nhostConfig";
    import { createEventDispatcher } from "svelte";
    import { clickOutside } from "./click_outside.js";
    import { fade, fly } from "svelte/transition";

    const dispatch = createEventDispatcher();
    export var id;
    export var type;
</script>

<div
    class="fixed z-50 flex justify-center items-center  top-0 left-0 bg-black/80 w-screen h-screen"
    transition:fade
>
    <div
        transition:fly={{ y: 200, duration: 400 }}
        use:clickOutside
        on:outclick={() => dispatch("close")}
    >
        {#if type == "Image"}
            <img
                class="rounded-md w-[70vw] sm:w-full sm:h-[90vh]"
                src={`${nhost.storage.getPublicUrl({
                    fileId: id,
                })}`}
                alt=""
            />
        {:else if type == "Video"}
            <video
                class=" w-[70vw] sm:w-full sm:h-[90vh] rounded-md "
                autoplay
                controls
                muted
            >
                <track kind="captions" />
                <source
                    src={`${nhost.storage.getPublicUrl({
                        fileId: id,
                    })}`}
                    type="video/mp4"
                />
            </video>
        {/if}
    </div>
</div>
