<template>
  <div class="container">
    <span class="typed-text">{{ typeValue }}</span>
    <span class="blinking-cursor">|</span>
    <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
  </div>
</template>

<script>
export default {
  name: 'typeWiriter',
  data: () => {
    return {
      typeValue: '',
      typeStatus: false,
      // displayTextArray: ['cart', 'carrinho', 'Eu Labs 🚌', 'desafio'],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 3000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },

  props: {
    displayTextArray: Array,
  },

  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },

  methods: {
    typeText() {
      if (
        this.charIndex <
        this.displayTextArray[this.displayTextArrayIndex].length
      ) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[
          this.displayTextArrayIndex
        ].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[
          this.displayTextArrayIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

// Cursor blinking CSS Starts...
.blinking-cursor {
  font-size: 2rem;
  font-weight: 400;
  color: white;

  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}

@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: white;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: white;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: white;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: white;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: white;
  }
}
// Cursor blinking CSS Ends...
</style>
