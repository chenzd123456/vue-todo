<template>
  <div id="main-layout" class="my-fullscreen my-layout-containder-v">
    <div id="header" class="my-layout-cell">
      <slot name="header">header</slot>
    </div>
    <div id="body" class="my-layout-containder-h my-layout-cell-scaled">
      <div id="left-side">
        <slot name="left-side" class="my-layout-cell">left-side</slot>
      </div>
      <div id="main" class="my-layout-cell-scaled">
        <slot name="main">main</slot>
      </div>
    </div>
    <div id="footer" class="my-layout-cell">
      <slot name="footer">footer</slot>
    </div>
  </div>
</template>

<style scoped>
#header {
  height: 40px;
  background-color: bisque;
}

#body {
  background-color: ghostwhite;
}

#left-side {
  background-color: blue;
}

#main {
  background-color: greenyellow;
}

#footer {
  height: 40px;
  background-color: yellow;
}
</style>
