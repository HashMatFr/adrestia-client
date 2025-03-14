<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 22 22"
    >
      <mask id="path-1-inside-1_13_95" class="fill-current">
        <path
          d="M0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11Z"
        />
      </mask>
      <path
        d="M11 20C6.02944 20 2 15.9706 2 11H-2C-2 18.1797 3.8203 24 11 24V20ZM20 11C20 15.9706 15.9706 20 11 20V24C18.1797 24 24 18.1797 24 11H20ZM11 2C15.9706 2 20 6.02944 20 11H24C24 3.8203 18.1797 -2 11 -2V2ZM11 -2C3.8203 -2 -2 3.8203 -2 11H2C2 6.02944 6.02944 2 11 2V-2Z"
        class="fill-current"
        mask="url(#path-1-inside-1_13_95)"
      />
      <path
        d="M14 9.74952C14 11.5958 12.082 12.1374 11 14C9.42623 12.1374 8 11.8824 8 10.0361C8 8.18974 9.57377 7.31385 11 8.79436C12.623 7.40936 14 7.90319 14 9.74952Z"
        class="fill-current"
      />
      <mask id="path-4-inside-2_13_95" class="fill-current">
        <path
          d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11Z"
        />
      </mask>
      <path
        d="M11 16C8.23858 16 6 13.7614 6 11H2C2 15.9706 6.02944 20 11 20V16ZM16 11C16 13.7614 13.7614 16 11 16V20C15.9706 20 20 15.9706 20 11H16ZM11 6C13.7614 6 16 8.23858 16 11H20C20 6.02944 15.9706 2 11 2V6ZM11 2C6.02944 2 2 6.02944 2 11H6C6 8.23858 8.23858 6 11 6V2Z"
        class="fill-current"
        mask="url(#path-4-inside-2_13_95)"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: Number,
    default: 22,
  },
  height: {
    type: Number,
    default: 22,
  },
})
</script>
