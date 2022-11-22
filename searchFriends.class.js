class searchFriends {
    #nameSearch;

    constructor(name) {
        this.#nameSearch = name;
    }

    //método
    searchingName(){
return this.#nameSearch;
    }

}

if (!window.indexedDB) {
    window.alert("Seu navegador não suporta uma versão estável do IndexedDB. Alguns recursos não estarão disponíveis.");
}

// const searchFriends{}

// const a = {first(){return 1;}};

// const b = {second(){return 'não';}};

// const c = {third(){return 3;}};

// const obj = {
//  ...a, ...c 
// };


// console.log(obj.first())