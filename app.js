function fetchData() {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => {
            showData(data.data.tools)
            console.log(data.data.tools)
            console.log(data.data.tools[5])
        })
    // .then(data => console.log(data.data.tools[0]))
}
fetchData()

function getId(val) {
    return document.getElementById(val)
}

// kjdbfoujrwhbgv

    


function showData(data) {
    const showAmount = data.slice(0,6)
    function def(val){
        const cardParent = getId('compParent');
    const seeMoreButtonSection = document.createElement('div')
        val.forEach(val => {
            const card = document.createElement('div')
                card.classList.add('col')
                card.innerHTML = `
                    <div class="card">
                        <img src="${val.image!=='' ? val.image : "Image Not Found : 404"}" class="card-img-top cardImage" alt="...">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Features</h5>
                            <ul class="listStyleForFeatures">
                               <li> ${val.features[0]}</li>
                               <li> ${val.features[1]}</li>
                               <li> ${val.features[2]}</li>
                            </ul>
                            <hr class="mt-4 mb-3">
                            <h1 class="cardName">${val.name}</h1>
                            <div style="color:##585858;width:100%" class="d-flex justify-content-between flex-col">
                                <div>
                                    <i class="fa-regular fa-calendar-days"></i> 
                                    <span style="margin-left:5px">${val.published_in}</span>
                                </div>
                                <div>
                                    <i class="fa-solid fa-arrow-right" style=""></i>
                                </div>
                            </div>
                        </div>
                    </div>
                `
                // seeMoreButtonSection.innerHTML = `
                
                // `
            cardParent.appendChild(card)
            // getId('main').appendChild(seeMoreButtonSection)
        })
    }
    
    def(showAmount)
    document.getElementById('showMoreBtn').addEventListener('click',function(event){
       
        fetch('https://openapi.programming-hero.com/api/ai/tools')
            .then(res => res.json())
            .then(elem => {
                const showAmount2 = elem.data.tools.slice(6,elem.data.tools.length)
                def(showAmount2)
            })
        event.target.classList.add('d-none')
        getId('showLessBtn').classList.remove('d-none')
    })
    
    getId('showLessBtn').addEventListener('click',fetchData)

}


