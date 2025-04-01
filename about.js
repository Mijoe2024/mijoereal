document.getElementById("showTeam").addEventListener("click", function() {
    let teamDiv = document.getElementById("teamMembers");
    if (teamDiv.style.display === "none" || teamDiv.style.display === "") {
        teamDiv.style.display = "block";
        this.textContent = "Hide Team";
    } else {
        teamDiv.style.display = "none";
        this.textContent = "See Team";
    }
});
