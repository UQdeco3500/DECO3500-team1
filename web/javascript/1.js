const dateAndTime = document.getElementById('date-time');
const eventLocation = document.getElementById('event-location');
const eventType = document.getElementById('event-type');

const editButton = document.getElementById('edit-button');
const saveButton = document.getElementById('save-button');
const cancelButton = document.getElementById('cancel-button');

editButton.addEventListener('click', function() {
  dateAndTime.contentEditable = true;
  eventLocation.contentEditable = true;
  eventType.contentEditable = true;

  saveButton.style.display = 'block';
  cancelButton.style.display = 'block';
  editButton.style.display = 'none';

  dateAndTime.style.backgroundColor = 'lightyellow';
  eventLocation.style.backgroundColor = 'lightyellow';
  eventType.style.backgroundColor = 'lightyellow';
});

saveButton.addEventListener('click', function() {
  dateAndTime.contentEditable = false;
  eventLocation.contentEditable = false;
  eventType.contentEditable = false;

  saveButton.style.display = 'none';
  cancelButton.style.display = 'none';
  editButton.style.display = 'block';

  dateAndTime.style.backgroundColor = 'transparent';
  eventLocation.style.backgroundColor = 'transparent';
  eventType.style.backgroundColor = 'transparent';
});

cancelButton.addEventListener('click', function() {
  dateAndTime.textContent = '15th Sep, 8:00-11:00AM';
  eventLocation.textContent = 'UQ Union Complex Food';
  eventType.textContent = '3 hrs Lecture';

  dateAndTime.contentEditable = false;
  eventLocation.contentEditable = false;
  eventType.contentEditable = false;

  saveButton.style.display = 'none';
  cancelButton.style.display = 'none';
  editButton.style.display = 'block';

  dateAndTime.style.backgroundColor = 'transparent';
  eventLocation.style.backgroundColor = 'transparent';
  eventType.style.backgroundColor = 'transparent';
});
