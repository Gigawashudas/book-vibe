import Swal from 'sweetalert2'

const getReadList = () => {
    const storedBookListSTR = localStorage.getItem("readList")

    if (storedBookListSTR) {
        const storedBookList = JSON.parse(storedBookListSTR);
        return storedBookList;
    } else {
        return [];
    }
}

const addToReadList = (id) => {
    const readList = getReadList();

    if (readList.includes(id)) {
        Swal.fire({
            title: 'Already Added!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    } else {
        readList.push(id);
        const data = JSON.stringify(readList)
        localStorage.setItem("readList", data);
    }
}

const getWishList = () => {
    const storedBookListSTR = localStorage.getItem("wishList")

    if (storedBookListSTR) {
        const storedBookList = JSON.parse(storedBookListSTR);
        return storedBookList;
    } else {
        return [];
    }
}

const addToWishList = (id) => {
    const wishList = getWishList();

    if (wishList.includes(id)) {
        Swal.fire({
            title: 'Already Added!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    } else {
        wishList.push(id);
        const data = JSON.stringify(wishList)
        localStorage.setItem("wishList", data);
    }
}



export { addToReadList, getReadList, addToWishList, getWishList };