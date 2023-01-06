<script>
    import "../app.css";
    import Navbar from "../lib/Navbar.svelte";
    import Footer from "../lib/Footer.svelte";
    import WelcomePopUp from "../lib/WelcomePopUp.svelte";
    var welcomePopUp = true;
</script>

<Navbar />
<div class="mt-11">
    <slot />
</div>
<Footer />

{#if welcomePopUp}
    <WelcomePopUp
        on:close={() => {
            welcomePopUp = false;
        }}
    />
{/if}
