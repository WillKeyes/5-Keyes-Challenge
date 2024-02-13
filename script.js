

    $(function () {
      // Display the current date in the header
      $('#currentDay').text(dayjs().format('MMMM D, YYYY'));
    
      // Listen for save button clicks and save data to local storage
      $('.saveBtn').on('click', function () {
        var hourId = $(this).closest('.time-block').attr('id');
        var text = $(this).siblings('.description').val();
        localStorage.setItem(hourId, text);
      });
    
      // Apply past, present, or future classes to each time block
      $('.time-block').each(function () {
        var currentHour = dayjs().hour();
        var blockHour = parseInt($(this).attr('id').replace('hour-', ''));
        $(this).removeClass('past present future');
        if (blockHour < currentHour) {
          $(this).addClass('past');
        } else if (blockHour === currentHour) {
          $(this).addClass('present');
        } else {
          $(this).addClass('future');
        }
      });
    
      // Retrieve saved data from local storage and update the text areas
      $('.time-block').each(function () {
        var hourId = $(this).attr('id');
        var savedText = localStorage.getItem(hourId);
        if (savedText) {
          $(this).find('.description').val(savedText);
        }
      });
    });
    