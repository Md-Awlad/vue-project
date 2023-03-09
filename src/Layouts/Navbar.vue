<template lang="">
  <div>
    <nav
      id="header"
      class="w-full z-30 py-1 bg-white shadow-lg fixed top-0 left-0 right-0"
    >
      <div class="w-full flex items-center justify-between mt-0 px-6">
        <label for="menu-toggle" class="cursor-pointer md:hidden block">
          <svg
            class="fill-current text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <div>
          <div class="auth flex items-center gap-2 w-full md:w-full">
            <img
              class="w-14 h-14"
              src="../assets/images/biker_logo.avif"
              alt="logo"
            />
            <h2 class="text-3xl font-bold text-black">BIKER</h2>
            <span class="text-[#02CC8B] text-3xl">Club</span>
          </div>
        </div>
        <div
          class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav>
            <ul
              class="md:flex items-center justify-between text-gray-900 pt-4 md:pt-0"
            >
              <li>
                <RouterLink
                  class="inline-block no-underline hover:text-[#02CC8B] py-2 px-4 lg:-ml-2"
                  to="/"
                  >HOME</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  class="inline-block no-underline hover:text-[#02CC8B] py-2 px-4 lg:-ml-2"
                  to="/about"
                  >ABOUT US</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  class="inline-block no-underline hover:text-[#02CC8B] py-2 px-4 lg:-ml-2"
                  to="/contact"
                  >OFFER</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  class="inline-block no-underline hover:text-[#02CC8B] py-2 px-4 lg:-ml-2"
                  to="/contact"
                  >SERVICES</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  class="inline-block no-underline hover:text-[#02CC8B] py-2 px-4 lg:-ml-2"
                  to="/contact"
                  >LISTINGS</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  class="inline-block no-underline hover:text-[#02CC8B] py-2 px-4 lg:-ml-2"
                  to="/contact"
                  >BLOG</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  class="inline-block no-underline hover:text-[#02CC8B] py-2 px-4 lg:-ml-2"
                  to="/contact"
                  >CONTACT</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  class="inline-block no-underline hover:text-[#02CC8B] py-2 px-4 lg:-ml-2"
                  to="/contact"
                  >SHOP</RouterLink
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
