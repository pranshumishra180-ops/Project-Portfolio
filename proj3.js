const users = [
  {
    fullname: "Rakesh Dubey",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    profession: "Software Developer",
    description: "Focused on building efficient web applications and learning modern tech stacks.",
    tags: ["JavaScript", "React", "Node.js"]
  },
  {
    fullname: "Amit Sharma",
    image: "https://images.unsplash.com/photo-1763489638919-84c30e4815f9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "UI/UX Designer",
    description: "Designs clean, user-friendly interfaces with a focus on modern design principles.",
    tags: ["Figma", "UI Design", "Prototyping"]
  },
  {
    fullname: "Neha Verma",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "Data Analyst",
    description: "Enjoys converting raw data into meaningful insights using analytical tools.",
    tags: ["Python", "Excel", "Power BI"]
  },
  
  {
    fullname: "Shruti Singh",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    profession: "Cyber Security Analyst",
    description: "Specializes in network security, threat analysis, and ethical hacking.",
    tags: ["Cyber Security", "Ethical Hacking", "Networking"]
  }
];
  

var sum = ''
users.forEach(function(elem){
    

    sum = sum + `<div class="card">       
    <img src="${elem.image}">

            <h3>${elem.fullname}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}  </p>
        </div> `
       
})

var main  = document.querySelector('main')
 
main.innerHTML  = sum     


// 1. make an array of objects and name it user 
// 2. make a card in html 
// 3. user par logo for each and print hello n times 
// 4. make a variable sum and give it value '' (empty section )
// 5. add on 'hello' in sum
// 6.add on card (html code ) in sum and print it too
// 7. select psrent (main) and put sum in its innerHtml
// 8. replace sample data with real data of array of object 