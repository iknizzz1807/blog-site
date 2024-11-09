<script lang="ts">
  export let progress: number;
</script>

<div
  style="position: fixed; bottom: 0; left: 0; width: 100%; height: 4px; background-color: #ddd;"
>
  <div
    style="height: 100%; width: {progress}%; background-color: #3498db; transition: width 0.2s;"
  ></div>
</div>
