document.addEventListener("DOMContentLoaded", function () {
    const mapContainer = document.getElementById('mapContainer');

    const events = [
        {
            location: { x: 50, y: 50 },
            time: '10:00 AM',
            dimensions: { width: 100, height: 50 },
            classmates: [students[0]],
            staff: ['Prof. John']
        },
    ];

    const students = [
        {
            firstName: 'John',
            lastName: 'Doe',
            interests: ['Reading', 'Swimming'],
            courses: ['Math 101', 'Physics 102'],
            extracurricular: ['Chess Club', 'Basketball Team'],
            major: 'Physics'
        },
        {
            firstName: 'Alice',
            lastName: 'Smith',
            interests: ['Writing', 'Singing'],
            courses: ['Literature 101', 'History 102'],
            extracurricular: ['Debate Club'],
            major: 'Literature'
        },
    ];

    const users = [
        {
            profilePicture: 'path_to_image.jpg',
            firstName: 'Alex',
            lastName: 'Turner',
            position: { x: 200, y: 250 }
        }
    ];

    const attendingClassmates = event.classmates.map((studentIndex) => {
        const student = students[studentIndex];
        return `<span onclick="showStudentDetails(${studentIndex})">${student.firstName} ${student.lastName}</span>`;
    }).join(', ');


    for (let event of events) {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.style.left = `${event.location.x}px`;
        eventDiv.style.top = `${event.location.y}px`;
        eventDiv.style.width = `${event.dimensions.width}px`;
        eventDiv.style.height = `${event.dimensions.height}px`;


        const eventInfo = document.createElement('div');
        eventInfo.classList.add('eventInfo');
        eventInfo.innerHTML = `
            <strong>Time:</strong> ${event.time}<br>
            <strong>Classmates:</strong> ${event.classmates.join(', ')}<br>
            <strong>Staff:</strong> ${event.staff.join(', ')}
        `;

        const attendingClassmates = event.classmates.map(studentIndex => {
            const student = students[studentIndex];
            return `${student.firstName} ${student.lastName}`;
        }).join(', ');

        eventInfo.innerHTML += `
            <strong>Classmates:</strong> ${attendingClassmates}
        `;


        eventDiv.appendChild(eventInfo);
        mapContainer.appendChild(eventDiv);
    }
    // Render Students
    for (let student of students) {
        const studentDiv = document.createElement('div');
        studentDiv.classList.add('student');
        studentDiv.style.left = `${student.position.x}px`;
        studentDiv.style.top = `${student.position.y}px`;
        studentDiv.innerHTML = `${student.firstName} ${student.lastName}`;
        mapContainer.appendChild(studentDiv);
    }
    // Render Users
    for (let user of users) {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.style.left = `${user.position.x}px`;
        userDiv.style.top = `${user.position.y}px`;
        userDiv.style.backgroundImage = `url('${user.profilePicture}')`;
        userDiv.title = `${user.firstName} ${user.lastName}`;
        mapContainer.appendChild(userDiv);
    }
});

function showStudentDetails(studentIndex) {
    const student = students[studentIndex];
    alert(`
        Name: ${student.firstName} ${student.lastName}\n
        Interests: ${student.interests.join(', ')}\n
        Courses: ${student.courses.join(', ')}\n
        Extracurricular Activities: ${student.extracurricular.join(', ')}\n
        Major: ${student.major}
    `);
}