var appId = '96346783ca8b12e97741437b43f9fbfe7d91a5d2fb755310747e774db03072d9'

new Vue({
  el: '#app',
  data: {
    photos: [],
    totalPhotos: 0,
    perPage: 9,
    currentPage: 1
  },
  methods: {
    fetchPhotos: function(page) {
      var options = {
        params: {
          client_id: appId,
          page: page,
          per_page: this.perPage
        }
      }

      this.$http.get('https://api.unsplash.com/photos', options).then(function(response) {

        this.photos = response.data

        this.totalPhotos = parseInt(response.headers.get('x-total'))

        this.currentPage = page

      }, console.log)
    }
  },
  created: function() {
    this.fetchPhotos(this.currentPage)
  }
})