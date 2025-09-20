$('button.delete').click(function (e) {
	e.preventDefault();
	var dataUrl = $(this).attr('data-url');
	alert(dataUrl);
});

$('#add-supplier').submit(function (e) {
	e.preventDefault();

	const unindexed_array = $(this).serializeArray();
	var data = {}

	$.map(unindexed_array, function (n, i) {//assign keys and values from form data
		data[n['name']] = n['value']
	})

	var request = {
		"url": `http://127.0.0.1:5204/api/v1/supplier`,
		"method": "POST",
		"data": data
	}


	$.ajax(request).done(function (response) {
		alert(data.name + " Thêm Thành Công !");
		window.location.href = "/supplier";//redirects to index after alert is closed
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// jqXHR.status = mã HTTP trả về (400, 404, 500,...)
		// textStatus = "timeout", "error", "abort", "parsererror"
		// errorThrown = message của lỗi từ server

		// console.log(jqXHR)
		const message = JSON.parse(jqXHR.responseText)
		// console.log()
		// console.error("Chi tiết:", message.message);
		alert("Lỗi: " + message.message);
	})
})


$('#edit-supplier').submit(function (e) {
	e.preventDefault();

	const unindexed_array = $(this).serializeArray();
	var data = {}

	$.map(unindexed_array, function (n, i) {//assign keys and values from form data
		data[n['name']] = n['value']
	})

	var request = {
		"url": `http://127.0.0.1:5204/api/v1/supplier/${data.id}`,
		"method": "PUT",
		"data": data
	}


	$.ajax(request).done(function (response) {
		alert(data.name + " Sửa Thành Công !");
		window.location.href = "/supplier";//redirects to index after alert is closed
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// jqXHR.status = mã HTTP trả về (400, 404, 500,...)
		// textStatus = "timeout", "error", "abort", "parsererror"
		// errorThrown = message của lỗi từ server

		// console.log(jqXHR)
		const message = JSON.parse(jqXHR.responseText)
		// console.log()
		// console.error("Chi tiết:", message.message);
		alert("Lỗi: " + message.message);
	})
})



$('#add-product').submit(function (e) {
	e.preventDefault();

	const unindexed_array = $(this).serializeArray();
	var data = {}

	$.map(unindexed_array, function (n, i) {//assign keys and values from form data
		data[n['name']] = n['value']
	})

	var request = {
		"url": `http://127.0.0.1:5204/api/v1/product`,
		"method": "POST",
		"data": data
	}


	$.ajax(request).done(function (response) {
		alert(data.name + " Thêm Thành Công !");
		window.location.href = "/product";//redirects to index after alert is closed
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// jqXHR.status = mã HTTP trả về (400, 404, 500,...)
		// textStatus = "timeout", "error", "abort", "parsererror"
		// errorThrown = message của lỗi từ server

		// console.log(jqXHR)
		const message = JSON.parse(jqXHR.responseText)
		// console.log()
		// console.error("Chi tiết:", message.message);
		alert("Lỗi: " + message.message);
	})
})

// Xóa Supplier
$('.delete-supplier').click(function (e) {
	// alert('ádasdasda')
	const id = $(this).attr('id');
	// alert(id)

	if (confirm('Bạn có chắc chắn muốn xóa chứ !!!')) {
		var request = {
			"url": `http://127.0.0.1:5204/api/v1/supplier/${id}`,
			"method": "DELETE",
			// "data": data
		}
		$.ajax(request).done(function (response) {
			alert(" Xóa Thành Công !");
			window.location.href = "/supplier";//redirects to index after alert is closed
		}).fail(function (jqXHR, textStatus, errorThrown) {
			// jqXHR.status = mã HTTP trả về (400, 404, 500,...)
			// textStatus = "timeout", "error", "abort", "parsererror"
			// errorThrown = message của lỗi từ server

			// console.log(jqXHR)
			const message = JSON.parse(jqXHR.responseText)
			// console.log()
			// console.error("Chi tiết:", message.message);
			alert("Lỗi: " + message.message);
		})
	}
})

// Xóa Supplier
$('.delete-product').click(function (e) {
	// alert('ádasdasda')
	const id = $(this).attr('id');
	// alert(id)

	if (confirm('Bạn có chắc chắn muốn xóa chứ !!!')) {
		var request = {
			"url": `http://127.0.0.1:5204/api/v1/product/${id}`,
			"method": "DELETE",
			// "data": data
		}
		$.ajax(request).done(function (response) {
			alert(" Xóa Thành Công !");
			window.location.href = "/product";//redirects to index after alert is closed
		}).fail(function (jqXHR, textStatus, errorThrown) {
			// jqXHR.status = mã HTTP trả về (400, 404, 500,...)
			// textStatus = "timeout", "error", "abort", "parsererror"
			// errorThrown = message của lỗi từ server

			// console.log(jqXHR)
			const message = JSON.parse(jqXHR.responseText)
			// console.log()
			// console.error("Chi tiết:", message.message);
			alert("Lỗi: " + message.message);
		})
	}
})


