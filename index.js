let home_score_el = document.getElementById("home-score")
let home_score = 0
let guest_score_el = document.getElementById("guest-score")
let guest_score = 0

function home_plus_one() {
    home_score += 1
    home_score_el.textContent = home_score
}

function home_plus_two() {
    home_score += 2
    home_score_el.textContent = home_score
}

function home_plus_three() {
    home_score += 3
    home_score_el.textContent = home_score
}

function guest_plus_one() {
    guest_score += 1
    guest_score_el.textContent = guest_score
}

function guest_plus_two() {
    guest_score += 2
    guest_score_el.textContent = guest_score
}

function guest_plus_three() {
    guest_score += 3
    guest_score_el.textContent = guest_score
}