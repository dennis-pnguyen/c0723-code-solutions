const business = {
  opens: '7AM',
  closes: '8PM',
  totalEmployees: 5,
  daysOpen: ['Tu', 'W', 'Th', 'F'],
  employees: {
    marshall: {
      position: 'software programmer',
      daysOfWeekWorking: ['Tu', 'W', 'F'],
    },
    aiden: {
      position: 'full stack developer',
      daysOfWeekWorking: ['M', 'W', 'F'],
    },
    hannah: {
      position: 'ceo',
      daysOfWeekWorking: ['Tu', 'Th', 'F'],
    },
    dennis: {
      position: 'cfo',
      daysOfWeekWorking: ['W', 'F'],
    },
    jessica: {
      position: 'web developer',
      daysOfWeekWorking: ['M', 'Tu', 'W', 'Th', 'F'],
    },
  },
};

function addWeekends() {
  business.daysOpen.push('Sat', 'Sun');
  for (const key in business.employees) {
    business.employees[key].daysOfWeekWorking.push('Sat', 'Sun');
  }
}
addWeekends();
console.log(business);

async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Network response was NOT okay');
    }
    const res = await response.json();
    console.log(res);
    return res;
  } catch (err) {
    console.error(err);
  }
}
fetchUsers();

async function addEmployees() {
  const users = await fetchUsers();
  for (let i = 0; i < 4; i++) {
    business.employees[users[i].name] = {
      position: `job ${i}`,
      daysOfWeekWorking: ['M', 'Tu', 'W'],
    };
    business.totalEmployees++;
  }
}
addEmployees();
console.log(business);

function deleteEmployee(employeeName) {
  if (business.employees[employeeName] === undefined) {
    console.log('WRONG THERE IS NO ONE NAMED THAT');
    return;
  }
  business.totalEmployees--;
  delete business.employees[employeeName];
}
deleteEmployee('dennis');
