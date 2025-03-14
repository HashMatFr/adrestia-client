<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 22 22"
    >
      <mask id="path-1-inside-1_13_40" class="fill-current">
        <path
          d="M0 5.5C0 2.46243 2.46243 0 5.5 0C8.53757 0 11 2.46243 11 5.5C11 8.53757 8.53757 11 5.5 11C2.46243 11 0 8.53757 0 5.5Z"
        />
      </mask>
      <path
        d="M5.5 9C3.567 9 2 7.433 2 5.5H-2C-2 9.64214 1.35786 13 5.5 13V9ZM9 5.5C9 7.433 7.433 9 5.5 9V13C9.64214 13 13 9.64214 13 5.5H9ZM5.5 2C7.433 2 9 3.567 9 5.5H13C13 1.35786 9.64214 -2 5.5 -2V2ZM5.5 -2C1.35786 -2 -2 1.35786 -2 5.5H2C2 3.567 3.567 2 5.5 2V-2Z"
        class="fill-current"
        mask="url(#path-1-inside-1_13_40)"
      />
      <mask id="path-3-inside-2_13_40" class="fill-current">
        <path
          d="M8.55566 16.5C8.55566 13.4624 11.0181 11 14.0557 11C17.0932 11 19.5557 13.4624 19.5557 16.5C19.5557 19.5376 17.0932 22 14.0557 22C11.0181 22 8.55566 19.5376 8.55566 16.5Z"
        />
      </mask>
      <path
        d="M14.0557 20C12.1227 20 10.5557 18.433 10.5557 16.5H6.55566C6.55566 20.6421 9.91353 24 14.0557 24V20ZM17.5557 16.5C17.5557 18.433 15.9887 20 14.0557 20V24C18.1978 24 21.5557 20.6421 21.5557 16.5H17.5557ZM14.0557 13C15.9887 13 17.5557 14.567 17.5557 16.5H21.5557C21.5557 12.3579 18.1978 9 14.0557 9V13ZM14.0557 9C9.91353 9 6.55566 12.3579 6.55566 16.5H10.5557C10.5557 14.567 12.1227 13 14.0557 13V9Z"
        class="fill-current"
        mask="url(#path-3-inside-2_13_40)"
      />
      <rect
        x="4.88867"
        y="11"
        width="1.22222"
        height="7.33333"
        class="fill-current"
      />
      <rect
        x="2.44434"
        y="12.2222"
        width="6.11111"
        height="1.22222"
        class="fill-current"
      />
      <rect
        x="17.1113"
        y="8.55554"
        width="3.66667"
        height="1.22222"
        class="fill-current"
      />
      <rect
        x="22"
        y="8.55554"
        width="4.88889"
        height="1.22222"
        transform="rotate(90 22 8.55554)"
        class="fill-current"
      />
      <rect
        x="17.2163"
        y="12.4753"
        width="5.26182"
        height="1.22222"
        transform="rotate(-45 17.2163 12.4753)"
        class="fill-current"
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
