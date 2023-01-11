// Nav
function responsive() {
	var x = document.getElementById("myTopNav");
	if (x.className === "hero") {
		x.classList.add("responsive");
	} else {
		x.className = "hero";
	}
}

$(document).ready(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 100) {
			$(".hero").addClass("blur");
		} else {
			$(".hero").removeClass("blur");
		}

		if ($(window).scrollTop() > 700) {
			$("#logo").html('<i class="fa-solid fa-minus"></i>Satria Reza Ramadhan');
		} else {
			$("#logo").html('<i class="fa-solid fa-minus"></i>Portofolio');
		}

		if ($(window).scrollTop() >= 0 && $(window).scrollTop() < 699) {
			$("#link-home").addClass("yellow");
		} else {
			$("#link-home").removeClass("yellow");
		}

		if ($(window).scrollTop() > 700 && $(window).scrollTop() < 2800) {
			$("#link-about").addClass("yellow");
		} else {
			$("#link-about").removeClass("yellow");
		}

		if ($(window).scrollTop() > 2800) {
			$("#link-home").addClass("grey");
			$("#link-about").addClass("grey");
			$("#link-contact").addClass("yellow");
			$("#logo").addClass("green");
		} else {
			$("#link-home").removeClass("grey");
			$("#link-about").removeClass("grey");
			$("#link-contact").removeClass("yellow");
			$("#logo").removeClass("green");
		}
	});
});

// Reveal animation
function reveal() {
	var reveals = document.querySelectorAll(".reveal");

	reveals.forEach((reveal) => {
		var windowHeight = window.innerHeight;
		var elemenTop = reveal.getBoundingClientRect().top;
		var elementVisible = 100;

		if (elemenTop < windowHeight - elementVisible) {
			reveal.classList.add("active");
		} else {
			reveal.classList.remove("active");
		}
	});
}

window.addEventListener("scroll", reveal);

$(document).ready(function () {
	$(".trigger").on("click", function () {
		$(".modal-wrapper").toggleClass("close");
		return false;
	});
});
