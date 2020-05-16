<template>
  <component
    :is="$responsiveProp('tag')"
    :class="rootClasses"
    :data-name="$NAME"
    v-bind="$rootProps"
  >
    <span
      v-if="html"
      class="app-br"
      v-html="$responsiveProp('html')"
    />
    <slot v-else>
      {{ $responsiveProp('text') }}
    </slot>
  </component>
</template>
