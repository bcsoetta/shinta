<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link to="/" class="navbar-brand">{{ this.$store.getters.getAppName }}</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDokumen" role="button" data-toggle="dropdown">Dokumen</a>
                <div class="dropdown-menu">
                    <router-link tag="li" to="/cd"><a class="dropdown-item">Customs Declaration</a></router-link>
                    <router-link tag="li" to="/is"><a class="dropdown-item">Impor Sementara</a></router-link>
                    <router-link tag="li" to="/spmb"><a class="dropdown-item">SPMB</a></router-link>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarReferensi" role="button" data-toggle="dropdown">Referensi</a>
                <div class="dropdown-menu">
                    <router-link tag="li" to="/kurs"><a class="dropdown-item">Kurs</a></router-link>
                    <router-link tag="li" to="/penumpang"><a class="dropdown-item">Penumpang</a></router-link>
                    <!-- <router-link tag="li" to="/spmb"><a class="dropdown-item">SPMB</a></router-link> -->
                </div>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
                            Search
                        </button>
            </form>
        </div>
        </nav>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  name: 'NavigationBar',

  computed: {
  },
  mounted () {
    // console.log(this.$store)
  }
}
</script>

<style scoped>
nav {
  box-shadow: rgba(0,0,0,0.5) 0 1px 8px 2px;
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#45484d+1,000000+100 */
background: #45484d; /* Old browsers */
background: -moz-linear-gradient(top,  #45484d 1%, #000000 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  #45484d 1%,#000000 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  #45484d 1%,#000000 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#45484d', endColorstr='#000000',GradientType=0 ); /* IE6-9 */

border-radius: 0 0 4px 4px;

margin-bottom: 1em;
}
</style>
