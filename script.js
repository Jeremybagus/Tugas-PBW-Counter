var count = 0;

        function kurang() {
            count += 1;
            document.getElementById('hasil').innerHTML = count;
        }

        function tambah() {
            if (count != 0) {
                count -= 1;
            }
            document.getElementById('hasil').innerHTML = count;
        }