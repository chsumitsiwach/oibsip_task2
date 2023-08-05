on('click', '.mobile-nav-toggle', function (e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('fa-solid')
    this.classList.toggle('fa-bars-x')
})
