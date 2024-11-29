// document.addEventListener('DOMContentLoaded', () => {
//     const menuItems = document.querySelectorAll('#menu__left div');
//     const contentDiv = document.querySelector('.content');
  
//     menuItems.forEach(item => {
//       item.addEventListener('click', () => {
//         const contentFile = item.getAttribute('data-content');
//         fetch(contentFile)
//           .then(response => {
//             if (!response.ok) throw new Error('Network response was not ok');
//             return response.text();
//           })
//           .then(data => {
//             contentDiv.innerHTML = data;
//           })
//           .catch(error => {
//             contentDiv.innerHTML = `<p>Error loading content: ${error.message}</p>`;
//           });
//       });
//     });
//   });
  