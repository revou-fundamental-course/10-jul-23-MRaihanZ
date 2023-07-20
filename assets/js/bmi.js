const url = window.location.href;
const params = new URLSearchParams(url.search);
const jk = params.get(jk);
const bb = params.get(bb);
const usia = params.get(usia);
const tb = params.get(tb) / 100;
const bmi = bb / tb ** 2;
const fixBmi = bmi.toFixed(1);

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
	penyakit.innerText = "Infertilitas, Anemia, Osteoporosis, Sistem Imun Lemah";
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
