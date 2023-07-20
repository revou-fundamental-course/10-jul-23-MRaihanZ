// di line ini membuat fungsi untuk validate dan kalkulasi dari BMI
const submit = document.getElementById("btn_bmi");
submit.addEventListener("click", function (event) {
	// menggunakan preventDefault agar fungsi dari tag form tidak terpanggil
	event.preventDefault();
	// membuat vairable untuk mengambil id elemen
	const jk = document.querySelector(`input[name="jk"]:checked`);
	const bb = document.getElementById("bb").value;
	const usia = document.getElementById("usia").value;
	const tb = document.getElementById("tb").value;
	// validasi form BMI
	if (!jk) {
		window.alert("Pilih Jenis Kelamin Anda Terlebih Dahulu");
		return;
	}
	if (bb === "") {
		window.alert("Isikan Berat Badan Anda Terlebih Dahulu");
		return;
	}
	if (usia === "") {
		window.alert("Isikan Usia Anda Terlebih Dahulu");
		return;
	}
	if (tb === "") {
		window.alert("Isikan Tinggi Badan Anda Terlebih Dahulu");
		return;
	}
	// kalkulasi form BMI
	// (tb / 100) untuk mengubah dari CM ke M
	const bmi = bb / (tb / 100) ** 2;
	// menggunakan toFixed(1) agar angka dibelakang koma hanya 1
	const fixBmi = bmi.toFixed(1);

	// membuat tampilan dari kalkulator dan fitur menjadi tidak ada
	const kalkulator = document.getElementById("kalkulator");
	kalkulator.style.display = "none";
	const fitur = document.getElementById("fitur");
	fitur.style.display = "none";

	// membuat variable membuat vairable untuk mengambil id elemen hasil dll
	const hasil = document.getElementById("hasil");
	const titleKalkulator = document.getElementById("title-kalkulator");
	const totalKalkulator = document.getElementById("total-kalkulator");
	const penjelasanKalkulator = document.getElementById("penjelasan-kalkulator");
	const bmiInfo = document.getElementById("bmi-info");
	const kategoriPenjelasan = document.getElementById("istilah");
	const penjelasanBmi = document.getElementById("penjelasan-bmi");
	const penyakitContainer = document.getElementById("penyakit-container");
	const penyakit = document.getElementById("penyakit");
	const istilahPenyakit = document.getElementById("istilah-penyakit");
	// menggunakan percabangan untuk mensortir kekurangan berat badan, normal, kelebihan berat badan, dan obesitas
	if (fixBmi < 18.5) {
		hasil.style.display = "block";
		titleKalkulator.innerText = "Kekurangan Berat Badan";
		totalKalkulator.innerText = fixBmi;
		penjelasanKalkulator.innerText = "berat badan yang kurang";
		bmiInfo.innerText = "kurang dari 18.5";
		kategoriPenjelasan.innerText = "Kekurangan Berat Badan";
		penjelasanBmi.innerText =
			"Tambah berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.";
		istilahPenyakit.innerText = "Kekurangan Berat Badan";
		penyakit.innerText =
			"Infertilitas, Anemia, Osteoporosis, Sistem Imun Lemah";
	} else if (fixBmi >= 18.5 && fixBmi <= 24.9) {
		hasil.style.display = "block";
		titleKalkulator.innerText = "Berat Badan Normal";
		totalKalkulator.innerText = fixBmi;
		penjelasanKalkulator.innerText = "berat badan yang Normal";
		bmiInfo.innerText = "diantara 18.5 dan 24.9";
		kategoriPenjelasan.innerText = "Berat Badan Normal";
		penjelasanBmi.innerText =
			"Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.";
		penyakitContainer.style.display = "none";
	} else if (fixBmi >= 25.0 && fixBmi <= 29.9) {
		hasil.style.display = "block";
		titleKalkulator.innerText = "Kelebihan Berat Badan";
		totalKalkulator.innerText = fixBmi;
		penjelasanKalkulator.innerText = "berat badan yang Berlebih";
		bmiInfo.innerText = "diantara 25.0 dan 29.9";
		kategoriPenjelasan.innerText = "Kelebihan Berat Badan";
		istilahPenyakit.innerText = "Kelebihan Berat Badan";
		penjelasanBmi.innerText =
			"Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik.";
		penyakit.innerText = "Diabetes, Hipertensi, Sakit Jantung, Osteoarthritis";
	} else {
		hasil.style.display = "block";
		titleKalkulator.innerText = "Kegemukan (Obesitas)";
		totalKalkulator.innerText = fixBmi;
		penjelasanKalkulator.innerText = "berat badan yang terlalu berlebih";
		bmiInfo.innerText = "lebih dari 30.0";
		kategoriPenjelasan.innerText = "Kegemukan (Obesitas)";
		istilahPenyakit.innerText = "Kegemukan (Obesitas)";
		penjelasanBmi.innerText =
			"Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik.";
		penyakit.innerText = "Diabetes, Hipertensi, Sakit Jantung, Osteoarthritis";
	}
});

// baris ini untuk mendownload / menprint hasil dari halaman
const print = document.getElementById("download-hasil-bmi");
print.addEventListener("click", function () {
	// membuat vairable untuk mengambil id elemen
	const penjelasanHeader = document.getElementById("penjelasan-header");
	const fitur = document.getElementById("fitur");
	const btnDownload = document.getElementById("download-hasil-bmi");
	const btnPenjelasan = document.getElementById("button-penjelasan");
	const btnPenyakit = document.getElementById("button-penyakit");
	const footer = document.getElementById("footer");
	// membuat tampilan beberapa elemen menjadi tidak ada
	penjelasanHeader.style.display = "none";
	btnDownload.style.display = "none";
	btnPenjelasan.style.display = "none";
	btnPenyakit.style.display = "none";
	footer.style.display = "none";
	// untuk print / mendownload halaman
	window.print();
	// untuk membalikkan tampilan seperti semula dari yang tampilannya tidak ada karena print
	setTimeout(function () {
		penjelasanHeader.style.display = "block";
		btnDownload.style.display = "inline-block";
		btnPenjelasan.style.display = "block";
		btnPenyakit.style.display = "block";
		footer.style.display = "flex";
	}, 100);
});
