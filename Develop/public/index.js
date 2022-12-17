const userNoteInput = document.getElementById("noteTitle")
const userNoteText = document.getElementById("noteText")

const sendNoteObj = (note) => {
    fetch("/api/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
    })
    .then((res) => res.json())
    .then((data) => {
        console.log("Successful POST request:", data)
        return data
    })
    .catch((error) => {
        console.error("Error in POST request:", error)
    })
}