<template>
  <div class="card-wrapper-skeleton">
    <div class="card-title-skeleton">
      <q-skeleton type="text" class="q-px-xl" />
    </div>

    <div class="image-content-skeleton">
      <q-skeleton square height="14rem" width="100%" />
    </div>

    <div class="card-content">
      <div class="card-description-skeleton">
        <q-skeleton type="text" />
        <q-skeleton type="text" />
      </div>

      <div class="separator" />

      <div class="cart-buttons-group">
        <q-skeleton type="QBtn" />
        <q-skeleton type="QBtn" width="2.5rem" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card-wrapper-skeleton {
  display: flex;
  flex-direction: column;

  width: 14rem;

  border: 2px solid black;
  box-shadow: 1px 1px 0px 0px #000000;

  cursor: pointer;
  position: relative;

  background-color: $primary;
}

.card-wrapper-skeleton:hover {
  box-shadow: 0.2rem 0.2rem rgb(0, 0, 0);
  transition: all ease 0.25s;
}

.card-title-skeleton {
  position: absolute;

  top: -1rem;
  left: -1rem;

  max-width: 12rem;
  z-index: 10;

  background: $primary;
  border: 2px solid #000000;

  font-size: 1rem;
  box-shadow: 2px 2px 0px 0px #000000;

  overflow: hidden;
  padding: 0.5rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.image-content-skeleton {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-height: 16rem;
  padding: 1rem;

  overflow: hidden;
  background-color: white;
}

.image-product-wrapper {
  height: 100%;
}

.card-content {
  border-top: 2px solid #000000;
}

.card-description-skeleton {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  max-height: 3.2rem;

  margin: 1rem 0.5rem;
}

.separator {
  border: 0.5px solid #000000;
  margin: 0 0.5rem 0.5rem 0.5rem;
}

.cart-buttons-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;

  width: 100%;
}

.button-icons {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  padding: 0.5rem;
}

.button-icons:hover {
  svg {
    transition: all ease 0.25s;
    transform: rotate(90deg);
  }
}
</style>
