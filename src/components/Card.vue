<script>
export default {};
</script>


<template>
  <div>
    <!-- Card #1 -->
    <div class="flex min-h-screen items-center justify-center bg-gray-200">
      <div
        class="
          flex
          w-7/12
          flex-col
          items-center
          justify-center
          rounded-md
          bg-white
          py-10
          shadow-2xl
          max-w-xs
        "
      >
        <img
          class="h-20 w-20 rounded-full"
          src="../assets/Card/20221024_110522.jpg"
          alt="Goku Anime"
        />
        <h1 class="mt-3 text-xl font-bold">Faheem Khan</h1>
        <h3 class="text-md text-gray-500">@FaheemRafiq786</h3>
        <button
          id="btn"
          type="button"
          class="
            mt-4
            rounded-full
            border-2
            p-2
            px-6
            hover:bg-black hover:text-white
          "
        >
          Following
        </button>
      </div>
    </div>

    <!-- Card #2 -->

    <div class="flex min-h-screen items-center justify-center bg-gray-200">
      <div
        class="flex w-9/12 flex-col rounded-md bg-white p-8 shadow-2xl max-w-xl"
      >
        <div class="flex items-center">
          <img
            class="h-20 w-20 rounded-full"
            src="../assets/Card/20221024_110522.jpg"
            alt="Goku Anime"
          />
          <button
            id="btn"
            type="button"
            class="
              ml-auto
              mt-4
              rounded-full
              border-2
              p-2
              px-6
              hover:bg-black hover:text-white
            "
          >
            Following
          </button>
        </div>
        <h1 class="mt-3 text-xl font-bold">Faheem Khan</h1>
        <h3 class="text-md text-gray-500">@FaheemRafiq786</h3>
        <p class="font-medium mt-4">
          Produt Designer at @company. Working on @othercompany in my free time.
        </p>
      </div>
    </div>

    <!-- Card #3 -->

    <div class="flex min-h-screen items-center justify-center bg-gray-200">
      <div
        class="
          flex
          w-9/12
          flex-col
          rounded-md
          bg-white
          p-8
          shadow-2xl
          max-w-2xl
        "
      >
        <div class="flex items-center">
          <img
            class=" h-20 w-20 rounded-full"
            src="../assets/Card/20221024_110522.jpg"
            alt="Goku Anime"
          />
          <button
            id="btn"
            type="button"
            class="
              ml-auto
              mt-4
              rounded-full
              border-2
              p-2
              px-6
              bg-black
              text-white
            "
          >
            Follow
          </button>
        </div>
        <h1 class="mt-3 text-xl font-bold">Faheem Khan</h1>
        <h3 class="text-md text-gray-500">@FaheemRafiq786</h3>
        <p class="font-medium mt-4">
          Produt Designer at @company. Working on @othercompany in my free time.
        </p>
        <div class="mt-5">
          <p>
            <span class="font-bold uppercase">15k</span> Followers
            <span class="font-bold uppercase">. 7k</span> Following
            <span class="font-extrabold">.</span> Since April 30,2017
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
