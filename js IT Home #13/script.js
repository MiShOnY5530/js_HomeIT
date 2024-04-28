function $(document) {

}

$(document).ready(function()
{
	$('.tab-link').click(function(event)
	{
		event.preventDefault();
		var target = $(this).attr('href');

		$('.tab-link').removeClass('active');
		$(this).addClass('active');

		$('.tab-content').hide();
		$(target).show();
	});
});



$(document).ready(function()
{
	$("#openModalButton").click(function()
	{
		$("#modalWindow").show();
	});

	$("#closeButton").click(function()
	{
		$("#modalWindow").hide();
	});
});


$(document).ready(function()
{
	let data = ["ASP.NET", "JavaScript", "List", "Perl", "PHP", "Python"];

	$("#autocomplete").autocomplete(
	{
		source: data,
		select: function(event, ui)
		{
			$("#autocomplete").val(ui.item.label);
		}
	});
});


let data = {
	"header": "string #1",
	"maxvalue": 254,
	"data": [
	{
		"title": "Element  #1",
		"value": 150
	}]
};

$(document).ready(function()
{
	let maxvalue = data.maxvalue;
	let header = data.header;


	$('#chart').append($('<h1>').text(header));

	$.each(data.data, function(i, item)
	{
		let bar = $('<div>').addClass('bar').css('width', (item.value / maxvalue * 100) + '%');
		let label = $('<span>').text(item.title + ': ' + item.value);
		$('#chart').append(bar).append(label);
	});
});



let data2 = {
	"header": "User rating #2",
	"maxvalue": 254,
	"data": [
	{
		"title": "5 stars",
		"value": 150
	},
	{
		"title": "4 stars",
		"value": 63
	},
	{
		"title": "3 stars",
		"value": 15
	},
	{
		"title": "2 stars",
		"value": 6
	},
	{
		"title": "1 stars",
		"value": 20
	}, ]
};

$(document).ready(function()
{
	let maxvalue = data2.maxvalue;
	let header = data2.header;

	$('#chart2').append($('<h1>').text(header));

	let colors = ['red', 'purple', 'Grey', 'green', 'Brown'];

	$.each(data2.data, function(i, item)
	{
		let bar = $('<div>').addClass('bar').css('width', (item.value / maxvalue * 100) + '%');
		bar.css('background-color', colors[i]);
		let label = $('<span>').text(item.title + ': ' + item.value);
		$('#chart2').append(bar).append(label);
		console.log(colors[i]);
	});
});
