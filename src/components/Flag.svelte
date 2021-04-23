<script>
  export let name;
  export let color;
  let cn = 'text-sm font-mono inline rounded-full px-2 align-top float-right'
  if (color == 'teal') {
    cn += ' text-teal-800 bg-teal-100'
  }
</script>

<span class={cn}>{name}</span>