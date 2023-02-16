<script>
    import { createEventDispatcher } from "svelte";
    import { clickOutside } from "./click_outside.js";
    const dispatch = createEventDispatcher();
    import Close from "carbon-icons-svelte/lib/Close.svelte";
    import { fade, fly } from "svelte/transition";
    import { auth } from "../routes/firebaseConfig";
    import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

    var phoneNumber = "";
    var otpverification = false;
    var otpNumber = "";
    var errorMessage = "";

    function recaptcha() {
        window.recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {
                size: "invisible",
                callback: (response) => {
                    console.log(response);
                },
                "expired-callback": () => {
                    console.log(1);
                },
            },
            auth
        );
    }
    function SignInWithNumber() {
        recaptcha();
        const appVerifier = window.recaptchaVerifier;
        console.log(appVerifier);
        signInWithPhoneNumber(auth, `+91${phoneNumber}`, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                otpverification = true;
            })
            .catch((error) => {
                console.log(error);
                errorMessage = error;
            });
    }

    function OPTverification() {
        window.confirmationResult
            .confirm(otpNumber)
            .then((result) => {
                const user = result.user;
                console.log(user);
                dispatch("close");
            })
            .catch((error) => {
                console.log(error);
                errorMessage = error;
            });
    }
</script>

<div
    class="fixed flex justify-center items-end sm:items-center  h-screen w-screen z-50 top-0 left-0"
    style="background-color: rgba(0, 0, 0, 0.5);"
    transition:fade
>
    <div
        class="relative bg-white p-4 w-screen h-[450px] sm:h-[400px] sm:w-[600px] rounded-md"
        transition:fly={{ y: 200 }}
        use:clickOutside
        on:outclick={() => dispatch("close")}
    >
        <div class="flex mt-6 sm:mt-0 gap-8 flex-col items-center">
            <h1 class="text-3xl text-center font-mono font-semibold">
                Welcome to Digicalestate
            </h1>
            <div class="text-7xl" transition:fade={{ delay: 500 }}>🙏🏻</div>
        </div>

        <div class="flex gap-3 flex-col mt-14 items-center w-full ">
            {#if !otpverification}
                <label class="font-semibold text-xl" for="phone"
                    >Please enter your phone number</label
                >

                <div class="flex items-center gap-3">
                    <div
                        class="flex gap-1 font-semibold text-lg border-2 rounded-md p-2 border-gray-700"
                    >
                        <h1
                            class="flex pr-1 items-center border-r border-gray-600"
                        >
                            +91
                        </h1>

                        <input
                            bind:value={phoneNumber}
                            class="focus:outline-none border-none w-36"
                            type="text"
                            id="phone"
                            maxlength="10"
                            oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');"
                        />
                    </div>
                    <button
                        disabled={phoneNumber.length != 10}
                        on:click={(e) => {
                            SignInWithNumber();
                        }}
                        class=" disabled:opacity-50 transition-transform bg-blue-600 rounded-md text-lg font-semibold text-white px-3 py-2"
                        >Verify</button
                    >
                </div>
            {:else}
                <label class="font-semibold text-xl" for="phone"
                    >Enter the OTP</label
                >
                <input
                    bind:value={otpNumber}
                    class="focus:outline-none w-24 h-8 p-4 text-lg font-semibold border-2 rounded-md border-gray-700"
                    type="text"
                    id="phone"
                    maxlength="6"
                    oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');"
                />
                <div class="flex gap-3">
                    <button
                        on:click={() => {
                            otpverification = false;
                        }}
                        class="border-2 rounded-md text-lg font-semibold text-blue-600 px-1 border-blue-600"
                        >Back</button
                    >
                    <button
                        disabled={otpNumber.length != 6}
                        on:click={OPTverification}
                        class="disabled:opacity-60 border-2 rounded-md text-lg font-semibold text-white px-1 bg-blue-600 border-blue-600"
                        >Verify</button
                    >
                </div>
            {/if}
            <h1 class="text-red-500">{errorMessage}</h1>
        </div>
        <div id="recaptcha-container" />
    </div>
</div>

<style>
</style>
