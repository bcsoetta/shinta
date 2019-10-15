<template>
    <div class="container">
        <h2>Kurs Pajak dan BI</h2>
        <hr>
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
                <tr v-for="data in kursData" :key="data.id">
                    <td>{{ data.kode_valas }}</td>
                    <td>{{ data.kurs_idr }}</td>
                    <td>{{ data.jenis }}</td>
                    <td>{{ data.tanggal_awal }}</td>
                    <td>{{ data.tanggal_akhir }}</td>
                    <td style="text-align: center">
                        <button type="button" class="btn btn-primary"><i class="fa fa-search"></i></button>
                        <button type="button" class="btn btn-danger"><i class="fa fa-trash-o"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <PaginationControl :pagination-data="this.pagination" />
        </div>
    </div>
</template>

<script>
// import SelectPenumpang from '@/components/SelectPenumpang'
import PaginationControl from '@/components/PaginationControl'

export default {
  data () {
    return {
      dataSrc: null
    }
  },
  components: { PaginationControl },
  computed: {
    kursData () {
      return this.dataSrc ? this.dataSrc.data : null
    },
    pagination () {
      return this.dataSrc ? this.dataSrc.meta.pagination : null
    }
  },
  mounted () {
    const vm = this
    this.$store.dispatch('fetchData', { doctype: 'kurs', pagination: this.pagination })
      .then(function (res) {
        console.log('got data')
        // console.log(res.data)

        vm.dataSrc = res.data
      })
      .catch(function (e) {
        console.log('error')
        console.log(e)
      })
  }
}
</script>

<style scoped>

</style>
