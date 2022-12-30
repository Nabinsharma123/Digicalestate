<script>
    import { page } from "$app/stores";
    console.log($page.params.propertyId);
</script>

<div class="">
    <div class="flex gap-5 p-5 rounded-lg border border-[#d7d7d7]">
        <div class=" flex-1 ">
            <div
                class=" w-96 h-96 rounded-md"
                style={`background-image: url("./images4.jpg");
              background-position: center;
             background-repeat: no-repeat;
             background-size: cover;
            `}
            />
        </div>
        <div class="flex flex-[2] w-full">
            <div class="flex-[3]">
                <h1 class="text-2xl font-semibold">Joyville Western Heights</h1>
                <div class="grid grid-cols-3 mt-2 gap-y-4">
                    <div>
                        <h1 class="text-[#606060]">Configuration</h1>
                        <h2>3 BHK</h2>
                    </div>
                    <div>
                        <h1 class="text-[#606060]">Bathroom</h1>
                        <h2>1</h2>
                    </div>
                    <div>
                        <h1 class="text-[#606060]">kitchen</h1>
                        <h2>1</h2>
                    </div>
                    <div>
                        <h1 class="text-[#606060]">Furnishing</h1>
                        <h2>Unfurnished</h2>
                    </div>
                    <div>
                        <h1 class="text-[#606060]">Status</h1>
                        <h2>Ready to move</h2>
                    </div>
                </div>
                <p class="mt-2 text-[#606060]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tempore, minima dolorem consequatur labore architecto at
                    quaerat saepe voluptas veniam, atque tempora ad magni
                    repellendus nostrum ea eum, laboriosam quas a.
                </p>
            </div>
            <div
                class="flex-1 p-5 flex flex-col items-center justify-between rounded-md bg-neutral-200 "
            >
                <h1 class=" text-2xl font-semibold">₹39 Lac</h1>
                <button
                    class="bg-indigo-600 mt-3  p-2 rounded-lg border-2 text-white
                     border-indigo-600 font-semibold hover:text-indigo-600 hover:bg-white"
                    >Contact Dealer</button
                >
            </div>
        </div>
    </div>
</div>
