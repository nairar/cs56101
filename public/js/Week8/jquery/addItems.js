function addToCart() {

		$('.cart').empty();
		var temp = 0;
		var total = 0;
		$('input[type="checkbox"]').each(function(index, value) {
			if (this.checked) {
				var parent = $(this).parent();
				temp = Math.floor(Math.random()*100);
				total += temp;
				$('.cart').append("<div>" + $(parent).siblings('.details').text() + "------" + "$" + temp + "</div>");

			}
		});
		$('.cart').append("<hr/>")
		$('.cart').append("<div>" + "Total:    $" + total +"(Taxes inclusive)</div>")
	
}