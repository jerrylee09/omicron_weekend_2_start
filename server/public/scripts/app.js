$(document).ready(function(){
	$.ajax({
	type: "GET",
	url: "/data",
		success: function(data){
		var dataList = data.omicron;
		var container = $('.container');
		container.next().append('<div class="block-container"></div>');
		containers();
		
		var studentName = $('#student-0').append('<div class="student-name">' + dataList[0].name + '<div>');
		var studentGit =$('#student-0').append('<div class="student-git">' + dataList[0].git_username + '<div>');
		var studentShout =$('#student-0').append('<div class="student-shout">' + dataList[0].shoutout + '<div>');
		var studentHl =$('.block-item-0').addClass('highlight');
		
		function containers () { 
			for (var i = 0; i < dataList.length; i++) {
				$('.block-container').append('<div class="block-item-' + [i] + ' box"></div>');
				$('.container').append('<section class="student-list">' + '<div id="student-' + [i] + '"></div></section>');
			}
		}

		container.on('click','#next-button', clickNext);
		container.on('click','#previous-button', clickPrevious);

		var click = 0;
		function clickNext() {
		click++;
			if(click < dataList.length) {
				$('#student-' + click).append('<div class="student-name">' + dataList[click].name + '<div>').fadeOut().fadeIn();
				$('#student-' + click).append('<div class="student-git">' + dataList[click].git_username + '<div>').fadeOut().fadeIn();
				$('#student-' + click).append('<div class="student-shout">' + dataList[click].shoutout + '<div>').fadeOut().fadeIn();
				$('.block-item-' + click).addClass('highlight').fadeOut().fadeIn();
				click--;
				$('#student-' + click).empty();
				$('.block-item-' + click).removeClass('highlight');
				click++;
			} else {
				click = dataList.length-1;

			}
		}

		function clickPrevious() {
		click--;
			if(click >= 0) {
				$('#student-' + click).append('<div class="student-name">' + dataList[click].name + '<div>').fadeOut().fadeIn();
				$('#student-' + click).append('<div class="student-git">' + dataList[click].git_username + '<div>').fadeOut().fadeIn();
				$('#student-' + click).append('<div class="student-shout">' + dataList[click].shoutout + '<div>').fadeOut().fadeIn();
				$('.block-item-' + click).addClass('highlight').fadeOut().fadeIn();
				click++;
				$('#student-' + click).empty();
				$('.block-item-' + click).removeClass('highlight');
				click--;
			} else {
				click = 0;
			}
		}

		function timerSet() {
			setInterval(function(){
				if(click < dataList.length-1) {
					clickNext();
				}else{
					$('#student-' + click).empty();
					$('.block-item-' + click).removeClass('highlight');
					click = 0;
					studentName.append('<div class="student-name">' + dataList[0].name + '<div>');
					studentGit.append('<div class="student-git">' + dataList[0].git_username + '<div>');;
					studentShout.append('<div class="student-shout">' + dataList[0].shoutout + '<div>');
					studentHl.addClass('highlight'); 
				}
			}, 1000);
		}

		timerSet();

		}
	});
});
