chrome.storage.sync.get({
    token: ''
}, function(items) {
  var task = $('.entity-name').html() + " - " + $('.issue-id').html().trim();

  var new_button = $('<a />', {
    "id": "change-state",
    "class": "aui-button",
    "href": "#",
    "title": "WorkingOn this",
    "target": "_blank",
  }).html("WorkingOn This").on('click', function() {
    $.get("https://api.workingon.co/hooks/incoming?token=" + items.token + "&source=bookmarklet&task=" + encodeURIComponent(task))
    return false;
  });

  new_button.appendTo($('#issue-actions'));
});

