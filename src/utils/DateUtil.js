export const formatDate = (dateInput) => {
    const date = new Date(dateInput);
    return ("0" + date.getDate()).slice(-2) + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + date.getFullYear() + " " + 
    ("0" + (date.getHours() + 1)).slice(-2) + ":" + ("0" + (date.getMinutes() + 1)).slice(-2)
}