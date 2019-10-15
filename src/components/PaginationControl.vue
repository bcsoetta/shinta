<template>
    <div id="controlGroup">
        <button :class="{btn: true, 'btn-primary': canMoveBack, disabled: !canMoveBack}" :disabled="!canMoveBack" @click="pageFirst">&lt;&lt;</button>
        <button :class="{btn: true, 'btn-primary': canMoveBack, disabled: !canMoveBack}" :disabled="!canMoveBack" @click="pagePrev">&lt;</button>

        <form @submit.prevent role="form" class="form-inline small-page-status">
            <div class="input-group mb-3">
                <input type="text" class="form-control" :value="this.currentPage"  />
                <div class="input-group-append">
                    <span class="input-group-text">/ {{ this.totalPages }}</span>
                </div>
            </div>
        </form>

        <button :class="{btn: true, 'btn-primary': canMoveForward, disabled: !canMoveForward}" :disabled="!canMoveForward" @click="pageNext">&gt;</button>
        <button :class="{btn: true, 'btn-primary': canMoveForward, disabled: !canMoveForward}" :disabled="!canMoveForward" @click="pageLast">&gt;&gt;</button>
    </div>
</template>

<script>
export default {
  props: {
    paginationData: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
    }
  },
  methods: {
    pageFirst () {
      alert(this.paginationData)
    },
    pagePrev () {
      alert(this.paginationData)
    },
    pageNext () {
      alert(this.paginationData)
    },
    pageLast () {
      alert(this.paginationData)
    }
  },
  computed: {
    canMoveBack () {
      return this.currentPage > this.totalPages
    },
    canMoveForward () {
      return this.currentPage < this.totalPages
    },
    currentPage () {
      return this.paginationData ? this.paginationData.current_page : 0
    },
    totalPages () {
      return this.paginationData ? this.paginationData.total_pages : 0
    }
  },
  mounted () {
    // console.log(this.paginationData)
    console.log(this)
  }
}
</script>

<style scoped>
#controlGroup {
    margin: auto;
    text-align: center;
}

.small-page-status {
    display: inline-block;
    max-width: 6em;
}
</style>
