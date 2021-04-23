<script>
  import ListItem from "./components/ListItem.svelte";
  import { posts } from "./data";
</script>

<main class="border-gray-200 p-8 m-8 rounded-lg">
  <div class="container my-12 mx-auto px-4 md:px-12">
    <span class="uppercase inline-block tracking-widest mt-2 mb-6 text-xs text-gray-700 mt-4">SDK 41 quick view</span>
    <h1 class="text-5xl font-semibold mb-12 leading-none">Expo SDK List View</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      {#each posts as item}
        <div>
          <ListItem item={item} />
        </div>
      {/each}
    </div>
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
  body {
    font-family: "Inter", sans-serif;
  }
</style>
