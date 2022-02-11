
let bosses = {
    Mark: {
        Image: 'https://avatars.githubusercontent.com/u/20800016?v=4',
        Health: 100
    }
}

let heroes = {
    Mick: {
        Image: "https://media-exp1.licdn.com/dms/image/C4D03AQHQ1hkP8oGLcg/profile-displayphoto-shrink_200_200/0/1600292459548?e=1646265600&v=beta&t=5gdnBA2CbPRGVIDIdCPlRZk-CwA7hvmjoLzilH0P_d0",
        Health: 100
    }
}

function drawBoss() {
    let template = ''
    for (let name in bosses) {
        let key = bosses[name]
        template += `
        <div id="${name}" class="col-12 col-md-6 bg-dark">
            <img class="img-fluid" src="${key.Image}" alt="MarkO" onclick="attackBoss()">
            <h1>${name}</h1>
            <div class="progress">
                <div class="progress-bar bg-primary|secondary|success|danger|warning|info|light|dark"
                    role="progressbar" style="width: ${key.Health}%;" aria-valuenow="25" aria-valuemin="0"
                    aria-valuemax="100">
                    ${name}s health</div>
            </div>
        </div>
        `
        document.getElementById('bossesID').innerHTML = template
    }
}

function drawHero() {
    let template = ''
    for (let key in heroes) {
        let hero = heroes[key]
        template += `
        <div id="${key}" class="col-12 col-md-6 bg-dark">
            <img class="img-fluid" src="${hero.Image}" alt="MarkO">
            <h1>${key}</h1>
            <div class="progress">
                <div class="progress-bar bg-primary|secondary|success|danger|warning|info|light|dark"
                    role="progressbar" style="width: ${hero.Health}%;" aria-valuenow="25" aria-valuemin="0"
                    aria-valuemax="100">
                    ${key}s health</div>
            </div>
        </div>
        `
        document.getElementById('heroesID').innerHTML = template
    }

}

function updateHeroHealth(thing) {
    let heroElem = document.getElementById(thing)
    let bar = heroElem.querySelector('.progress-bar')
    bar.style.width = heroes[thing].Health + '%'
    console.log("heroElem", heroElem)
}

function attackHero() {
    console.log('attack-hero')
    for (let name in heroes) {
        let damage = heroes[name]
        if (damage.Health > 0) {
            damage.Health -= 10
            if (damage.Health <= 0) {
                damage.Health = 0
                console.log("You lose")
            }
        }
        updateHeroHealth(name)
    }
}

let healthInterval = setInterval(attackHero, 2000)


function updateHealth(thing) {
    let bossElem = document.getElementById(thing)
    let bar = bossElem.querySelector('.progress-bar')
    bar.style.width = bosses[thing].Health + '%'
    console.log("bossElem", bossElem)
}

function attackBoss() {
    console.log('attack')
    for (let name in bosses) {
        let damage = bosses[name]
        if (damage.Health > 0) {
            damage.Health -= 10
            if (damage.Health <= 0) {
                damage.Health = 0
                console.log("You win!")
                reset()
            }
        }
        updateHealth(name)
    }
}

// function reset() {
//     for (let name in bosses) {
//         let bossHeal = bosses[name]
//         if (bossHeal.Health <= 0) {
//             bossHeal.Health = 100
//         }
//     }

//     for (let name in heroes) {
//         let heroHealth = heroes[name]
//         if (heroHealth.Health <= 0) {
//             heroHealth.Health = 100
//         }
//     }
// }


drawHero()
drawBoss()

