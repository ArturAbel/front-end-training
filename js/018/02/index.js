const url = 'https://jsonplaceholder.typicode.com';


const usersDom = document.getElementById('users');
const  errorDom = document.querySelector('.error-message');
errorDom.style.display = 'none';

const fetchData = async(url) => {
   const response = await fetch(url);
   if(!response.ok){
      throw new Error(`Failed fetching from ${url}`)
   }
   return response.json();
}



const fetchUsers = async () => {
   return fetchData(`${url}/users`);
}



const displayUsers = async () =>{
   try{
      const users = await fetchUsers();
      users.forEach(user => {
         createUsers(user);
      });
   }
   catch (error){
      errorDom.style.display = 'block';
      errorDom.textContent = `error: failed to fetch users`;
   }
}

function createUsers(user){
   const userDom = document.createElement('div');
   userDom.classList.add('user');
   userDom.innerHTML = `<h2>User: ${user.name}</h2><h2>Id:${user.id}</h2>`
   usersDom.append(userDom);
}

displayUsers();