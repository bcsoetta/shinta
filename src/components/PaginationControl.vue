<template>
    <div class="container">
      <div id="status" class="float-left">
        <span>Menampilkan {{ beginId }} - {{ endId }} dari {{ totalData }}</span>
      </div>
      <div id="controlGroup">
          <button :class="{btn: true, 'btn-primary': canMoveBack, disabled: !canMoveBack}" :disabled="!canMoveBack" @click="pageFirst"><i class="fa fa-angle-double-left"></i></button>
          <button :class="{btn: true, 'btn-primary': canMoveBack, disabled: !canMoveBack}" :disabled="!canMoveBack" @click="pagePrev"><i class="fa fa-angle-left"></i></button>

          <form @submit.prevent="pageTo" role="form" class="form-inline form-sm small-page-status">
              <div class="input-group mb-3">
                  <input ref="pageId" type="text" class="form-control" :value="this.currentPage" />
                  <div class="input-group-append">
                      <span class="input-group-text">/ {{ this.totalPages }}</span>
                  </div>
              </div>
          </form>

          <button :class="{btn: true, 'btn-primary': canMoveForward, disabled: !canMoveForward}" :disabled="!canMoveForward" @click="pageNext"><i class="fa fa-angle-right"></i></button>
          <button :class="{btn: true, 'btn-primary': canMoveForward, disabled: !canMoveForward}" :disabled="!canMoveForward" @click="pageLast"><i class="fa fa-angle-double-right"></i></button>
      </div>
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
      this.$emit('pageChange', 1)
    },
    pagePrev () {
      this.$emit('pageChange', this.currentPage - 1)
    },
    pageNext () {
      console.log('should go to page: ' + (this.currentPage + 1))
      this.$emit('pageChange', this.currentPage + 1)
    },
    pageLast () {
      console.log('should go to page: ' + this.totalPages)
      this.$emit('pageChange', this.totalPages)
    },
    pageTo () {
      // grab value from input?
      var page = this.$refs.pageId.value
      // clamp value
      page = Math.min(Math.max(1, page), this.totalPages)
      // console.log('Moving to: ' + page)
      this.$emit('pageChange', page)
    }
  },
  computed: {
    canMoveBack () {
      return this.currentPage > 1
    },
    canMoveForward () {
      return this.currentPage < this.totalPages
    },
    currentPage () {
      return this.paginationData ? this.paginationData.current_page : 0
    },
    totalPages () {
      return this.paginationData ? this.paginationData.total_pages : 0
    },
    totalData () {
      return this.paginationData ? this.paginationData.total : 0
    },
    perPage () {
      return this.paginationData ? this.paginationData.per_page : 0
    },
    beginId () {
      return Math.max(0, (this.currentPage - 1) * this.perPage + 1)
    },
    endId () {
      return Math.min(this.currentPage * this.perPage, this.totalData)
    }
  },
  mounted () {
    console.log(this.paginationData)
    // console.log(this)
  }
}
</script>

<style scoped>
#controlGroup {
    margin: auto;
    text-align: right;
}

.small-page-status {
    display: inline-block;
    max-width: 6em;
    vertical-align: top;
}
</style>