$('#edit-product').submit(function (e) {
	e.preventDefault();

	const unindexed_array = $(this).serializeArray();
	var data = {}

	$.map(unindexed_array, function (n, i) {//assign keys and values from form data
		data[n['name']] = n['value']
	})

	var request = {
		"url": `http://127.0.0.1:5204/api/v1/product/${data.id}`,
		"method": "PUT",
		"data": data
	}


	$.ajax(request).done(function (response) {
		alert(data.name + " Cập nhật Thành Công !");
		window.location.href = "/product";//redirects to index after alert is closed
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// jqXHR.status = mã HTTP trả về (400, 404, 500,...)
		// textStatus = "timeout", "error", "abort", "parsererror"
		// errorThrown = message của lỗi từ server

		// console.log(jqXHR)
		const message = JSON.parse(jqXHR.responseText)
		// console.log()
		// console.error("Chi tiết:", message.message);
		alert("Lỗi: " + message.message);
	})
})



$('.choose_supplier').click(function (e) {
	const idSupplier = $(this).attr('id_supplier');

	var request = {
		"url": `http://127.0.0.1:5204/api/v1/product/supplier/${idSupplier}`,
		"method": "GET"
	}


	$.ajax(request).done(function (response) {
		// $('#home .data').html()

		// console.log(response);

		let html = '';

		for (const tmp of response) {
			html += `
			<div class="col-md-4 mb-3">
			<div class="product">
				<div class="mb-3">Name : ${tmp.name}</div>
				<div class="mb-3">Price : ${tmp.price}</div>
				<div class="mb-3">Quantity : ${tmp.quantity}</div>
			</div>
			</div>
			`;
		};

		$('#home .listproduct').html(html);
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// jqXHR.status = mã HTTP trả về (400, 404, 500,...)
		// textStatus = "timeout", "error", "abort", "parsererror"
		// errorThrown = message của lỗi từ server

		// console.log(jqXHR)
		const message = JSON.parse(jqXHR.responseText)
		// console.log()
		// console.error("Chi tiết:", message.message);
		alert("Lỗi: " + message.message);
	})
})


$('#searching-form').submit(function (e) {
	e.preventDefault();
	const value = $('#searching-form input').val();

	var request = {
		"url": `http://127.0.0.1:5204/api/v1/product?name=${value}`,
		"method": "GET"
	}


	$.ajax(request).done(function (response) {
		// $('#home .data').html()

		// console.log(response);

		let html = '';

		for (const tmp of response) {
			html += `
			<div class="col-md-4 mb-3">
			<div class="product">
				<div class="mb-3">Name : ${tmp.name}</div>
				<div class="mb-3">Price : ${tmp.price}</div>
				<div class="mb-3">Quantity : ${tmp.quantity}</div>
			</div>
			</div>
			`;
		};

		$('#home .listproduct').html(html);
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// jqXHR.status = mã HTTP trả về (400, 404, 500,...)
		// textStatus = "timeout", "error", "abort", "parsererror"
		// errorThrown = message của lỗi từ server

		// console.log(jqXHR)
		const message = JSON.parse(jqXHR.responseText)
		// console.log()
		// console.error("Chi tiết:", message.message);
		alert("Lỗi: " + message.message);
	})
})



$('#id-login').submit(function (e) {
	e.preventDefault();

	const unindexed_array = $(this).serializeArray();
	var data = {}

	$.map(unindexed_array, function (n, i) {//assign keys and values from form data
		data[n['name']] = n['value']
	})

	var request = {
		"url": `http://127.0.0.1:5204/login`,
		"method": "POST",
		"data": data
	}


	$.ajax(request).done(function (response) {
		alert(data.name + " Đăng Nhập Thành Công !");
		window.location.href = "/";//redirects to index after alert is closed
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// jqXHR.status = mã HTTP trả về (400, 404, 500,...)
		// textStatus = "timeout", "error", "abort", "parsererror"
		// errorThrown = message của lỗi từ server

		// console.log(jqXHR)
		const message = JSON.parse(jqXHR.responseText)
		// console.log()
		// console.error("Chi tiết:", message.message);
		alert("Lỗi: " + message.message);
	})
});


$('#id-register').submit(function (e) {
	e.preventDefault();

	const unindexed_array = $(this).serializeArray();
	var data = {}

	$.map(unindexed_array, function (n, i) {//assign keys and values from form data
		data[n['name']] = n['value']
	})

	var request = {
		"url": `http://127.0.0.1:5204/register`,
		"method": "POST",
		"data": data
	}


	$.ajax(request).done(function (response) {
		alert("Đăng Ký Thành Công !");
		window.location.href = "/";//redirects to index after alert is closed
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// jqXHR.status = mã HTTP trả về (400, 404, 500,...)
		// textStatus = "timeout", "error", "abort", "parsererror"
		// errorThrown = message của lỗi từ server

		// console.log(jqXHR)
		const message = JSON.parse(jqXHR.responseText)
		// console.log()
		// console.error("Chi tiết:", message.message);
		alert("Lỗi: " + message.message);
	})
});