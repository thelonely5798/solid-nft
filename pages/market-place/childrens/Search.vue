<template>
    <div class="search-section">
        <div class="mr-2">
            <div class="bg-dark-blue  w-full shadow rounded mx-auto pb-10 px-6">
                <div class="flex justify-start items-center py-7 relative">
                    <input
                        class="text-sm leading-none text-left text-black px-4 py-3 w-full border rounded border-gray-300 outline-none"
                        type="text" placeholder="Enter address or text" />
                    <svg class="absolute right-3 z-10 cursor-pointer" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                            stroke="#4B5563" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21 21L15 15" stroke="#4B5563" stroke-width="1.66667" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
                <div v-if="filter" class="grid grid-cols-4 gap-2">
                    <div>
                        <label class="text-sm text-left font-medium leading-none text-white">Search Type</label>
                        <div
                            class="dropdown-one border h-[50px] rounded border-gray-300 w-full rounded outline-none relative mt-2">
                            <button @click="showDropDownMenu_search($event.currentTarget)"
                                class="dropbtn-one relative px-5 py-[12px] flex items-center justify-between w-full">
                                <span class="pr-4 font-medium text-white text-sm" id="drop-down-content-setter_search">
                                    {{ getSearchType }}
                                </span>
                                <svg class="absolute right-5 z-10 cursor-pointer" width="10" height="6"
                                    viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 0.75L5 5.25L9.5 0.75" stroke="#4B5563" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <div ref="searchTypeRef"
                                class="hidden rounded w-full shadow border-t border-gray-200 px-1 py-2 z-[9999] absolute top-12 right-0 bg-white"
                                id="drop-down-div_search">
                                <a href="javascript:void(0)" class="hover">
                                    <p class="text-sm leading-none text-zinc-900 p-3 hover:bg-indigo-100 hover:font-medium  hover:rounded cursor-pointer"
                                        @click="searchType_select($event.currentTarget)">
                                        Beginner
                                    </p>
                                </a>
                                <a href="javascript:void(0)">
                                    <p class="text-sm leading-none text-zinc-900 p-3 hover:bg-indigo-100 hover:font-medium  hover:rounded cursor-pointer"
                                        @click="searchType_select($event.currentTarget)">
                                        Intermediate
                                    </p>
                                </a>
                                <a href="javascript:void(0)">
                                    <p class="text-sm leading-none text-zinc-900 p-3 hover:bg-indigo-100 hover:font-medium  hover:rounded cursor-pointer"
                                        @click="searchType_select($event.currentTarget)">
                                        Expert
                                    </p>
                                </a>
                                <a href="javascript:void(0)">
                                    <p class="text-sm leading-none text-zinc-900 p-3 hover:bg-indigo-100 hover:font-medium  hover:rounded cursor-pointer"
                                        @click="searchType_select($event.currentTarget)">
                                        Expert
                                    </p>
                                </a>
                                <a href="javascript:void(0)">
                                    <p class="text-sm leading-none text-zinc-900 p-3 hover:bg-indigo-100 hover:font-medium  hover:rounded cursor-pointer"
                                        @click="searchType_select($event.currentTarget)">
                                        Expert
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label class="text-sm text-left font-medium leading-none text-white">Min Amount</label>
                        <div class="flex items-center border border-slate-300 px-4 py-3 rounded mt-2">
                            <div class="svg-container" onclick="minusme_search(this)">
                                <svg class="hover:bg-gray-100 cursor-pointer rounded-full" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z"
                                        stroke="#475569" stroke-miterlimit="10" />
                                    <path d="M15.75 12H8.25" stroke="#475569" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="dollar-container pl-4">
                                <p class="text-sm leading-none text-white pr-1">$</p>
                            </div>
                            <div class="text-container w-full text-sm leading-none text-white">
                                1000
                            </div>
                            <div class="svg-container" onclick="plusme_search(this)">
                                <svg class="hover:bg-gray-100 cursor-pointer rounded-full" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z"
                                        stroke="#475569" stroke-miterlimit="10" />
                                    <path d="M12 8.25V15.75" stroke="#475569" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M15.75 12H8.25" stroke="#475569" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label class="text-sm text-left font-medium leading-none text-white">Max
                            Amount</label>
                        <div class="flex items-center border border-slate-300 px-4 py-3 rounded mt-2">
                            <div class="svg-container" onclick="minusme_search(this)">
                                <svg class="hover:bg-gray-100 cursor-pointer rounded-full" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z"
                                        stroke="#475569" stroke-miterlimit="10" />
                                    <path d="M15.75 12H8.25" stroke="#475569" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="dollar-container pl-4">
                                <p class="text-sm leading-none text-white pr-1">$</p>
                            </div>
                            <div class="text-container w-full text-sm leading-none text-white">
                                1000
                            </div>
                            <div class="svg-container" onclick="plusme_search(this)">
                                <svg class="hover:bg-gray-100 cursor-pointer rounded-full" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z"
                                        stroke="#475569" stroke-miterlimit="10" />
                                    <path d="M12 8.25V15.75" stroke="#475569" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M15.75 12H8.25" stroke="#475569" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label class="text-sm text-left font-medium leading-none text-white">Category</label>
                        <div
                            class="dropdown-one border rounded border-gray-300 h-[50px] w-full rounded outline-none relative mt-2">
                            <button onclick="showDropDownMenuOne_search(this)"
                                class="dropbtn-one relative px-5 py-[12px] flex items-center justify-between w-full">
                                <span class="pr-4 font-medium text-white text-sm"
                                    id="drop-down-content-setter-one_search">
                                    Q/A
                                </span>
                                <svg class="absolute right-5 z-10 cursor-pointer" width="10" height="6"
                                    viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 0.75L5 5.25L9.5 0.75" stroke="#4B5563" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <div class="hidden rounded w-full shadow border-t border-gray-200 px-1 py-2 absolute top-12 right-0 bg-white z-20"
                                id="drop-down-div-one_search">
                                <a href="javascript:void(0)" class="hover">
                                    <p class="text-sm leading-none text-white p-3 hover:bg-indigo-100 hover:font-medium  hover:rounded cursor-pointer"
                                        onclick="swaptextone_search(this)">
                                        Q/A
                                    </p>
                                </a>
                                <a href="javascript:void(0)">
                                    <p class="text-sm leading-none text-white p-3 hover:bg-indigo-100 hover:font-medium  hover:rounded cursor-pointer"
                                        onclick="swaptextone_search(this)">
                                        Designing
                                    </p>
                                </a>
                                <a href="javascript:void(0)">
                                    <p class="text-sm leading-none text-white p-3 hover:bg-indigo-100 hover:font-medium  hover:rounded cursor-pointer"
                                        onclick="swaptextone_search(this)">
                                        Developement
                                    </p>
                                </a>
                                <a href="#">
                                    <p class="text-sm leading-none text-white p-3 hover:bg-indigo-100 hover:font-medium  hover:rounded cursor-pointer"
                                        onclick="swaptextone_search(this)">
                                        Marketing
                                    </p>
                                </a>
                                <a href="#">
                                    <p class="text-sm leading-none text-white p-3 hover:bg-indigo-100 hover:font-medium  hover:rounded cursor-pointer"
                                        onclick="swaptextone_search(this)">
                                        Business Developement
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:flex justify-end mr-1 items-center gap-x-3 mt-4 lg:block md:hidden hidden">
                    <button
                        class="text-sm font-medium leading-none text-center text-white px-6 py-4 border rounded-md border-primary-green hover:opacity-50">
                        Clear
                    </button>
                    <button
                        @click="toggleFilter"
                        class="text-sm font-medium leading-none text-white text-center px-6 py-4 bg-primary-green rounded-md hover:opacity-50">
                        {{ !filter ? "Enable filter" : "Disable filter" }}
                    </button>
                    <button
                        class="text-sm font-medium leading-none text-white text-center px-6 py-4 bg-primary-green rounded-md hover:opacity-50">
                        Search
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const searchTypeRef = ref(null)
const searchForm = ref({
    searchType: "Beginner"
})
const getSearchType = computed(() => searchForm.value.searchType)
const showDropDownMenu_search = (e) => {
    e.parentElement.children[1].classList.toggle("hidden")
}

const searchType_select = (e) => {
    searchForm.value.searchType = e.innerText
    searchTypeRef.value.classList.toggle("hidden")
}

const filter = ref(false)
const toggleFilter = () => filter.value = !filter.value
</script>
<style scoped lang="scss">

</style>



