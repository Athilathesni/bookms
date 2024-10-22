async function getMovies() {
    const res = await fetch("http://localhost:4000/api/getMovies");
    const movie=await res.json();
    console.log(movie);
    str=``;
    movie.map((data)=>{
        str+=`
               <div>
                    <a href="pages/mov.html?id=${data._id}">
                        <div class="card-img">
                            <img src="${data.cardpic}"
                                width="225"
                                height="380" alt>
                        </div>
                        <div>
                            <div class="s1-text-1"
                                style="padding-top: 5px;"><h3>${data.name}</h3></div>
                            <div class="s1-text-2"
                                style="padding-top: 5px;"><span>${data.category}</span></div>
                        </div>
                    </a>
                </div>
            
        `
    });
    document.getElementById('sec-1-card').innerHTML=str; 
}
getMovies()




// async function getUser() {
//     const res = await fetch("http://localhost:4000/api/getuser");
//     const movie=await res.json();
//     console.log(movie);
//     str=``;
//     movie.map((user)=>{
//         str+=`
//                <form action="/register" method="post" id="form"}">
//             <input type="text" name="username" id="username" placeholder="UserName" value="${user.username}"/>
//             <input type="email" name="email" placeholder="Email" id="email" value="${user.email}"/>
//             <input type="password" name="pass" placeholder="Password" id="pass" value="${user.pass}"/>
//             <input type="cpassword" name="cpass" placeholder="confirm password" id="cpass" value="${user.cpass}">
//             <button>Sign Up</button>
//             </form>
            
//         `
//     });
//     document.getElementById('form').innerHTML=str; 
// }
// getUser()