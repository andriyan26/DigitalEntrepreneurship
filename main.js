
    document.addEventListener("DOMContentLoaded", function() {
        // Ambil semua tombol detail
        const btnDetails = document.querySelectorAll('.btnDetail');

        // Loop melalui setiap tombol detail dan tambahkan event listener
        btnDetails.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault(); // Mencegah default perilaku dari link

                // Ambil parent card dari tombol yang diklik
                const parentCard = this.closest('.card');

                // Toggle kelas 'd-none' pada deskripsi untuk menampilkan atau menyembunyikan deskripsi
                parentCard.querySelector('.deskripsi').classList.toggle('d-none');
                
                // Toggle kelas 'd-none' pada detail_produk untuk menampilkan atau menyembunyikan detail_produk
                parentCard.querySelector('.detail_produk').classList.toggle('d-none');
            });
        });

        const menuItems = document.querySelectorAll('.menu ul li a');
        menuItems.forEach(function(menuItem) {
            menuItem.addEventListener('click', function(event) {
                event.preventDefault(); // Mencegah perilaku default dari link
                
                // Dapatkan ID dari target menu yang diklik
                const targetId = event.target.getAttribute('href').slice(1);
                
                // Sembunyikan semua bagian
                hideAllSections();

                // Tampilkan bagian yang sesuai dengan ID target
                document.getElementById(targetId).style.display = "block";
            });
        });

        // Fungsi untuk menyembunyikan semua bagian
        function hideAllSections() {
            const sections = document.querySelectorAll('.container > div');
            sections.forEach(function(section) {
                section.style.display = "none";
            });
        }
    });

