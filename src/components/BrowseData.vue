<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h4>Data {{ this.title + ' - ' + this.doctype }}</h4>
                <hr>
                <div id="dataSearch">
                    <button id="btnAddData" class="btn btn-primary" type="button">
                        Tambah<span class="glyphicon glyphicon-plus"></span>
                    </button>
                    <div class="float-right">
                        <input type="text" class="form-control" placeholder="search here..."/>
                    </div>
                </div>
                <hr>
                <slot>
                    <p style="text-align: center"><span>Default data here</span></p>
                    <router-view name="content"/>
                </slot>
                <hr>
                <pagination-control pagination-data="this.paginationData"/>
            </div>
        </div>
    </div>
</template>

<script>
import PaginationControl from '@/components/PaginationControl'
// import { mapGetters } from 'vuex'

export default {
  props: [
    'title',
    'doctype',
    'data'
  ],
  components: { PaginationControl },
  data () {
    return {
      dataSrc: null
    }
  },
  computed: {
    paginationData () {
      return this.dataSrc ? this.dataSrc.meta.pagination : null
    }
  },
  mounted () {
    if (this.doctype) {
      // force fetch data
      this.$store.dispatch('fetchData', {
        doctype: this.doctype
      }).then((res) => {
        this.dataSrc = res
      })
    }
  }
}
</script>
