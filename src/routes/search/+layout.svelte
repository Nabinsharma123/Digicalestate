<script>
    import Search from "$lib/Search.svelte";
</script>

<div class=" mt-16">
    <div class="flex w-full justify-center">
        <div class="w-full max-w-[600px]">
            <Search />
        </div>
    </div>
    <slot />
</div>
