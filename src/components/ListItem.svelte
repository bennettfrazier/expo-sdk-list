<script>
  export let item;
  import Flag from "../components/Flag.svelte";
</script>

<article class="relative overflow-hidden rounded-lg shadow-lg mb-12 min-h-full pb-8">
  <header class="flex items-center justify-between p-2 md:p-4">
    <h1 class="text-lg w-full">
      <a class="no-underline hover:underline text-black text-2xl pb-4" href={item.link} target="_blank">
        {item.name} &nearr;
      </a>
      {#if item.isDeprecated}
        <Flag color="teal" name="deprecated" />
      {/if}
      <p>{item.description}</p>
    </h1>
  </header>

  <footer class="absolute bottom-0 left-0 flex items-center justify-between leading-none p-4 md:pt-0">
    <div class="pt-4 pb-2">
      {#if item.tags !== undefined }
        {#each [...item.tags] as tag}
        <span class="inline-block bg-gray-400 rounded-full px-3 mr-2 py-1 text-sm font-semibold text-gray-700 mb-2">{tag}</span>
        {/each}
      {/if}
      </div>
  </footer>
</article>
