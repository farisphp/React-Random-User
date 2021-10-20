export const getUser = async (page, size, search, gender) => {
    let url = `https://randomuser.me/api/?page=${page}$pageSize=${size}&results=${size}`;

    if (gender !== "all") {
      url += `&gender=${gender}`
    }

    if (search !== "") {
      url += `&keyword=${search}`
    }

    const userRes = await fetch(url);
    let userData = await userRes.json();
    if (userData.error){
      return {
        error: userData.error
      }
    } else {
      return {
        user: userData.results
      }
    }
}