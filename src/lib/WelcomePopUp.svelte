<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
</script>

<div
    class="fixed flex justify-center items-center  h-screen w-screen z-50 top-0 left-0"
    style="background-color: rgba(0, 0, 0, 0.5);"
>
    <div class="relative bg-white p-4 h-[400px] w-[600px] rounded-md">
        <button
            on:click={() => dispatch("close")}
            class="absolute bg-white -top-4 -right-4 h-10 w-10 rounded-full border border-gray-500"
        />
        <div class="flex flex-col items-center">
            <h1 class="text-2xl font-mono font-semibold">
                Welcome to Digicalestate 🙏🏻
            </h1>
        </div>
    </div>
</div>

<style>
</style>
