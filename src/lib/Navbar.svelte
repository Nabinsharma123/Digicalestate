<script>
    import { authStatus, userAuthData } from "../routes/store";
    import { auth } from "../routes/firebaseConfig";
    import { signOut } from "firebase/auth";
</script>

<nav
    class="fixed flex justify-between items-center z-30 bg-white border-b border-gray-400 w-full top-0 left-0 py-1  px-3 sm:px-10 lg:px-20"
>
    <a href="/">
        <img class="rounded-md h-7 sm:h-10" src="/Navlogo.png" alt="" />
    </a>
    {#if $authStatus}
        <div class="flex items-center gap-2">
            <img
                class=" h-9 rounded-full border border-gray-700"
                src={`https://avatars.dicebear.com/api/micah/${$userAuthData.phoneNumber}.svg`}
                alt=""
            />
            <h1 class="hidden sm:block font-semibold">
                {$userAuthData.phoneNumber}
            </h1>
            <button
                class="border-2 hidden sm:block border-black font-semibold rounded-md p-1"
                on:click={() => {
                    signOut(auth);
                }}>SignOut</button
            >
        </div>
    {/if}
</nav>

<style>
    nav {
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 24%), 0 1px 4px 0 rgb(0 0 0 / 12%);
    }
</style>
