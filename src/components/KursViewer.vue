<template>
    <div class="container">
        <h3>Kurs Pajak dan BI</h3>
        <hr>
        <div class="table-responsive-md">
        <table class="table table-striped table-bordered table-hover table-sm">
            <thead class="thead-dark">
                <th>Kode Valas</th>
                <th>Kurs IDR</th>
                <th>Jenis</th>
                <th>Tanggal Awal</th>
                <th>Tanggal Akhir</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr v-if="this.loading">
                  <td colspan="6"><p style="text-align: center">Loading Data...</p></td>
                </tr>
                <tr v-else v-for="data in kursData" :key="data.id">
                    <td>{{ data.kode_valas }}</td>
                    <td>{{ data.kurs_idr }}</td>
                    <td>{{ data.jenis }}</td>
                    <td>{{ data.tanggal_awal }}</td>
                    <td>{{ data.tanggal_akhir }}</td>
                    <td style="text-align: center">
                        <button type="button" class="btn btn-sm btn-primary"><i class="fa fa-search"></i></button>
                        <button type="button" class="btn btn-sm btn-danger"><i class="fa fa-trash-o"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        <div>
            <PaginationControl :pagination-data="this.pagination" @pageChange="handlePageChange" />
        </div>
    </div>
</template>

<script>
// import SelectPenumpang from '@/components/SelectPenumpang'
import PaginationControl from '@/components/PaginationControl'

export default {
  data () {
    return {
      dataSrc: null,
      loading: true
    }
  },
  methods: {
    loadKurs (pageToLoad = 1) {
      const vm = this
      this.loading = true
      this.$store.dispatch('fetchData', { doctype: 'kurs', params: { page: pageToLoad, number: 10 } })
        .then(function (res) {
          console.log('got data')
          // console.log(res.data)

          vm.dataSrc = res.data
          vm.loading = false
        })
        .catch(function (e) {
          console.log('error')
          // console.log(e)
          vm.loading = false
        })
    },
    handlePageChange (e) {
      console.log(e)
      this.loadKurs(e)
    }
  },
  components: { PaginationControl },
  computed: {
    kursData () {
      return this.dataSrc ? this.dataSrc.data : null
    },
    pagination () {
      return this.dataSrc ? this.dataSrc.meta.pagination : null
    },
    currentPage () {
      return this.dataSrc.meta.pagination.current_page || 0
    }
  },
  mounted () {
    this.loadKurs()
  }
}
</script>

<style scoped>

</style>
