function generateFibonacci(n) {
    let fibonacci = [0, 1]; // Inisialisasi array dengan dua angka pertama dari deret Fibonacci
  
    // Loop untuk menghasilkan angka-angka Fibonacci selanjutnya
    for (let i = 2; i < n; i++) {
      let nextFib = fibonacci[i - 1] + fibonacci[i - 2]; // Menghitung angka Fibonacci berikutnya
      fibonacci.push(nextFib); // Menambahkan angka tersebut ke dalam array Fibonacci
    }
  
    return fibonacci; // Mengembalikan array dengan n angka Fibonacci
  }
  
  const n = 25; // Jumlah angka Fibonacci yang ingin dihasilkan
  const fibonacciSequence = generateFibonacci(n); // Memanggil fungsi untuk menghasilkan deret Fibonacci
  
  console.log(fibonacciSequence); // Menampilkan deret Fibonacci ke konsol
  