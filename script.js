// DOM Elements
const addJobForm = document.getElementById('addJobForm');
const jobTableBody = document.querySelector('#jobTable tbody');

// Event Listener: Add Job
addJobForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Collect form values
  const jobTitle = document.getElementById('jobTitle').value;
  const companyName = document.getElementById('companyName').value;
  const ifApplied = document.getElementById('ifApplied').value;
  const appliedDate = document.getElementById('appliedDate').value;
  const jobStatus = document.getElementById('jobStatus').value;
  const applicationLink = document.getElementById('applicationLink').value;

  // Add new row to the table
  addJobRow({
    jobTitle,
    companyName,
    ifApplied,
    appliedDate,
    jobStatus,
    applicationLink,
  });

  // Reset form
  addJobForm.reset();
});

// Function: Add a new row to the table
function addJobRow(job) {
  const newRow = document.createElement('tr');

  newRow.innerHTML = `
    <td>${job.jobTitle}</td>
    <td>${job.companyName}</td>
    <td>${job.ifApplied}</td>
    <td>${job.appliedDate || 'N/A'}</td>
    <td>${job.jobStatus}</td>
    <td><a href="${job.applicationLink}" target="_blank">Link</a></td>
    <td><button class="edit-btn">Edit</button></td>
  `;

  // Add event listener for Edit button
  const editButton = newRow.querySelector('.edit-btn');
  editButton.addEventListener('click', () => editJobRow(newRow, job));

  jobTableBody.appendChild(newRow);
}

// Function: Edit an existing row
function editJobRow(row, job) {
  // Populate form with existing values
  document.getElementById('jobTitle').value = job.jobTitle;
  document.getElementById('companyName').value = job.companyName;
  document.getElementById('ifApplied').value = job.ifApplied;
  document.getElementById('appliedDate').value = job.appliedDate;
  document.getElementById('jobStatus').value = job.jobStatus;
  document.getElementById('applicationLink').value = job.applicationLink;

  // Remove the existing row
  row.remove();

  // Focus on the form
  document.getElementById('jobTitle').focus();
}
