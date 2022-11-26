let progress = document.getElementById("progress")
let title = document.getElementById("title")
let description = document.getElementById("description")
let divSection = document.querySelector("div section")
form.addEventListener('submit', function(e){
    //collect input ellement

    let progressValue = progress.value
    let titleValue = title.value
    let descriptionValue = description.value
    //console.log(progressValue)
    let temp = `
    <div class="skills">
        <div class="sub_skills">
            <span class="prog">${progressValue}%</span>
                <div class="details">
                    <h3>${titleValue}</h3>
                    <p>${descriptionValue}</p>
                </div>
        </div>
     </div>`
     //a
     divSection.innerHTML += temp
})