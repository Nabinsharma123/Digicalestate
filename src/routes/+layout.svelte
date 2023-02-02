<script>
    import "../app.css";
    import Navbar from "../lib/Navbar.svelte";
    import Footer from "../lib/Footer.svelte";
    import WelcomePopUp from "../lib/WelcomePopUp.svelte";
    import { onMount } from "svelte";
    import { onAuthStateChanged } from "firebase/auth";
    import { auth } from "./firebaseConfig";
    import { authStatus, userAuthData } from "./store";
    var welcomePopUp = false;

    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user);
            $authStatus = true;
            $userAuthData = user;
        } else {
            $authStatus = false;
            welcomePopUp = true;
        }
    });
</script>

{#if welcomePopUp}
    <WelcomePopUp
        on:close={() => {
            welcomePopUp = false;
        }}
    />
{/if}
<div class="mt-11 mx-3 sm:mx-10 lg:mx-20">
    <Navbar />
    <slot />
    <Footer />
</div>
